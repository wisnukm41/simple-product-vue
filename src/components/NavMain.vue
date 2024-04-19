<template>
    <div class="py-6">
        <RouterLink 
            class="py-2 px-4 mr-2 text-xl font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
            :class="$route.name == 'home' ? 'bg-gray-300' : ''"
            :to="{ name: 'home' }"
        >Home </RouterLink>
        <RouterLink 
            class="py-2 px-4 mr-2 text-xl font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300"
            :class="$route.name == 'add' ? 'bg-gray-300' : ''"
            :to="{ name: 'add' }"
        >Add Product </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>