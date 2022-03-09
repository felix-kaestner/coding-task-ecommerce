import {CartItem} from "./Cart"

interface Order {
    firstName: string
    lastName: string
    email: string
    country: string
    street: string
    city: string
    state: string
    zip: string
    items: CartItem[]
  }
  
  export default Order