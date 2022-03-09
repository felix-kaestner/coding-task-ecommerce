import Product from './Product'

export interface CartItem extends Product {
  quantity: number
}

interface Cart {
  items: CartItem[]
  add(product: Product): void
  remove(product: Product): void
  setQuantity(product: Product, value: number): void
  reset: () => void
  subTotal: number
  itemCount: number
}

export default Cart
