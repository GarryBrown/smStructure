import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {


  createDb() {

    let plansKPI = [
      {
        id: 1, name: "PS101", plans: [
          { id: 1, typeplanid: 1, plan: 500, fact: 300, name: "Товарооборот" },
          { id: 2, typeplanid: 2, plan: 400, fact: 100, name: "Покрытие" },
          { id: 3, typeplanid: 3, plan: 5000, fact: 3999, name: "Листинг" }
        ]
      },
      {
        id: 2, name: "PS102", plans: [
          { id: 4, typeplanid: 1, plan: 500, fact: 87, name: "Товарооборот" },
          { id: 5, typeplanid: 2, plan: 400, fact: 399, name: "Покрытие" },
          { id: 6, typeplanid: 3, plan: 5000, fact: 654, name: "Листинг" }
        ]
      },
      {
        id: 3, name: "PS103", plans: [
          { id: 7, typeplanid: 1, plan: 500, fact: 321, name: "Товарооборот" },
          { id: 8, typeplanid: 2, plan: 400, fact: 123, name: "Покрытие" },
          { id: 9, typeplanid: 3, plan: 5000, fact: 1545, name: "Листинг" }
        ]
      }
    ];


    let routes = {
      routes: [
        {
          id: 1, name: "route 1",
          indicators: [
            {  
              id: 1,
              name: 'Товарооборот',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
            },
            {
              id: 2,
              name: 'Покрытие',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
            },
            {
              id: 3,
              name: 'Листинг',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
            },
          ],
          indicatorsDP: [
            {
              id: 3, name: "ИП Смирнов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            },
            {
              id: 3, name: "ИП Иванов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            },
            {
              id: 3, name: "ИП Куликов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            }
          ]
        },
        {
          id: 1, name: "route 2",
          indicators: [
            {
              id: 1,
              name: 'Товарооборот',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
                { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
                { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
              ]
            },
            {
              id: 2,
              name: 'Покрытие',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
                { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
                { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
              ]
            },
            {
              id: 3,
              name: 'Листинг',
              sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
                { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
                { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
              ]
            },
          ],
          indicatorsDP: [
            {
              id: 3, name: "ИП Смирнов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            },
            {
              id: 3, name: "ИП Иванов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',   
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            },
            {
              id: 3, name: "ИП Куликов",
              indicators: [
                {
                  id: 1,
                  name: 'Товарооборот',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 2,
                  name: 'Покрытие',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
                {
                  id: 3,
                  name: 'Листинг',
                  sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
                },
              ]
            }
          ]
        },
      ]
    };
    let reports = [];
    let reports1 = [
      {
        id: 1,
        name: 'Отчет 1',
        routes: [
          { id: 1, name: "route 1" },
          { id: 2, name: "route 2" },
        ],
        indicators: [
          { 
            id: 1,
            name: 'Товарооборот',
            fields: [
              {
                nameP: 'sumfact',
                description: 'Факт'
              },
              {
                nameP: 'sumpercent',
                description: '%'
              },
              {
                id: 5,
                nameP: 'predicrion_percent',
                description: 'Прогноз %'
              },
              {
                id: 6,
                nameP: 'gap',
                description: 'GAP'
              },
              {
                id: 5,
                nameP: 'planforDay',
                description: 'План на день'
              }
            ]
          },
          { 
            id: 2,
            name: 'Покрытие',
            fields: [
              {
                id: 2,
                nameP: 'sumfact',
                description: 'Факт'
              },
              {
                id: 3,
                nameP: 'sumpercent',
                description: '%'
              },
              {
                id: 4,
                nameP: 'prediction',
                description: 'Прогноз'
              },
            ]
          },
          { 
            id: 3,
            fields: [
              {
                id: 5,
                nameP: 'predicrion_percent',
                description: 'Прогноз %'
              },
              {
                id: 6,
                nameP: 'gap',
                description: 'GAP'
              },
              {
                id: 5,
                nameP: 'planforDay',
                description: 'План на день'
              }
            ]
          }
        ]
      },
      {
        id: 1,
        name: 'Отчет 2',
        routes: [
          { id: 1, name: "route 1" }
        ],
        indicators: [
          {  id: 1,
            name: 'Товарооборот',
            fields: [
              {
                nameP: 'sumfact',
                description: 'Факт'
              },
              {
                nameP: 'sumpercent',
                description: '%'
              },
              {
                id: 5,
                nameP: 'predicrion_percent',
                description: 'Прогноз %'
              },
              {
                id: 6,
                nameP: 'gap',
                description: 'GAP'
              },
              {
                id: 5,
                nameP: 'planforDay',
                description: 'План на день'
              }
            ]
          },
          { id: 3,
            name: 'Листинг',
            fields: [
              {
                id: 5,
                nameP: 'predicrion_percent',
                description: 'Прогноз %'
              },
              {
                id: 6,
                nameP: 'gap',
                description: 'GAP'
              },
              {
                id: 5,
                nameP: 'planforDay',
                description: 'План на день'
              }
            ]
          }
        ]
      }
    ];



    let listRoutes = [
      {
        id: 1, name: "Маршрут 1"
      },
      {
        id: 2, name: "Маршрут 2"
      },
      {
        id: 3, name: "Маршрут 3"
      },
    ];


    let indicators = [
      { 
        id: 1,
        name: 'Товарооборот',
        fields: [
          {
            nameP: 'sumfact',
            description: 'Факт'
          },
          {
            nameP: 'sumpercent',
            description: '%'
          },
          {
            id: 5,
            nameP: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            nameP: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            nameP: 'planforDay',
            description: 'План на день'
          }
        ]
      },
      {
        id: 2,
        name: 'Покрытие',
        fields: [
          {
            id: 2,
            nameP: 'sumfact',
            description: 'Факт'
          },
          {
            id: 3,
            nameP: 'sumpercent',
            description: '%'
          },
          {
            id: 4,
            nameP: 'prediction',
            description: 'Прогноз'
          },
        ]
      },
      {
        id: 3,
        name: 'Листинг',
        fields: [
          {
            id: 5,
            nameP: 'predicrion_percent',
            description: 'Прогноз %'
          },
          {
            id: 6,
            nameP: 'gap',
            description: 'GAP'
          },
          {
            id: 5,
            nameP: 'planforDay',
            description: 'План на день'
          }
        ]
      },
      
    ]

    return {
      plans: plansKPI,
      listRoutes: listRoutes,
      reports: reports,
      routes: routes,
      indicators: indicators
    };
  }
}
