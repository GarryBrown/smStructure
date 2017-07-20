let _teaching = [
  {
    id: 1,
    typeOfTeaching: {
      id: 1,
      description: 'Продажи: уровень 1',
      textBody: `## Понимание  *дистрибьюции* компании
      - Обучение
      - Практика
      - Закрепление 
      
       **Успех**`,
      questions: [
        {
          id: 1,
          description: 'Пропорция товара на полке, но для начала очень уж большой вопрос, чтобы проверить адаптивность нашей таблицы?',
          answers: [
            {
              id: 1,
              value: 1,
              orderBy: 2,
              typeOfAnswer: {
                id: 1,
                description: '70/30'
              }
            },
            {
              id: 2,
              value: 2,
              orderBy: 1,
              typeOfAnswer: {
                id: 2,
                description: '40/60'
              }
            },
            {
              id: 3,
              value: 3,
              orderBy: 3,
              typeOfAnswer: {
                id: 3,
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
                id: 4,
                description: '11'
              }
            },
            {
              id: 5,
              value: 2,
              orderBy: 1,
              typeOfAnswer: {
                id: 5,
                description: '21'
              }
            },
            {
              id: 6,
              value: 3,
              orderBy: 3,
              typeOfAnswer: {
                id: 6,
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
    teachingSpecialities: {
      //id step
      2: {
        deliveryPoint: {
          id: 2560,
          description: 'Севанян Виген Гургени, ИП',
        },
        // id question
        // 1: {
        //   answer: {
        //     comment: "Comment 123",
        //     id: 2,
        //     orderBy: 1,
        //     value: 2,
        //     typeOfAnswer: {
        //       id: 2,
        //       description: '40/60'
        //     }
        //   }
        // },
        // 2: {
        //   answer: {
        //     comment: "Comment 2222",
        //     id: 5,
        //     orderBy: 1,
        //     value: 2,
        //     typeOfAnswer: {
        //       id: 5,
        //       description: '21'
        //     }
        //   }
        // }
      },
      1: {
        // deliveryPoint: {
        //   id: 2312,
        //   description: 'Челухин Евгений Владимирович, ИП - м-н Радуга - 2'
        // },
        // 1: {
        //   answer: {
        //     comment: "Comment 123",
        //     id: 2,
        //     orderBy: 1,
        //     value: 2,
        //     typeOfAnswer: {
        //       id: 2,
        //       description: '40/60'
        //     }
        //   }
        // },
        // 2: {
        //   answer: {
        //     comment: "Comment 2222",
        //     id: 5,
        //     orderBy: 1,
        //     value: 2,
        //     typeOfAnswer: {
        //       id: 5,
        //       description: '21'
        //     }
        //   }
        // }
      },
      3: {
        // deliveryPoint: {
        //   id: 2312,
        //   description: 'Челухин Евгений Владимирович, ИП - м-н Радуга - 2'
        // },
        // 1: {
        //   answer: {
        //     comment: "Comment 123",
        //     id: 2,
        //     orderBy: 1,
        //     value: 2,
        //     typeOfAnswer: {
        //       id: 2,
        //       description: '40/60'
        //     }
        //   }
        // },
        // 2: {
        //   answer: {
        //     comment: "Comment 2222",
        //     id: 6,
        //     value: 3,
        //     orderBy: 3,
        //     typeOfAnswer: {
        //       id: 6,
        //       description: 'Нет правильного ответа'
        //     }
        //   },
        // }
      }
    },
    commonComment: 'Не плохой парень'

  }

];

export const teachingMock = _teaching;