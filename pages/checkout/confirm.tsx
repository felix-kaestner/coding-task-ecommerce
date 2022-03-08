import Layout from 'components/Layout'
import CartContext from 'context/Cart'
import type {NextPage} from 'next'
import Link from 'next/link'
import {useContext} from 'react'

const CheckoutConfirm: NextPage = () => {
  const cart = useContext(CartContext)

  return (
    <Layout title="Order successfull">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Thanks for odering
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          We appreciate your order, we're currently processing it. So hang tight and we'll let you
          know when your order is ready.
        </p>
        <ul role="list" className="divide-y divide-gray-200 lg:mt-4">
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
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-base font-medium text-gray-900">
                    {product.quantity} x ${product.price.toFixed(2)}
                  </p>

                  <div>
                    <p className="text-base font-medium text-gray-700">
                      ${(product.quantity * product.price).toFixed(2)}
                    </p>
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
            <span className="font-medium">$64.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span className="font-medium">$5.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">$69.00</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutConfirm
