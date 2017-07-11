let _edu = [
  {
    id: 1,
    description: 'Продажи lvl 1',
    textBody: `## Важный *заголовок* 
    - item
    - item
    - item 
    **label**`,
    typeOfTeachingAgrRes: {
      id: 1,
      description: 'Агрегация результатов',
      code: '42'
    },
    questions: [
      {
        id: 1,
        description: 'Какого цвета крокодил?',
        answers: [
          {
            id: 1,
            value: 1,
            orderBy: 2,
            typeOfAnswer: {
              description: 'Мокрый'
            }
          },
          {
            id: 2,
            value: 2,
            orderBy: 1,
            typeOfAnswer: {
              description: 'Злой'
            }
          },
          {
            id: 3,
            value: 3,
            orderBy: 3,
            typeOfAnswer: {
              description: 'Пушистый'
            }
          },
        ]
      },
      {
        id: 2,
        description: 'Сколько пальцах на руках?',
        answers: [
          {
            id: 4,
            value: 1,
            orderBy: 2,
            typeOfAnswer: {
              description: 'Половина'
            }
          },
          {
            id: 5,
            value: 2,
            orderBy: 1,
            typeOfAnswer: {
              description: 'Немного'
            }
          },
          {
            id: 6,
            value: 3,
            orderBy: 3,
            typeOfAnswer: {
              description: 'Некоторое количество'
            }
          },
        ]
      }
    ],
    steps: [
      {
        id: 1,
        orderBy: 7,
        typeOfTeachingStep: {
          description: 'Step 2',
          isNeedSelectDP: true,
          isNeedAnswer: false
        }
      },
      {
        id: 3,
        orderBy: 10,
        typeOfTeachingStep: {
          description: 'Step 3',
          isNeedSelectDP: true,
          isNeedAnswer: false
        }
      },
      {
        id: 2,
        orderBy: 5,
        typeOfTeachingStep: {
          description: 'Step 1',
          isNeedSelectDP: false,
          isNeedAnswer: false
        }
      }
    ]
  },
  {
    id: 2,
    description: 'Продажи lvl 2',
    textBody: '<strong>Важная</strong> <i>тема №2 </i>',
    typeOfTeachingAgrRes: {
      id: 1,
      description: 'Агрегация результатов',
      code: '42'
    },
    questions: [
      {
        id: 1,
        description: 'Ответь на вопрос?',
        answers: [
          {
            id: 4,
            value: 1,
            orderBy: 3,
            typeOfAnswer: {
              description: 'Да'
            }
          },
          {
            id: 5,
            value: 2,
            orderBy: 1,
            typeOfAnswer: {
              description: 'Нет'
            }
          },
          {
            id: 6,
            value: 1,
            orderBy: 3,
            typeOfAnswer: {
              description: 'Скорее да, чем нет'
            }
          },
        ]
      }
    ],
    steps: [
      {
        id: 1,
        orderBy: 1,
        typeOfTeachingStep: {
          description: 'Шаг 1',
          isNeedSelectDP: false,
          isNeedAnswer: false
        }
      },
      {
        id: 2,
        orderBy: 2,
        typeOfTeachingStep: {
          description: 'Название шага 2',
          isNeedSelectDP: false,
          isNeedAnswer: false
        }
      }
    ]
  },
];

export const eduMock = _edu;