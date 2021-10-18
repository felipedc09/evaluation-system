export type Test = {
  description: string
  questions: Question[]
}

export type Question = {
  statement: string
  options: Option[]
}

export type Option = {
  answer: string,
  isCorrect: boolean,
  isSelected: boolean
}
