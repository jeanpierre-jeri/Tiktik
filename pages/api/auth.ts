import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client'

export interface Data {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const user = req.body

    await client.createIfNotExists(user)
    res.status(200).json({ message: 'Login successful' })
  }
}
