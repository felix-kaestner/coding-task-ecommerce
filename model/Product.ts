interface Product {
  id: string
  name: string
  price: number
  imageSrc: string
  imageAlt: string
  color: string
  description: string
  highlights: string[]
  details: string
  reviews: {average: number; totalCount: number}
}

export default Product
