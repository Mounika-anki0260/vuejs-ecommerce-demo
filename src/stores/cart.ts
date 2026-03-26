import { defineStore } from 'pinia'
import type { Product } from '@/data/products'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ product: Product; qty: number }>
  }),
  getters: {
    total: (state) => state.items.reduce((s, i) => s + i.product.price * i.qty, 0)
  },
  actions: {
    add(product: Product, qty = 1) {
      const found = this.items.find(i => i.product.id === product.id)
      if (found) found.qty += qty
      else this.items.push({ product, qty })
    },
    remove(productId: string) {
      this.items = this.items.filter(i => i.product.id !== productId)
    },
    clear() {
      this.items = []
    }
  }
})