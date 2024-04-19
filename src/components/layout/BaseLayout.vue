<template>
    <div class="max-w-7xl mx-auto px-2">
        <NavMain />
        <slot />
    </div>
</template>

<script setup>
    import NavMain from '../NavMain.vue';
</script>