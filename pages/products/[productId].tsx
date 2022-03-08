import Layout from 'components/Layout'
import CartContext from 'context/Cart'
import type Product from 'model/Product'
import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect, useState, useContext} from 'react'
import {HiStar} from 'react-icons/hi'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ProductInfo: NextPage = () => {
  const router = useRouter()
  const {productId} = router.query
  const cart = useContext(CartContext)

  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (!productId) return
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then(setProduct)
  }, [productId])

  if (!product) return <></>

  return (
    <Layout title={product.name}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
        {/* Image */}
        <div className="md:col-span-2">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg md:mr-8">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="md:col-span-3">
          <div className="">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-6">
            {/* Information */}
            <div className="flex items-center">
              <h2 className="sr-only">Product information</h2>

              <p className="text-2xl text-gray-900">${product.price}</p>

              <span className="h-6 w-px mx-4 bg-gray-200" aria-hidden="true" />

              {/* Reviews */}
              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <HiStar
                        key={rating}
                        className={classNames(
                          product.reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.reviews.average} out of 5 stars</p>
                  <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {product.reviews.totalCount} reviews
                  </a>
                </div>
              </div>
            </div>

            {/* Description and details */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                onClick={() => cart.add(product)}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductInfo
