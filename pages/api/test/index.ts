import { NextApiRequest, NextApiResponse } from 'next'
import { tests } from '../../../src/utils/tests'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(tests)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
