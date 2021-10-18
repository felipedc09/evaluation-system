import { NextApiRequest, NextApiResponse } from 'next'
import { questions } from '../../../utils/questions'

const getQuestions = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(questions)) {
      throw new Error('Cannot find questions')
    }

    res.status(200).json(questions)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default getQuestions
