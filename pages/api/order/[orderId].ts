// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Database from 'model/Database'
import Order from 'model/Order'
import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Order | { message: string }>) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  let {orderId} = req.query
  if (!orderId || orderId.length === 0) {
    res.status(400).send({ message: 'Missing Order Id.' })
    return
  }

  const order = await Database.get<Omit<Order, 'items'> & {items: string}>(`SELECT * from orders WHERE id = ?`, [orderId])
  res.status(200).json({...order, items: JSON.parse(order.items ?? '[]')})
}
