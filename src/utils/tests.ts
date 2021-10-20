import { Test } from '../interfaces'


const reactQuestions = {
  'Q1':{
    statement: 'What is Reconciliation?',
    options: {
      'P1':{
        answer: 'The process through which React deletes the DOM.',
        isCorrect: false,
        isSelected: false
      },
      'P2':{
        answer: 'The process through which React updates and deletes the component.',
        isCorrect: false,
        isSelected: false
      },
      'P3':{
        answer: 'It is a process to set the state.',
        isCorrect: false,
        isSelected: false
      },
      'P4':{
        answer: 'The process through which React updates the DOM.',
        isCorrect: true,
        isSelected: false
      }
    }
  },
  'Q2':{
      statement: 'Which are the correct phases of component lifecycle?',
      options: {
        'P1':{
          answer: 'Mounting: getDerivedStateFromProps(); Updating: componentWillUnmount(); Unmounting: shouldComponentUpdate()',
          isCorrect: false,
          isSelected: false
        },
        'P2':{
          answer: 'Mounting: componentWillUnmount(); Updating: render(); Unmounting: setState()',
          isCorrect: false,
          isSelected: false
        },
        'P3':{
          answer: 'Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()',
          isCorrect: true,
          isSelected: false
        },
        'P4':{
          answer: 'Mounting: constructor(); Updating: getDerivedStateFromProps(); Unmounting: render()',
          isCorrect: false,
          isSelected: false
        },
      }
    },
    'Q3': {
        statement: 'Controlled Component vs Uncontrolled Component',
        options: {
          'P1':{
            answer: 'Controlled Components: every state mutation will have an associated handler function; Uncontrolled Components: store their own states internally',
            isCorrect: true,
            isSelected: false
          },
          'P2':{
            answer: 'Controlled Components: store their own states internally; Uncontrolled Components: every state mutation will have an associated handler function',
            isCorrect: false,
            isSelected: false
          },
          'P3':{
            answer: 'Controlled Components: A component who is so good at controlling itself; Uncontrolled Components: A component who has no idea how to control itself',
            isCorrect: false,
            isSelected: false
          },
          'P4':{
            answer: 'Controlled Components: every state mutation does not have an associated handler function; Uncontrolled Components: does not store their own states internally',
            isCorrect: false,
            isSelected: false
          },
        }
      },
      'Q4':{
          statement: 'State vs Props',
          options: {
            'P1':{
              answer: 'Props is something that the parent doesn’t need and decide to throw around among other parents; State is the parent’s favorite child and something the component wants to nurture.',
              isCorrect: false,
              isSelected: false
            },
            'P2':{
              answer: 'Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.',
              isCorrect: true,
              isSelected: false
            },
            'P3':{
              answer: 'Props is a copy of real DOM; State is the definition of the real DOM.',
              isCorrect: false,
              isSelected: false
            },
            'P4':{
              answer: 'Prop is managed within the component and holds some information that may change over the lifetime of the component; State gets passed to the component, like a function parameter',
              isCorrect: false,
              isSelected: false
            },
          }
        },
        'Q5':{
            statement: 'What is the “key” prop?',
            options: {
              'P1':{
                answer: '“Key” prop is just there to look pretty and there is no benefit whatsoever.',
                isCorrect: false,
                isSelected: false
              },
              'P2':{
                answer: '“Key” prop is a way for React to identify a newly added item in a list and compare during the “diffing” algorithm.',
                isCorrect: false,
                isSelected: false
              },
              'P3':{
                answer: 'It is one of the attributes in HTML.',
                isCorrect: false,
                isSelected: false
              },
              'P4':{
                answer: 'All I know is that it is NOT commonly used in array.',
                isCorrect: false,
                isSelected: false
              },
            }
          }
}

const HTMLQuestions = {
  'Q1':{
    statement: 'Which of the following is used to create Web Pages ?',
    options: {
      'P1':{
        answer: 'C++',
        isCorrect: false,
        isSelected: false
      },
      'P2':{
        answer: 'Java',
        isCorrect: false,
        isSelected: false
      },
      'P3':{
        answer: 'HTML',
        isCorrect: true,
        isSelected: false
      },
      'P4':{
        answer: 'JVM',
        isCorrect: false,
        isSelected: false
      },
    }
  },
  'Q2':{
      statement: 'HTML is a set of markup _________.',
      options: {
        'P1':{
          answer: 'Tags',
          isCorrect: true,
          isSelected: false
        },
        'P2':{
          answer: 'Sets',
          isCorrect: false,
          isSelected: false
        },
        'P3':{
          answer: 'Attributes',
          isCorrect: false,
          isSelected: false
        },
        'P4':{
          answer: 'None of the above',
          isCorrect: false,
          isSelected: false
        },
      }
    },
    'Q3':{
        statement: 'HTML tags are used to describe document _______.',
        options: {
          'P1':{
            answer: 'Definition',
            isCorrect: false,
            isSelected: false
          },
          'P2':{
            answer: 'Content',
            isCorrect: true,
            isSelected: false
          },
          'P3':{
            answer: 'Language',
            isCorrect: false,
            isSelected: false
          },
          'P4':{
            answer: 'Model',
            isCorrect: false,
            isSelected: false
          },
        }
      },
      'Q4':{
          statement: 'HTML program is saved using ______ extension.',
          options: {
            'P1':{
              answer: '.htmn',
              isCorrect: false,
              isSelected: false
            },
            'P2':{
              answer: '.html',
              isCorrect: true,
              isSelected: false
            },
            'P3':{
              answer: '.htnl',
              isCorrect: false,
              isSelected: false
            },
            'P4':{
              answer: '.htnl',
              isCorrect: false,
              isSelected: false
            },
          }
        },
        'Q5':{
            statement: 'HTML program can be read and rendered by _______.',
            options: {
              'P1':{
                answer: 'Compiler',
                isCorrect: true,
                isSelected: false
              },
              'P2':{
                answer: 'Server',
                isCorrect: false,
                isSelected: false
              },
              'P3':{
                answer: 'Web Browser',
                isCorrect: false,
                isSelected: false
              },
              'P4':{
                answer: 'Interpreter',
                isCorrect: false,
                isSelected: false
              },
            }
          },
}

const reactTest = {
    title: 'React',
    description: 'React.js is a coding language that allows front-end developers to build complex user interfaces and components for dynamic and engaging web applications.',
    imagePath: '/static/images/react.png',
    questions: reactQuestions,
    isEvaluated: false
}
  
  const HTMLTest =  {
    title: 'HTML',
    description: 'This is a HTML test',
    imagePath: '/static/images/html.png',
    questions: HTMLQuestions,
    isEvaluated: false
}

export const tests: {[testid: string]: Test} = {
  'T1' :reactTest,
  'T2': HTMLTest
}
