<template>
  <div class="layout-row" style="align-items: flex-start; gap: var(--spacing-md); padding: var(--spacing-md)">
    <aside class="filter-sidebar glass animate-scale" style="width: 280px; padding: 2.5rem; border-radius: 4px;">
      <h3 style="margin-bottom: 2rem; font-size: 1.2rem; letter-spacing: 0.1em">Refine</h3>
      <form @submit.prevent>
        <div style="margin-bottom: 2.5rem">
          <label class="luxury-label">Category</label>
          <select v-model="filters.category" class="rich-select">
            <option value="">All Collections</option>
            <option v-for="c in categories" :key="c">{{ c }}</option>
          </select>
        </div>
        
        <div style="margin-bottom: 2rem">
          <label class="luxury-label">Price Range</label>
          <input type="range" v-model="filters.maxPrice" :min="0" :max="500" />
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; opacity: 0.6; font-weight: 500">
            <span>€0</span>
            <span>Up to €{{ filters.maxPrice }}</span>
          </div>
        </div>
      </form>
    </aside>

    <div class="product-listing-page container" style="flex: 1; padding-top: var(--spacing-sm)">
      <header style="height: auto; margin-bottom: var(--spacing-lg); text-align: left; padding-left: var(--spacing-md)">
        <h2 class="animate-up" style="font-size: 3rem;">Collections</h2>
        <p class="animate-up" style="opacity: 0.6; font-size: 0.9rem; margin-top: 0.5rem; transition-delay: 0.1s">Artisan-crafted essentials for the conscious home.</p>
      </header>
      
      <div class="product-grid">
        <ProductCard v-for="(p, index) in filteredProducts" 
          :key="p.id" 
          :product="p" 
          class="animate-up"
          :style="{ animationDelay: (index * 0.1) + 's' }"
          @view="goTo" 
          @add="addToCart" 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { ProductCard },
  setup() {
    const filters = reactive({ category: '', maxPrice: 500 })
    const categories = Array.from(new Set(products.map(p => p.category)))
    const filteredProducts = computed(() => products.filter(p => (!filters.category || p.category === filters.category) && p.price <= filters.maxPrice))
    const cart = useCartStore()
    const router = useRouter()
    
    function addToCart(p: any) { cart.add(p) }
    function goTo(id: string) { router.push(`/product/${id}`) }
    
    return { filters, categories, filteredProducts, addToCart, goTo }
  }
})
</script>
