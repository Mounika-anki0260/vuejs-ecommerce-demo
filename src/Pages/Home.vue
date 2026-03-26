<template>
  <div class="home-page">
    <section class="hero main-hero animate-scale" style="background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=80&auto=format&fit=crop') center/cover; min-height: 600px; display: flex; align-items: center; justify-content: center;">
      <div class="hero-content glass animate-up" style="padding: 4rem; border-radius: 4px; max-width: 700px;">
        <h1 style="font-size: 4.5rem; color: var(--text-primary); margin-bottom: 1rem;">Handmade</h1>
        <h2 style="font-size: 2.5rem; color: var(--accent-gold); margin-bottom: 2rem; font-family: var(--font-sans); letter-spacing: 0.2em; text-transform: uppercase;">Ceramics</h2>
        <p style="font-size: 1rem; margin-bottom: 3rem; opacity: 0.8; max-width: 500px; margin-left: auto; margin-right: auto;">Artisanal clay pieces, hand-thrown and painted with intention. Essence of minimalism for your contemporary home.</p>
        <router-link to="/products" class="btn animate-up" style="padding: 1.2rem 3rem; background: var(--accent-purple); color: white;">Explore Collection</router-link>
      </div>
    </section>

    <section class="bestsellers" style="padding: var(--spacing-xl) 0">
      <div class="container">
        <div style="text-align: center; margin-bottom: var(--spacing-lg)">
           <h3 class="animate-up" style="display: inline-block; border-bottom: 1px solid var(--accent-gold); padding-bottom: 1rem;">Our Bestsellers</h3>
        </div>
        <div class="product-grid">
          <ProductCard v-for="(p, index) in featured" 
            :key="p.id" 
            :product="p" 
            class="animate-up"
            :style="{ animationDelay: (index * 0.15) + 's' }"
            @view="goTo" 
            @add="addToCart" 
          />
        </div>
      </div>
    </section>

    <section class="hero secondary animate-up" style="background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80&auto=format&fit=crop') center/cover; min-height: 600px; background-attachment: fixed; display: flex; align-items: center; justify-content: center;">
      <div class="hero-content animate-scale" style="background: rgba(255,255,255,0.92); padding: 5rem; border-radius: 4px; max-width: 600px; text-align: center;">
        <h2 style="font-size: 3rem; color: var(--accent-purple);">Interior Curation</h2>
        <p style="font-size: 0.9rem; margin: 2rem 0; opacity: 0.7; letter-spacing: 0.1em; text-transform: uppercase;">Find your new favorite pieces.</p>
        <router-link to="/products" class="btn" style="padding: 1.2rem 3rem; background: var(--text-primary); color: white; border-radius: 0;">Shop Now</router-link>
      </div>
    </section>

    <section class="philosophy glass" style="padding: var(--spacing-xl) 0; margin-top: var(--spacing-xl);">
      <div class="container" style="max-width: 800px; text-align: center;">
        <h4 class="luxury-label">Our Philosophy</h4>
        <p style="font-family: var(--font-serif); font-size: 2.5rem; margin-top: 2rem; line-height: 1.2;">"Simplicity is the ultimate sophistication. We curate for the soul, not just the space."</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { ProductCard },
  setup() {
    const featured = products.slice(0, 4) // Show 4 bestsellers as in screenshot
    const cart = useCartStore()
    const router = useRouter()
    function addToCart(p: any) { cart.add(p) }
    function goTo(id: string) { router.push(`/product/${id}`) }
    return { featured, addToCart, goTo }
  }
})
</script>
