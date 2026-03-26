<template>
  <div class="product-details-page container" style="padding: var(--spacing-xl) 0">
    <div v-if="product">
      <div style="display:flex; gap: var(--spacing-lg); align-items: flex-start">
        <div style="flex: 1.2">
          <div class="card-image-wrap" style="aspect-ratio: 4/5; height: 700px">
            <img :src="product.image" :alt="product.title" style="width:100%; height:100%; object-fit:cover" />
          </div>
        </div>
        <div style="flex: 1">
          <div style="position: sticky; top: var(--spacing-md)">
            <p style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 1rem; opacity: 0.6">
              {{ product.category }} Collection
            </p>
            <h2 style="font-size: 3rem; margin-bottom: 1.5rem">{{ product.title }}</h2>
            <p class="price" style="font-size: 1.5rem; margin-bottom: 2rem">€{{ product.price.toFixed(2) }}</p>
            
            <div style="margin-bottom: 3rem">
              <h4 style="font-family: var(--font-sans); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem">Description</h4>
              <p style="opacity: 0.8; line-height: 1.8">{{ product.description }}</p>
            </div>

            <div style="display:flex; gap: 1rem">
              <button class="btn" style="flex: 1" @click="addToCart">Add to Collection</button>
              <router-link to="/cart" class="btn" style="background: var(--bg-secondary); color: var(--text-primary); flex: 1; text-align: center">View Cart</router-link>
            </div>
            
            <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--accent-soft)">
               <p style="font-size: 0.8rem; opacity: 0.6">✦ Ethical sourcing • Conscious shipping • Hand-curated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="text-align: center; padding: var(--spacing-xl) 0">
      <h3>Product not found.</h3>
      <router-link to="/products" class="btn" style="margin-top: 2rem">Back to Shop</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { products } from '@/data/products'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  setup() {
    const route = useRoute()
    const id = route.params.id as string
    const product = products.find(p => p.id === id)
    const cart = useCartStore()
    function addToCart() { if (product) cart.add(product) }
    return { product, addToCart }
  }
})
</script>