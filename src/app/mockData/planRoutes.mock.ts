let _planRoutes = [
  {
    id: 1,
    description: "route 1",
    planValues: {
      1: {
        id: 1,
        description: 'Товарооборот',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      2: {
        id: 2,
        description: 'Покрытие',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      3: {
        id: 3,
        description: 'Листинг',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
    },
    planDeliveryPointSet: [
      {
        id: 3, description: "ИП Смирнов",
        planValues: {
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
        }
      },
      {
        id: 3, description: "ИП Иванов",
        planValues: {
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
        }
      },
      {
        id: 3, description: "ИП Куликов",
        planValues: {
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
        }
      }
    ]
  },
  {
    id: 1, description: "route 2",
    planValues: {
      2: {
        id: 2,
        description: 'Покрытие',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 3, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 4, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      1: {
        id: 1,
        description: 'Товарооборот',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 1, name: "ИП Иванов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 2, name: "ИП Сидоров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      3: {
        id: 3,
        description: 'Листинг',
        sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 5, name: "ИП Смирнов", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 6, name: "ИП Комаров", sumplan: 500, sumfact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
    },
    planDeliveryPointSet: [
      {
        id: 3, description: "ИП Смирнов",
        planValues: {
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
        }
      },
      {
        id: 3, description: "ИП Иванов",
        planValues: {
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100
          },
        }
      },
      {
        id: 3, description: "ИП Куликов",
        planValues: {
          2: {
            id: 2,
            name: 'Покрытие',
            sumplan: 2000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 666, planforDay: 100
          },
          3: {
            id: 3,
            name: 'Листинг',
            sumplan: 3000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 999, planforDay: 100
          },
          1: {
            id: 1,
            name: 'Товарооборот',
            sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 333, planforDay: 100
          }
        }
      }
    ]
  }
];

export const planRoutesMock = _planRoutes;