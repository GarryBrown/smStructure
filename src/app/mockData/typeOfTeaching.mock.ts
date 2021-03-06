let _typeOfTeaching = [
  {
    id: 1,
    description: 'Продажи: уровень 1',
    textBody: `## Понимание  *дистрибьюции* компании
    - Обучение
    - Практика
    - Закрепление 
    
     **Успех**`,
    typeOfTeachingAgrRes: {
      id: 1,
      description: 'Агрегация результатов',
      code: '42'
    },
    questions: [
      {
        id: 1,
        description: 'Пропорция товара на полке?',
        answers: [
          {
            id: 1,
            value: 1,
            orderBy: 2,
            typeOfAnswer: {
              description: '70/30'
            }
          },
          {
            id: 2,
            value: 2,
            orderBy: 1,
            typeOfAnswer: {
              description: '40/60'
            }
          },
          {
            id: 3,
            value: 3,
            orderBy: 3,
            typeOfAnswer: {
              description: '60/40'
            }
          },
        ]
      },
      {
        id: 2,
        description: 'Условия для выполнения условий?',
        answers: [
          {
            id: 4,
            value: 1,
            orderBy: 2,
            typeOfAnswer: {
              description: '11'
            }
          },
          {
            id: 5,
            value: 2,
            orderBy: 1,
            typeOfAnswer: {
              description: '21'
            }
          },
          {
            id: 6,
            value: 3,
            orderBy: 3,
            typeOfAnswer: {
              description: 'Нет правильного ответа'
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
          isNeedAnswer: false,
        }
      },
      {
        id: 3,
        orderBy: 10,
        typeOfTeachingStep: {
          description: 'Step 3',
          isNeedSelectDP: true,
          isNeedAnswer: false,
        }
      },
      {
        id: 2,
        orderBy: 5,
        typeOfTeachingStep: {
          description: 'Step 1',
          isNeedSelectDP: true,
          isNeedAnswer: false,
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

export const typeOfTeachingMock = _typeOfTeaching;