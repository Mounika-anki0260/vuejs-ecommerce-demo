<template>
  <div class="cart-page container" style="padding: var(--spacing-lg) 0">
    <h2 style="margin-bottom: var(--spacing-lg)">Your Collection</h2>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.product.id" style="display:flex; gap: 2rem; align-items:center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #eee">
        <div class="card-image-wrap" style="width: 150px; aspect-ratio: 4/5; margin-bottom: 0">
          <img :src="item.product.image" style="width:100%; height:100%; object-fit:cover" />
        </div>
        <div style="flex:1">
          <h4 class="card-title" style="font-size: 1.2rem">{{ item.product.title }}</h4>
          <p class="price">€{{ item.product.price.toFixed(2) }} × {{ item.qty }}</p>
          <button @click="remove(item.product.id)" style="background: none; border: none; text-decoration: underline; font-size: 0.75rem; color: #888; cursor: pointer; padding: 0; margin-top: 1rem">Remove from collection</button>
        </div>
        <div style="font-family: var(--font-serif); font-size: 1.2rem">€{{ (item.product.price * item.qty).toFixed(2) }}</div>
      </div>
      
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem; margin-top: var(--spacing-lg)">
        <div style="font-size: 1.5rem">
           <span style="opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; margin-right: 1rem">Subtotal</span>
           <strong>€{{ total.toFixed(2) }}</strong>
        </div>
        <router-link to="/checkout" class="btn" style="padding: 1rem 3rem">Proceed to shipping</router-link>
      </div>
    </div>
    <div v-else style="text-align: center; padding: var(--spacing-xl) 0">
      <p style="opacity: 0.6">Your collection is currently empty.</p>
      <router-link to="/products" class="btn" style="margin-top: 2rem; background: var(--bg-secondary)">Explore Shop</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  setup() {
    const cart = useCartStore()
    function remove(id: string) { cart.remove(id) }
    return { items: cart.items, total: cart.total, remove }
  }
})
</script>