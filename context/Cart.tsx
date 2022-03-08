import Cart, {CartItem} from 'model/Cart'
import Product from 'model/Product'
import {Context, FunctionComponent, useState} from 'react'
import {createContext} from 'react'

const initialCart: Cart = {
  items: [],
  add() {},
  remove() {},
  setQuantity() {},
  subTotal: 0,
  itemCount: 0,
}

const CartContext: Context<Cart> = createContext<Cart>(initialCart)

export const CartProvider: FunctionComponent<{}> = ({children}) => {
  const [items, setItems] = useState<CartItem[]>([])

  return (
    <CartContext.Provider
      value={{
        items,
        add: (product: Product) => {
          const newItems = items.slice()
          const p = newItems.find((p) => p.id === product.id)
          if (p) p.quantity++
          else newItems.push({...product, quantity: 1})
          setItems(newItems)
        },
        remove: (product: Product) => {
          const newItems = items.slice().filter((p) => p.id !== product.id)
          setItems(newItems)
        },
        setQuantity: (product: Product, value: number) => {
          const newItems = items.slice()
          const p = newItems.find((p) => p.id === product.id)
          if (p) p.quantity = value
          setItems(newItems)
        },
        subTotal: items.reduce((total, p) => total + p.price * p.quantity, 0),
        itemCount: items.reduce((count, p) => count + p.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
