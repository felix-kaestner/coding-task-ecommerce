// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Products from 'data/Product'
import type Product from 'model/Product'
import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json(Products)
}
