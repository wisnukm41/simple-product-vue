<template>
  <h1 class="text-2xl font-bold text-gray-600">
    Add Product
  </h1>
  <FormProduct @submit="submit"/>
</template>

<script setup>
import FormProduct from '@/components/FormProduct.vue'
import http from '@/common/http'
import { useRouter } from 'vue-router'

const router = useRouter();
const emit = defineEmits(['success', 'error'])

const submit = async (data) => {
  try {
    const body = new FormData()

    body.append('name', data.name)
    body.append('description', data.description)
    body.append('price', data.price)
    body.append('image', data.productImage[0].file)

    const response  = await http.post('/products', body)

    emit('success', 'Data added successfully')

    router.push({name: 'home'})
    
  } catch (error) {
    emit('error', 'Something went Wrong')
  }
}
</script>