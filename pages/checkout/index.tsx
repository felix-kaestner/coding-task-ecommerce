import Layout from 'components/Layout'
import CartContext from 'context/Cart'
import type {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useCallback, useContext} from 'react'
import {HiTrash} from 'react-icons/hi'

const CheckoutForm: NextPage = () => {
  const router = useRouter()
  const cart = useContext(CartContext)

  const submitOrder = useCallback(() => {
    router.push('/checkout/confirm')
  }, [])

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
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Germany</option>
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
            className="mt-8 inline-block w-full rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
          >
            Complete Order
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutForm
