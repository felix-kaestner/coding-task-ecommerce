import Product from 'model/Product'

const Products: Product[] = [
  {
    id: '1',
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'Basic Tee in black.',
    price: 35,
    color: 'Black',
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    reviews: {average: 4, totalCount: 117},
  },
  {
    id: '2',
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: 'Basic Tee in Aspen White.',
    price: 35,
    color: 'Aspen White',
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    reviews: {average: 5, totalCount: 23},
  },
  {
    id: '3',
    name: 'Basic Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: 'Basic Tee in Charcoal.',
    price: 35,
    color: 'Charcoal',
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    reviews: {average: 3, totalCount: 227},
  },
  {
    id: '4',
    name: 'Artwork Tee',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: 'The iconic Iso Dots Artwork Tee.',
    price: 35,
    color: 'Iso Dots',
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    reviews: {average: 4, totalCount: 17},
  },
]

export default Products
