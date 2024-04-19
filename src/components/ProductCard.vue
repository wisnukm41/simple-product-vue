<template>
    <RouterLink :to="{name: 'detail', params: {id: product.id}}">
        <div class="p-4 transition-all rounded-lg shadow-md hover:scale-105 hover:cursor-pointer">
            <img :src=" product.image.startsWith('https://picsum.photos') ? `${product.image}` : `${laravelUrl}/storage/${product.image}`" :alt="`image of ${product.name}`" class="object-cover w-full">
            <div class="mt-2">
                <div class="text-xl font-bold text-gray-600">
                    {{ product.name }}
                </div>
                <div class="flex items-center justify-between">
                    <div class="font-bold text-gray-600">
                        IDR {{ product.price.toLocaleString('id-ID') }}
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { laravelUrl } from '@/common/http';
import { RouterLink } from 'vue-router';
defineProps(['product'])
</script>