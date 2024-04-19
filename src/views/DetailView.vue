<template>
    <div v-if="product" class="flex flex-col w-full md:w-3/4 lg:w-1/3">
        <h1 class="text-2xl font-bold text-gray-600">
            {{ product.name }}
        </h1>
        <img :src=" product.image.startsWith('https://picsum.photos') ? `${product.image}` : `${laravelUrl}/storage/${product.image}`" :alt="`image of ${product.name}`" class="object-cover max-w-2xl max-h-2xl">
        <div class="flex items-center justify-between mt-2 text-xl">
            <div>
                price : IDR {{ product.price.toLocaleString('id-ID') }}
            </div>
            <div class="flex">
                <div @click="editProduct" class="p-2 mr-2 rounded-full cursor-pointer bg-lime-300 hover:bg-lime-400">
                    <PencilOutline />
                </div>
                <div @click="deleteModal = true" class="p-2 mr-2 bg-red-300 rounded-full cursor-pointer hover:bg-red-400">
                    <DeleteOutline />
                </div>
            </div>
        </div>
        <div class="mt-2 text-lg">
            {{ product.description }}
        </div>
        <Modal :show="deleteModal" @close="deleteModal = false" >
            <div class="p-4 h-60">
                <span class="text-2xl font-extrabold">Delete product of {{ product.name }}?</span>
                <div class="grid h-full place-content-center">
                    <div class="flex gap-4">
                        <div class="px-4 py-2 text-xl font-bold bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-400" @click="deleteProduct">Yes</div>
                        <div class="px-4 py-2 text-xl font-bold bg-red-300 rounded-md hover:cursor-pointer hover:bg-red-400" @click="deleteModal=false">No</div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import http, { laravelUrl } from '@/common/http'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'
import Modal from '@/components/Modal.vue'

const route = useRoute()
const router = useRouter()
const product = ref(null)
const emit = defineEmits(['error'])
const deleteModal = ref(false)

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

const editProduct = () => {
    router.push({ name: 'edit', params: { id: product.value.id } })
}

const deleteProduct = async () => {
    try {
        const response = await http.delete(`/products/${route.params.id}`)
        if(response.status = 200){
            emit('success', 'Data deleted successfully')
            router.push({name: 'home'})
        } else {
            console.log(response.data.message)
        }
    } catch (error) {
        console.log(error)
        emit('error', 'Something went wrong')
    }
}

</script>