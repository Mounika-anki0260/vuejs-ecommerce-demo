export interface Product {
  id: string
  title: string
  price: number
  description: string
  image: string
  category?: string
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Hand-painted "Candy" Vase',
    price: 45.00,
    description: 'Unique ceramic vase with hand-painted patterns.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80&auto=format&fit=crop',
    category: 'Ceramics'
  },
  {
    id: '2',
    title: 'Minimalist "Drop" Pot',
    price: 38.00,
    description: 'Elegant drop-shaped ceramic pot for indoor plants.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80&auto=format&fit=crop',
    category: 'Ceramics'
  },
  {
    id: '3',
    title: 'Soft Blush Ceramic Plate',
    price: 22.00,
    description: 'Matte finish plate in soft blush pink.',
    image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=80&auto=format&fit=crop',
    category: 'Kitchen'
  },
  {
    id: '4',
    title: 'Modern Abstract Vase',
    price: 65.00,
    description: 'Architectural ceramic piece for modern homes.',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=80&auto=format&fit=crop',
    category: 'Decor'
  },
  {
    id: '5',
    title: 'Earthy Clay Mug',
    price: 18.00,
    description: 'Hand-formed clay mug with a natural glaze.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80&auto=format&fit=crop',
    category: 'Kitchen'
  },
  {
    id: '6',
    title: 'Sculptural Fruit Bowl',
    price: 85.00,
    description: 'Large centerpiece bowl with a sculptural rim.',
    image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=80&auto=format&fit=crop',
    category: 'Decor'
  }
]