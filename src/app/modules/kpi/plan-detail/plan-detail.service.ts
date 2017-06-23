import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { DateUtilService, PrincipalService } from '../../../core';

@Injectable()
export class PlanDetailService {

  constructor(private http: Http,
    private dateUtils: DateUtilService,
    private principal: PrincipalService,
  ) {
  }

  getRoutesData(indicators, routes): Observable<Response> {
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

    return this.http.get('/api/planRoutes', {
      // search: params
    }).map((res: Response) => res.json());
  }


  getIndicatorsByRoutes(routes: Array<any>): Observable<any> {
    if (routes.length) {
      let routesIds: Array<any> = [];
      routes.map(route => {
        routesIds.push(route.id)
      });
      let routesIdsSrt = routesIds.join();

      return this.getIndicators(routesIdsSrt);
    } else {
      return new Observable(observer => {
        observer.next([]);
      })
    }
  }

  getIndicators(routes: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('routeId', routes);
    return this.http.get('/api/planIndicators', {
      // search: params
    }).map((res: Response) => res.json());
  }

  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes')
      .map((res: Response) => res.json())
  }


  toOnlyFields(data: Array<any>, propetry: string): Array<string> {
    let arr: Array<string> = [];
    data.map(item => {
      arr.push(item[propetry]);
    })
    return arr;
  }


  getPropsObj(indicators: any) {
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
    console.log('strictIndicators');
    console.log(strictIndicators);
    return strictIndicators;
  }

  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }

}

