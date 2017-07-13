import { InMemoryDbService } from 'angular-in-memory-web-api';

import {
  eduMock, teachingMock, eventsMock, plansKPIMock, planRoutesMock,
  reportsMock, routesMock, indicatorsMock, deliveryPointsMock, ordersMock, qualitiesMock
} from './mockData';

export class InMemDataService implements InMemoryDbService {

  createDb() {
    let edu = eduMock,
      teaching = teachingMock,
      events = eventsMock,
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
