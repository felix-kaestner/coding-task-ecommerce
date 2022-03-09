import Layout from 'components/Layout'
import Loading from 'components/Loading'
import type Product from 'model/Product'
import type {NextPage} from 'next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {withDelay} from 'util/async'
import {HiOutlineX} from 'react-icons/hi'

const ProductList: NextPage = () => {
  const router = useRouter()
  const {search} = router.query

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (!router.isReady) return
    setIsLoading(true)
    // Add slight delay to avoid flickering
    const url = search ? `/api/products?search=${encodeURIComponent(search as string)}` : '/api/products'
    withDelay(() => fetch(url).then((res) => res.json()), 500).then(setProducts).finally(() => setIsLoading(false))
  }, [router.isReady, search])

  console.log(isLoading)

  if (isLoading) {
    return <Layout title="Clothing"><Loading /></Layout>
  }

  return (
    <Layout title="Clothing">
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          {search && search.length > 0 && <div className="italic text-gray-700 flex items-center">You searched for: <p className="mx-2 px-6 py-1 rounded-full bg-gray-200 font-semibold flex items-center"><span className="mr-2">{search}</span><span className="cursor-pointer" onClick={() => router.push(`/products`)}><HiOutlineX className="translate-y-px" size={16} /></span></p></div>}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${product.id}`}>
                        <a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
            {products.length === 0 && <p className="text-gray-700">No products found</p>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductList
