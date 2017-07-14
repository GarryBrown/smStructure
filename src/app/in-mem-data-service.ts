import { InMemoryDbService } from 'angular-in-memory-web-api';

import {
  eduMock, eventsMock, teachingMock, plansKPIMock, planRoutesMock,
  reportsMock, routesMock, indicatorsMock, deliveryPointsMock, ordersMock, qualitiesMock
} from './mockData';

export class InMemDataService implements InMemoryDbService {

  createDb() {
    let edu = eduMock,
      events = eventsMock,
      teaching = teachingMock,
      plansKPI = plansKPIMock,
      planRoutes = planRoutesMock,
      reports = reportsMock,
      routes = routesMock,
      planIndicators = indicatorsMock,
      deliveryPoints = deliveryPointsMock,
      orders = ordersMock,
      qualities = qualitiesMock;


    return {
      deliveryPoints: deliveryPoints,
      orders: orders,
      edu: edu,
      teaching: teaching,
      events: events,
      plans: plansKPI,
      planRoutes: planRoutes,
      planReports: reports,
      routes: routes,
      planIndicators: planIndicators,
      qualities: qualities
    };
  }
}
