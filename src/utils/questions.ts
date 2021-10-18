import { Question, Test } from '../interfaces'


const reactQuestions = [
  {
    statement: 'a',
    options: [
      {
        answer: 'a',
                isCorrect: true,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'b',
    options: [
      {
        answer: 'a',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'c',
    options: [
      {
        answer: 'a',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'd',
    options: [
      {
        answer: 'a',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: true,
        isSelected: false
      },
    ]
  },
  {
    statement: 'e',
    options: [
      {
        answer: 'e',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
]

const HTMLQuestions = [
  {
    statement: 'a',
    options: [
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: true,
        isSelected: false
      },
    ]
  },
  {
    statement: 'c',
    options: [
      {
        answer: 'a',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'b',
    options: [
      {
        answer: 'a',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'a',
    options: [
      {
        answer: 'a',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
  {
    statement: 'e',
    options: [
      {
        answer: 'e',
        isCorrect: true,
        isSelected: false
      },
      {
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      {
        answer: 'd',
        isCorrect: false,
        isSelected: false
      },
    ]
  },
]

const reactTest = 
  {
    description: 'This is a react test',
    questions: reactQuestions
  }

const HTMLTest =  {
  description: 'This is a HTML test',
  questions: HTMLQuestions
}

export const tests: Test[] = [
  reactTest,
  HTMLTest
]
