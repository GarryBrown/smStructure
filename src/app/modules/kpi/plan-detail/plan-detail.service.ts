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

  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes').map((res: Response) => res.json());
  }

  
  getIndicators(): Observable<Response> {
    return this.http.get('/api/indicators').map((res: Response) => res.json());
  }


  getReports(): Observable<Response> {
    return this.http.get('/api/reports')
      .map((res: Response) => res.json())
  }


  getListRoutes(): Observable<Response> {
    return this.http.get('/api/listRoutes')
      .map((res: Response) => res.json())
  }

  toOnlyFields(data: Array<any>, propetry: string): Array<string> {
    let arr: Array<string> = [];
    data.map(item => {
      arr.push(item[propetry]);
    })
    return arr;
  }

  getPropsObj(obj: any) {
    let indicators = new Object();
    obj.indicators.map(indicator => {
      let fields = [];
      let indObj;
      indicator.fields.map(field => {
        fields.push(field.nameP);
      });
      indicators[indicator.nameP] = fields;
    });
    return indicators;
  }

  getPropsObj1(indicators: any) {
    let strictIndicators = new Object();
    indicators.map(indicator => {
      let fields = [];
      let indObj;
      indicator.fields.map(field => {
        fields.push(field.nameP);
      });
      strictIndicators[indicator.id] = fields;
    });
    console.log(strictIndicators);
    return strictIndicators;
  }

}

