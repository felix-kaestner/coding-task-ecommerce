// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type Product from 'model/Product'
import type {NextApiRequest, NextApiResponse} from 'next'
import Database from 'model/Database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[] | {message: string}>) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  const {search} = req.query
  if (search && typeof search === 'string'&& search.length > 0) {
    const products = await Database.all<Product[]>(`SELECT * from products WHERE name LIKE ? OR description LIKE ?`, [search])
    res.status(200).json(products)
    return
  }

  const products = await Database.all<Product[]>('SELECT * from products')
  res.status(200).json(products)
}
