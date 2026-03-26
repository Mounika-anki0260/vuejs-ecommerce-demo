<template>
  <div id="mina-store">
    <div class="announcement-bar animate-up">
      Free shipping on orders over $50.00
    </div>
    <header :class="{ 'scrolled': isScrolled }">
      <div class="container" style="display:flex; width:100%; align-items:center; padding: 0 var(--spacing-md);">
        <h1 class="logo animate-scale" @click="goHome" style="color: var(--accent-purple); cursor: pointer;">MINA</h1>
        <nav class="animate-up">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Shop</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/cart">Cart ({{ cartCount }})</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer style="margin-top: var(--spacing-xl); padding: var(--spacing-lg) 0; background: var(--bg-secondary);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 0 var(--spacing-md);">
        <div class="logo" style="font-size: 1.2rem; opacity: 0.8;">MINA</div>
        <p style="font-size: 0.8rem; opacity: 0.6;">© 2026 MINA Curations. All rights reserved.</p>
        <div style="display: flex; gap: 2rem; font-size: 0.8rem; opacity: 0.6;">
          <span>Sustainability</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  setup() {
    const router = useRouter()
    const cart = useCartStore()
    const isScrolled = ref(false)
    const cartCount = computed(() => cart.items.reduce((acc, item) => acc + item.qty, 0))

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))

    return { goHome: () => router.push('/'), isScrolled, cartCount }
  }
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s var(--ease);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>