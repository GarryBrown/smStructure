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

    let indicators = [
      {
        id: 1,
        name: 'Товарооборот'
      },
      {
        id: 2,
        name: 'Покрытие'
      },
      {
        id: 3,
        name: 'Листинг'
      }
    ];

    let allFields = [
      {
        id: 1,
        field: 'sumplan',
        description: 'Цель'
      },
      {
        id: 2,
        field: 'sumfact',
        description: 'Факт'
      },
      {
        id: 3,
        field: 'sumpercent',
        description: '%'
      },
      {
        id: 4,
        field: 'prediction',
        description: 'Прогноз'
      },
      {
        id: 5,
        field: 'predicrion_percent',
        description: 'Прогноз %'
      },
      {
        id: 6,
        field: 'gap',
        description: 'GAP'
      },
      {
        id: 5,
        field: 'planforDay',
        description: 'План на день'
      }
    ];


    let reports = [
      {
        id: 1,
        fields: [
          'План на день', 'GAP', 'Прогноз'
        ],
        name: "Отчет продаж"
      },
      {
        id: 2,
        fields: [
          // {
          //   id: 2,
          //   name: 'B',
          // },
          // {
          //   id: 3,
          //   name: 'A+B',
          // }
          'Прогноз', '%', 'GAP'
        ],
        name: "Отчет директорам"
      },
      {
        id: 3,
        fields: [
          // {
          //   id: 4,
          //   name: '%',
          // },
          // {
          //   id: 5,
          //   name: 'GAP',
          // }
          'GAP', '%'
        ],
        name: "Отчет поставщикам"
      }
    ]

    let planDetailsByPlanId = [
      {
        id: 1, name: "route 1", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      {
        id: 2, name: "route 2", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      {
        id: 3, name: "route 3", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
    ];


    let dataTable = [
      {  
        name: 'gp1',
        gp: [
          {
            id: 1, name: "agent1PS101", sumplan: 1001, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 2, name: "agent2PS102", sumplan: 1002, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 3, name: "agent3PS103", sumplan: 1003, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
        ]
      },
      { 
        name: 'gp2',
        gp: [
          {
            id: 1, name: "agent1PS101", sumplan: 2001, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 2, name: "agent2PS102", sumplan: 2002, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 3, name: "agent3PS103", sumplan: 2003, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
        ]
      },
      {
        name: 'gp3',
        gp: [
          {
            id: 1, name: "agent1PS101", sumplan: 3001, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 2, name: "agent2PS102", sumplan: 3002, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
          {
            id: 3, name: "agent3PS103", sumplan: 3003, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
              { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
              { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
            ]
          },
        ]
      },
    ]

    let routes = [
      {
        id: 1, name: "Маршрут 1"
      },
      {
        id: 2, name: "Маршрут 2"
      },
      {
        id: 3, name: "Маршрут 3"
      },

    ]

    return {
      plans: plansKPI,
      planDetailsByPlanId: planDetailsByPlanId,
      indicators: indicators,
      reports: reports,
      allFields: allFields,
      routes: routes,
      dataTable: dataTable
    };
  }
}
