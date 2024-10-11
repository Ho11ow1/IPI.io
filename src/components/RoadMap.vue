<template>
    <section class="roadmap container mx-auto" id="roadmap">
        <Carousel v-if="products.length > 0" :value="products" :numVisible="3" :numScroll="2" :responsiveOptions="responsiveOptions">
            <template #item="slotProps"> <!-- Scoped Slot Definition -->
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

// Example data and responsive options
const products = ref([
    {name: 'Product 1', image: 'product1.jpg', price: 50},
    {name: 'Product 2', image: 'product2.jpg', price: 30},
    {name: 'Product 3', image: 'product1.jpg', price: 50},
    {name: 'Product 4', image: 'product2.jpg', price: 30},
    {name: 'Product 5', image: 'product1.jpg', price: 50},
    {name: 'Product 6', image: 'product2.jpg', price: 30},
    {name: 'Product 7', image: 'product3.jpg', price: 70}
]);

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 2
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
    }
];

// Function to get severity based on inventory status
const getSeverity = (inventoryStatus: string) => {
    switch (inventoryStatus) {
        case 'In Stock':
            return 'success';
        case 'Low Stock':
            return 'warning';
        case 'Out of Stock':
            return 'danger';
        default:
            return null;
    }
};
</script>
