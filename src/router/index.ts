import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home.vue'
import ProductListing from '@/Pages/ProductListing.vue'
import ProductDetails from '@/Pages/ProductDetails.vue'
import CartPage from '@/Pages/Cart.vue'
import Checkout from '@/Pages/Checkout.vue'
import Contact from '@/Pages/Contact.vue'
import AdminProducts from '@/Pages/AdminProductManager.vue'
import LoginRegister from '@/Pages/LoginRegister.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductListing },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: Checkout },
  { path: '/contact', component: Contact },
  { path: '/admin/products', component: AdminProducts },
  { path: '/auth', component: LoginRegister },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router