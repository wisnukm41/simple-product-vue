<template>
   <FormKit 
    type="form"
    @submit="submit"
    submit-label="Add Product"
    :value="{
      name: edit ? product.name : '',
      description: edit ? product.description : '',
      price: edit ? product.price : '',
      productImage: ''
    }"
  >
    <FormKit
    label="Product Name"
    name="name"
    validation="required|length:0,255"
    placeholder="Attractive product"
    />

    <FormKit
      type="textarea"
      name="description"
      label="Product Description"
      placeholder="Add a compalling description of your product"
      validation="length:10,|required"
      :validation-messages="{
        length : 'Description minimum length is 10 character'
      }"
    />

    <FormKit
      name="price"
      label="Product Price"
      placeholder="Price IDR"
      validation="min:1000|required"
    />

    <div v-if="edit">
      <img :src=" product.image.startsWith('https://picsum.photos') ? `${product.image}` : `${laravelUrl}/storage/${product.image}`" :alt="`image of ${product.name}`" class="object-cover w-24">
    </div>

    <FormKit
      type="file"
      label="Product Image"
      name="productImage"
      accept="image/*"
      help="Select one image suit your product best. (max 5MB)"
      :validation=" edit ? `checkImage` : `required|checkImage`"
      :validation-rules="{ checkImage }"
      :validation-messages="{
        checkImage: 'File image size must be smaller tham 5MB'
      }"

    />
  </FormKit>
</template>

<script setup>
import { laravelUrl } from "@/common/http";
import { FormKit } from "@formkit/vue";

const props = defineProps({
  product : Object,
  edit : {
    type : Boolean,
    default : false
  }
})

const emit = defineEmits(['submit'])

const submit = (data) => {
    emit('submit', data)
}

const checkImage = (x) => {
  return x.value[0].file.size < 5000000
}

</script>

<style lang="scss" scoped>

</style>