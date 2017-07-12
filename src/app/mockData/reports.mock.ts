let _reports = [
  {
    id: 1,
    description: 'Отчет 1',
    routes: [
      { id: 1, description: "route 1" },
      { id: 2, description: "route 2" },
    ],
    indicators: [
      {
        id: 1,
        description: 'Товарооборот',
        planFields: [
          {
            code: 'sumfact',
            description: 'Факт'
          },
          {
            code: 'sumpercent',
            description: '%'
          },
          {
            id: 5,
            code: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            code: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            code: 'planforDay',
            description: 'План на день'
          }
        ]
      },
      {
        id: 2,
        description: 'Покрытие',
        planFields: [
          {
            id: 2,
            code: 'sumfact',
            description: 'Факт'
          },
          {
            id: 3,
            code: 'sumpercent',
            description: '%'
          },
          {
            id: 4,
            code: 'prediction',
            description: 'Прогноз'
          },
        ]
      },
      {
        id: 3,
        description: 'Листинг',
        planFields: [
          {
            id: 5,
            code: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            code: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            code: 'planforDay',
            description: 'План на день'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    description: 'Отчет 2',
    routes: [
      { id: 1, description: "route 1" }
    ],
    indicators: [
      {
        id: 1,
        description: 'Товарооборот',
        planFields: [
          {
            code: 'sumfact',
            description: 'Факт'
          },
          {
            code: 'sumpercent',
            description: '%'
          },
          {
            id: 5,
            code: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            code: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            code: 'planforDay',
            description: 'План на день'
          }
        ]
      },
      {
        id: 3,
        description: 'Листинг',
        planFields: [
          {
            id: 5,
            code: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            code: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            code: 'planforDay',
            description: 'План на день'
          }
        ]
      }
    ]
  }
];

export const reportsMock = _reports;