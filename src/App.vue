<template>
  <BaseLayout >
    <RouterView @success="toastSuccess" @error="toastError"/>
  </BaseLayout>
</template>

<script setup>
import { RouterView } from "vue-router";
import BaseLayout from '@/components/layout/BaseLayout.vue'
import { useToast } from "vue-toastification";
const toast = useToast()

const toastSuccess = (message) => {
  toast.success(message)
}

const toastError = (message) => {
  toast.error(message)
}

</script>