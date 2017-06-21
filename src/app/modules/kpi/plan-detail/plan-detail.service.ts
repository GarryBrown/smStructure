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

  getRoutesData(): Observable<Response> {
    return this.http.get('/api/routes').map((res: Response) => res.json());
  }

  
  getIndicators(): Observable<Response> {
    return this.http.get('/api/indicators').map((res: Response) => res.json());
  }


  getIndicatorsByRoutes(routes: Array<any>): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    routes.map( route => {
      params.append('routeId', route.id);
    })

    return this.http.get('/api/plan-indicators', {
      search: params
    }).map((res: Response) => res.json());
  }


  getReports(): Observable<Response> {
    return this.http.get('/api/reports')
      .map((res: Response) => res.json())
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
    let strictIndicators = new Object();
    indicators.map(indicator => {
      let planFields = [];
      let indObj;
      indicator.planFields.map(field => {
        planFields.push(field.nameP);
      });
      strictIndicators[indicator.id] = planFields;
    });
    return strictIndicators;
  }

}

