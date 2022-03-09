// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Order from 'model/Order'
import Database from 'model/Database'
import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<{id?: number, message?:string}>) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const cart = JSON.parse(req.body) as Order

  // Do validation
  // Skipped here for demo purposes..
  await Database.run(`INSERT INTO orders (firstName, lastName, email, country, street, city, state, zip, items) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?); SELECT last_insert_rowid() as id`, [cart.firstName, cart.lastName, cart.email, cart.country, cart.street, cart.city, cart.state, cart.zip, JSON.stringify(cart.items)])
  const {id} = await Database.get(`SELECT last_insert_rowid() as id`)
  res.status(200).json({id})
}