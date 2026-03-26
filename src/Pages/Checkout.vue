<template>
  <div class="checkout-page container" style="max-width: 600px; padding: var(--spacing-xl) 0">
    <h2 style="margin-bottom: var(--spacing-lg); text-align: center">Checkout</h2>
    <div v-if="step === 1">
      <h3 style="margin-bottom: 2rem; font-size: 1.2rem">1. Shipping Address</h3>
      <form @submit.prevent="next">
        <div class="form-group">
          <input placeholder="Full name" v-model="form.name" required />
          <input placeholder="Address" v-model="form.address" required />
          <input placeholder="City" v-model="form.city" required />
        </div>
        <div style="margin-top:2rem"><button type="submit" class="btn" style="width: 100%">Continue to payment</button></div>
      </form>
    </div>
    <div v-else-if="step === 2">
      <h3 style="margin-bottom: 2rem; font-size: 1.2rem">2. Payment Method</h3>
      <form @submit.prevent="next">
        <div class="form-group">
          <input placeholder="Card number" v-model="form.card" required />
          <div style="display:flex; gap: 1rem">
            <input placeholder="Expiry (MM/YY)" v-model="form.expiry" required />
            <input placeholder="CVC" v-model="form.cvc" required />
          </div>
        </div>
        <div style="margin-top:2rem">
          <button type="submit" class="btn" style="width: 100%">Pay €{{ total.toFixed(2) }}</button>
        </div>
      </form>
    </div>
    <div v-else style="text-align: center">
      <h3 style="margin-bottom: 1rem">Order Confirmed</h3>
      <p style="opacity: 0.7; margin-bottom: 3rem">Thank you for your purchase. We are preparing your pieces for collection.</p>
      <router-link to="/" class="btn">Return Home</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  setup() {
    const cart = useCartStore()
    const step = ref(1)
    const form = reactive({ name: '', address: '', city: '', card: '', expiry: '', cvc: '' })
    function next() {
      if (step.value < 3) step.value++
      if (step.value === 3) cart.clear()
    }
    return { step, form, next, total: cart.total }
  }
})
</script>