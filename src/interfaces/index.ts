export type Test = {
  title: string
  description: string
  questions: {[questionId: string]: Question}
}

export type Question = {
  statement: string
  options: {[optionId:string]: Option}
}

export type Option = {
  answer: string,
  isCorrect: boolean,
  isSelected: boolean
}
