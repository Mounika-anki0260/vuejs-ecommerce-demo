<template>
  <div>
    <h2>Admin - Products</h2>
    <p>Simple product list & add form for demo</p>
    <div style="display:flex;gap:2rem">
      <div style="flex:1">
        <h3>Products</h3>
        <ul>
          <li v-for="p in localProducts" :key="p.id">{{ p.title }} — €{{ p.price }}</li>
        </ul>
      </div>
      <div style="width:360px">
        <h3>Add product</h3>
        <form @submit.prevent="add">
          <input v-model="form.title" placeholder="Title" required />
          <input type="number" v-model.number="form.price" placeholder="Price" required />
          <input v-model="form.image" placeholder="Image URL" />
          <textarea v-model="form.description" placeholder="Description"></textarea>
          <div style="margin-top:8px"><button type="submit">Add</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { products as seed } from '@/data/products'

export default defineComponent({
  setup() {
    const localProducts = reactive([...seed])
    const form = reactive({ title: '', price: 0, image: '', description: '' })
    function add() {
      localProducts.push({ id: String(Date.now()), title: form.title, price: form.price, image: form.image || seed[0].image, description: form.description })
      form.title = ''
      form.price = 0
      form.image = ''
      form.description = ''
    }
    return { localProducts, form, add }
  }
})
</script>