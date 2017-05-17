import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {


  createDb() {
    let heroes = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    let leaveorder = [
      { id: '1', username: 'Windstorm' },
      { id: '2', username: 'Bombasto' }
    ];

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

    let planDetailsByPlanId = [
      {
        id: 1, name: "agent1PS101", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 1, name: "ИП Иванов", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 2, name: "ИП Сидоров", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      {
        id: 2, name: "agent2PS102", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 3, name: "ИП Смирнов", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 4, name: "ИП Комаров", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
      {
        id: 3, name: "agent3PS103", sumplan: 1000, sumfact: 500, sumpercent: 40, prediction: 555, predicrion_percent: 60, gap: 354, planforDay: 100, deliveryPointsPlans: [
          { id: 5, name: "ИП Смирнов", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 },
          { id: 6, name: "ИП Комаров", plan: 500, fact: 200, sumpercent: 47, prediction: 943, predicrion_percent: 77, gap: 300, planforDay: 30 }
        ]
      },
    ]

    let deliveryPoints = [
      {
        "id": 902,
        "isActive": true,
        "code": "00000087738",
        "description": "\"Дахна\" ООО - 3",
        "inn": "2311108152",
        "customerDescription": "\"Дахна\" ООО ",
        "phoneNumber": "8-964-890-43-25",
        "startTimeOfWork": "09:00",
        "endTimeOfWork": "18:00",
        "startTimeOfReception": "09:00",
        "endTimeOfReception": "16:30",
        "photoURL": "",
        "typeOfPayment": {
          "id": 2,
          "isActive": true,
          "description": "Наличный расчет",
          "isUnited": false
        },
        "typeOfOrder": {
          "id": 2,
          "isActive": true,
          "description": "Счет фактура и список",
          "isUnited": true
        },
        "typeOfDeliveryPoint": {
          "id": 1,
          "isActive": true,
          "description": "Самообслуживание",
          "isDisplayed": false
        }
      },
      {
        "id": 1384,
        "isActive": true,
        "code": "00000096993",
        "description": "Смои Финджо Качаховна, ИП",
        "inn": "231100657928",
        "customerDescription": "Смои Финджо Качаховна, ИП",
        "phoneNumber": "8-918-37-000-54",
        "startTimeOfWork": "09:00",
        "endTimeOfWork": "18:00",
        "startTimeOfReception": "09:00",
        "endTimeOfReception": "14:00",
        "photoURL": "",
        "typeOfPayment": 2,
        "typeOfOrder": 2,
        "typeOfDeliveryPoint": {
          "id": 0,
          "isActive": true,
          "description": "Не определён",
          "isDisplayed": false
        }
      },
      {
        "id": 1729,
        "isActive": true,
        "code": "CB-00000043",
        "description": "Столярова Ольга Владимировна, ИП",
        "inn": "231300190180",
        "customerDescription": "Столярова Ольга Владимировна, ",
        "phoneNumber": "8-918-471-89-05,8-938-519-76-76",
        "startTimeOfWork": "09:00",
        "endTimeOfWork": "18:00",
        "startTimeOfReception": "09:00",
        "endTimeOfReception": "16:00",
        "photoURL": "",
        "typeOfPayment": {
          "id": 3,
          "isActive": true,
          "description": "Банк и наличный расчет",
          "isUnited": true
        },
        "typeOfOrder": 2,
        "typeOfDeliveryPoint": 1
      }
    ];


    return { heroes: heroes, leaveorder: leaveorder, deliveryPoints: deliveryPoints, plans: plansKPI, planDetailsByPlanId: planDetailsByPlanId };
  }
}
