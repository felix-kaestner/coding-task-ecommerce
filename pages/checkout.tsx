import Layout from 'components/Layout'
import CartContext from 'context/Cart'
import type {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useCallback, useContext, useState} from 'react'
import {HiTrash} from 'react-icons/hi'
import {sleep, withDelay} from 'util/async'
import { AiOutlineLoading } from "react-icons/ai";
import Order from 'model/Order'
import {classNames} from 'util/css'

/**
 * Taken from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

const CheckoutForm: NextPage = () => {
  const router = useRouter()
  const cart = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [order, setOrder] = useState<Order>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    items: []
  })

  const submitOrder = useCallback(async () => {
    if (cart.itemCount === 0) return
    setIsLoading(true)
    // simulate long running async operation
    await sleep(1_500)
    try {
      const response = await withDelay(() => fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify({ ...order, items: cart.items}),
      }), 1_500)
      const data = await response.json()
      if (response.status === 200) {
        router.push(`/order/${data.id}`)
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      
    }
    setIsLoading(false)
  }, [order, cart.items])

  return (
    <Layout title="Checkout">
      <div className="grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="md:pr-6 lg:pr-8">
          <h6 className="text-lg font-medium text-gray-700">Contact Information</h6>
          <div className="mt-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={(e) => setOrder({...order, lastName: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  onChange={(e) => setOrder({...order, email: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  onChange={(e) => setOrder({...order, country: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="us">United States</option>
                  <option value="de">Germany</option>
                </select>
              </div>

              <div className="col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  onChange={(e) => setOrder({...order, street: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  onChange={(e) => setOrder({...order, city: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  onChange={(e) => setOrder({...order, state: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  onChange={(e) => setOrder({...order, zip: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h6 className="text-lg font-medium text-gray-700">Oder Summary</h6>
          <ul role="list" className="divide-y divide-gray-200">
            {cart.items.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-base font-medium text-gray-900">
                        <Link href={`/products/${product.id}`}>
                          <a> {product.name} </a>
                        </Link>
                      </h3>
                      <p className="ml-4 text-xl text-gray-500">
                        <button onClick={() => cart.remove(product)}>
                          <HiTrash />
                        </button>
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-base font-medium text-gray-900">{product.price}</p>

                    <div>
                      <select
                        defaultValue={product.quantity}
                        onChange={(e) => {
                          const newQuantity = e.target.value
                          if (newQuantity) cart.setQuantity(product, parseInt(newQuantity, 10))
                        }}
                        className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        {Array(10)
                          .fill(0)
                          .map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="h-px w-full bg-gray-200 text-gray-800" />
          <div className="py-6">
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span className="font-medium">${cart.subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span className="font-medium">$5.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-medium">${(cart.subTotal + 5).toFixed(2)}</span>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200" />
          <button
            onClick={submitOrder}
            className={classNames(cart.itemCount > 0 && validateEmail(order.email) ? "bg-indigo-600 hover:bg-indigo-700" : "cursor-not-allowed bg-gray-300", "mt-8 flex justify-center items-center w-full rounded-md border border-transparent py-3 px-8 text-center font-medium text-white")}
          >
            {isLoading && <div className="mr-4 animate-spin" role="status">
              <AiOutlineLoading size={20} />
            </div>}
            Complete Order
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutForm
