// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type Product from 'model/Product'
import type {NextApiRequest, NextApiResponse} from 'next'
import Database from 'model/Database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product | {message: string}>) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  const {productId} = req.query
  if (!productId || productId.length === 0) {
    res.status(400).send({ message: 'Missing Product Id.' })
    return
  }

  const product = await Database.get<Product>(`SELECT * from products WHERE id = ?`, [productId])
  res.status(200).json(product)
}
