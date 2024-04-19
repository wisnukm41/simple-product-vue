<template>
  <div v-if="product">
    <h1 class="text-2xl font-bold text-gray-600">
      Edit Product of {{ product.name }}
    </h1>
    <FormProduct @submit="submit" :product="product" :edit="true"/>
  </div>
</template>

<script setup>
import FormProduct from '@/components/FormProduct.vue'
import http from '@/common/http'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['success', 'error'])
const product = ref(null)

onMounted( async () => {
    try {
        const response = await http.get(`/products/${route.params.id}`)
        if(response.status = 200){
            product.value = response.data.data
        } else {
            console.log(response.data.message)
        }
    } catch (error) {
        console.log(error)
        router.push({ name: 'notFound' })
    } 
})

const submit = async (data) => {
  try {
    const body = new FormData()

    body.append('name', data.name)
    body.append('description', data.description)
    body.append('price', data.price)
    if(data.productImage.length > 0){
      body.append('image', data.productImage[0].file)
    }

    await http.post(`/products/${route.params.id}`, body)
  
    emit('success', 'Data added successfully')
    router.push({name: 'detail', params: {id: route.params.id}})
    
  } catch (error) {
    emit('error', 'Something went Wrong')
  }
}
</script>