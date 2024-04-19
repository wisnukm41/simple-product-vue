<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { onMounted, ref } from "vue";
import http from "@/common/http";

  const products = ref(null);
  const emit = defineEmits('success', 'error')

  onMounted(async () => {
    try {
      const response = await http.get("/products");
      products.value = response.data.data
    } catch (error) {
      console.log(error)
      emit('error', 'Something went Wrong')
    }
  })
</script>

<template>
  <h1 class="text-2xl font-bold text-gray-600">
    Product List
  </h1>

  <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>
