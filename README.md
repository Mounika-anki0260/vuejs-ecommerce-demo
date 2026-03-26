# 🛍️ Vue.js E-Commerce Demo

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-3.x-FFD859?style=for-the-badge&logo=pinia&logoColor=black)
![Vue Router](https://img.shields.io/badge/Vue%20Router-5.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)

A fully-featured **e-commerce storefront** built with Vue 3, TypeScript, and Vite — complete with product listings, shopping cart, checkout flow, admin panel, and user authentication.

[🔴 Live Demo](#) · [📂 Browse Code](#) · [🐛 Report Bug](../../issues)

</div>

---

## ✨ Features

- 🏠 **Home Page** — Featured products and hero section
- 🛒 **Product Listing** — Browse all products with category filtering
- 🔍 **Product Details** — Individual product view with add-to-cart
- 🧺 **Shopping Cart** — Persistent cart with quantity management (Pinia)
- 💳 **Checkout** — Order summary and checkout flow
- 📬 **Contact Page** — Customer contact form
- 🔐 **Login / Register** — User authentication UI
- 🛠️ **Admin Panel** — Product management for administrators

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue 3 | ^3.5.25 | Frontend framework (Composition API) |
| TypeScript | ~5.9.3 | Type-safe development |
| Vite | ^8.x | Lightning-fast build tool |
| Pinia | ^3.0.4 | Global cart state management |
| Vue Router | ^5.0.2 | Client-side routing |

---

## 📁 Project Structure

```
src/
├── Pages/
│   ├── Home.vue                  # Landing / home page
│   ├── ProductListing.vue        # All products grid
│   ├── ProductDetails.vue        # Single product detail
│   ├── Cart.vue                  # Shopping cart
│   ├── Checkout.vue              # Checkout flow
│   ├── Contact.vue               # Contact form
│   ├── LoginRegister.vue         # Auth page
│   └── AdminProductManager.vue   # Admin dashboard
├── components/
│   └── ProductCard.vue           # Reusable product card
├── stores/
│   └── cart.ts                   # Pinia cart store
├── data/
│   └── products.ts               # Product data & types
├── router/
│   └── index.ts                  # Route definitions
└── App.vue
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Mounika-anki0260/vuejs-ecommerce-demo.git

# Navigate into the project
cd vuejs-ecommerce-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗺️ Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with featured products |
| `/products` | ProductListing | Browse all products |
| `/product/:id` | ProductDetails | Individual product view |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Order checkout |
| `/contact` | Contact | Contact form |
| `/admin/products` | AdminProductManager | Admin product panel |
| `/auth` | LoginRegister | Login & registration |

---

## 🛒 Cart Store (Pinia)

```ts
const cart = useCartStore()

cart.add(product, qty)     // Add item to cart
cart.remove(productId)     // Remove item by ID
cart.clear()               // Empty the cart
cart.total                 // Computed total price
```

---

## 🎨 Product Categories

- 🏺 **Ceramics** — Vases, pots, and decorative pieces
- 🍽️ **Kitchen** — Plates, mugs, and tableware
- 🛋️ **Decor** — Sculptural centerpieces and home accents

---

## 👩‍💻 Author

**Mounika Anki** · [@Mounika-anki0260](https://github.com/Mounika-anki0260)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
