<template>
  <div class="card luxury-card" @click="$emit('view', product.id)">
    <div class="card-image-wrap">
      <div v-if="product.price < 50" class="badge animate-scale">SALE</div>
      <img class="card-image" :src="product.image" :alt="product.title" />
      <div class="quick-view glass">
        <span>View Details</span>
      </div>
    </div>
    <div class="card-info">
      <h4 class="card-title">{{ product.title }}</h4>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
        <p class="price" style="font-weight: 600; color: var(--accent-gold);">€{{ product.price.toFixed(2) }}</p>
        <span style="font-size: 0.65rem; color: var(--accent-bold); text-transform: uppercase; letter-spacing: 0.05em;">{{ product.category }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Product } from '@/data/products'
export default defineComponent({
  props: { product: { type: Object as () => Product, required: true } },
  setup() {
    return { }
  }
})
</script>

<style scoped>
.luxury-card {
  cursor: pointer;
  transition: transform 0.6s var(--ease);
}

.luxury-card:hover {
  transform: translateY(-8px);
}

.luxury-card:hover .card-image {
  transform: scale(1.08);
}

.luxury-card:hover .quick-view {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.quick-view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  padding: 0.8rem 1.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0;
  transition: all 0.4s var(--ease);
  white-space: nowrap;
  pointer-events: none;
  border-radius: 40px;
}

.card-info {
  margin-top: 1.2rem;
  text-align: left;
}
</style>