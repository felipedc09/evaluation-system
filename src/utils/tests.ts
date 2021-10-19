import { Test } from '../interfaces'


const reactQuestions = {
  'Q1':{
    statement: 'a',
    options: {
      'P1':{
        answer: 'a',
        isCorrect: true,
        isSelected: true
      },
      'P2':{
        answer: 'b',
        isCorrect: false,
        isSelected: false
      },
      'P3':{
        answer: 'c',
        isCorrect: false,
        isSelected: false
      },
      'P4':{
        answer: 'd',
        isCorrect: false,
        isSelected: false
      }
    }
  },
  'Q2':{
      statement: 'b',
      options: {
        'P1':{
          answer: 'a',
          isCorrect: false,
          isSelected: false
        },
        'P2':{
          answer: 'b',
          isCorrect: true,
          isSelected: true
        },
        'P3':{
          answer: 'c',
          isCorrect: false,
          isSelected: false
        },
        'P4':{
          answer: 'd',
          isCorrect: false,
          isSelected: false
        },
      }
    },
    'Q3': {
        statement: 'c',
        options: {
          'P1':{
            answer: 'a',
            isCorrect: false,
            isSelected: false
          },
          'P2':{
            answer: 'b',
            isCorrect: false,
            isSelected: false
          },
          'P3':{
            answer: 'c',
            isCorrect: true,
            isSelected: true
          },
          'P4':{
            answer: 'd',
            isCorrect: false,
            isSelected: false
          },
        }
      },
      'Q4':{
          statement: 'd',
          options: {
            'P1':{
              answer: 'a',
              isCorrect: false,
              isSelected: false
            },
            'P2':{
              answer: 'b',
              isCorrect: false,
              isSelected: false
            },
            'P3':{
              answer: 'c',
              isCorrect: false,
              isSelected: false
            },
            'P4':{
              answer: 'd',
              isCorrect: true,
              isSelected: true
            },
          }
        },
        'Q5':{
            statement: 'e',
            options: {
              'P1':{
                answer: 'e',
                isCorrect: true,
                isSelected: false
              },
              'P2':{
                answer: 'b',
                isCorrect: false,
                isSelected: true
              },
              'P3':{
                answer: 'c',
                isCorrect: false,
                isSelected: false
              },
              'P4':{
                answer: 'd',
                isCorrect: false,
                isSelected: false
              },
            }
          }
}

const HTMLQuestions = {
  'Q1':{
    statement: 'a',
    options: [
      {
        answer: 'd',
        isCorrect: false,
        isSelected: true
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
  'Q2':{
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
          isSelected: true
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
    'Q3':{
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
            isSelected: true
          },
          {
            answer: 'd',
            isCorrect: false,
            isSelected: false
          },
        ]
      },
      'Q4':{
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
              isSelected: true
            },
          ]
        },
        'Q5':{
            statement: 'e',
            options: [
              {
                answer: 'e',
                isCorrect: true,
                isSelected: true
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
                isCorrect: false,                isSelected: false
              },
            ]
          },
}

const reactTest = {
    title: 'React',
    description: 'This is a react test',
    questions: reactQuestions
}
  
  const HTMLTest =  {
    title: 'HTML',
    description: 'This is a HTML test',
    questions: reactQuestions
}

export const tests: {[testid: string]: Test} = {
  'T1' :reactTest,
  'T2': HTMLTest
}
