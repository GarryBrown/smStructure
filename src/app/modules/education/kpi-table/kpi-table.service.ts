import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Report, Indicator, Route } from '../../../models';

@Injectable()
export class KpiTableService {
  // private resourceUrlPlanRoutes = '/api/plan-routes';
  private resourceUrlPlanRoutes = '/api/planRoutes';
  
  constructor(private http: Http, ) { }


  getRoutesData(indicators: Array<Indicator>, routes: Array<Route>): Observable<Response> {
    // api/plan-routes?typeOfPlanId=1,5&routeId=213,214
    let params: URLSearchParams = new URLSearchParams();
    let indicatorsIds: Array<any> = [];
    let routesIds: Array<any> = [];
    indicators.map(indicator => {
      indicatorsIds.push(indicator.id)
    });
    routes.map(route => {
      routesIds.push(route.id)
    });
    params.set('typeOfPlanId', indicatorsIds.join());
    params.set('routeId', routesIds.join());

    return this.http.get(this.resourceUrlPlanRoutes, {
      // search: params
    }).map((res: Response) => res.json());
  }

  getPropsObj(indicators: Array<Indicator>) {
    let strictIndicators: Array<any> = [];
    indicators.map(indicator => {
      let planFields = [];
      let indObj = new Object();
      indicator.planFields.map(field => {
        planFields.push(field.code);
      });
      indObj['id'] = indicator.id;
      indObj['planFields'] = planFields;
      strictIndicators.push(indObj);
    });
    return strictIndicators;
  }

}
