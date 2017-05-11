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
      {"id": 1, "plan": 500, "fact": 300, "name": "Товарооборот"},
      {"id": 2, "plan": 400, "fact": 100, "name": "Покрытие"},
      {"id": 3, "plan": 54, "fact": 100, "name": "Листинг"},
      {"id": 4, "plan": 133, "fact": 41, "name": "Листинг"},
      {"id": 5, "plan": 50, "fact": 40, "name": "Листинг"},
    ];

    let deliveryPoints = [
   {
      "id":902,
      "isActive":true,
      "code":"00000087738",
      "description":"\"Дахна\" ООО - 3",
      "inn":"2311108152",
      "customerDescription":"\"Дахна\" ООО ",
      "phoneNumber":"8-964-890-43-25",
      "startTimeOfWork":"09:00",
      "endTimeOfWork":"18:00",
      "startTimeOfReception":"09:00",
      "endTimeOfReception":"16:30",
      "photoURL":"",
      "typeOfPayment":{
         "id":2,
         "isActive":true,
         "description":"Наличный расчет",
         "isUnited":false
      },
      "typeOfOrder":{
         "id":2,
         "isActive":true,
         "description":"Счет фактура и список",
         "isUnited":true
      },
      "typeOfDeliveryPoint":{
         "id":1,
         "isActive":true,
         "description":"Самообслуживание",
         "isDisplayed":false
      }
   },
   {
      "id":1384,
      "isActive":true,
      "code":"00000096993",
      "description":"Смои Финджо Качаховна, ИП",
      "inn":"231100657928",
      "customerDescription":"Смои Финджо Качаховна, ИП",
      "phoneNumber":"8-918-37-000-54",
      "startTimeOfWork":"09:00",
      "endTimeOfWork":"18:00",
      "startTimeOfReception":"09:00",
      "endTimeOfReception":"14:00",
      "photoURL":"",
      "typeOfPayment":2,
      "typeOfOrder":2,
      "typeOfDeliveryPoint":{
         "id":0,
         "isActive":true,
         "description":"Не определён",
         "isDisplayed":false
      }
   },
   {
      "id":1729,
      "isActive":true,
      "code":"CB-00000043",
      "description":"Столярова Ольга Владимировна, ИП",
      "inn":"231300190180",
      "customerDescription":"Столярова Ольга Владимировна, ",
      "phoneNumber":"8-918-471-89-05,8-938-519-76-76",
      "startTimeOfWork":"09:00",
      "endTimeOfWork":"18:00",
      "startTimeOfReception":"09:00",
      "endTimeOfReception":"16:00",
      "photoURL":"",
      "typeOfPayment":{
         "id":3,
         "isActive":true,
         "description":"Банк и наличный расчет",
         "isUnited":true
      },
      "typeOfOrder":2,
      "typeOfDeliveryPoint":1
   }
];
    
 
    return {heroes:heroes , leaveorder: leaveorder, deliveryPoints: deliveryPoints, plans: plansKPI};
  }
}
