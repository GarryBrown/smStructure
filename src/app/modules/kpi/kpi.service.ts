import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { DateUtilService, PrincipalService } from '../../core';


@Injectable()
export class KPIService {

  private resourceUrl = '/api/plans';
  private presetReportUrl = '/api/reports';
  private allFieldstUrl = '/api/allFields';

  constructor(private http: Http,
              private  dateUtils: DateUtilService,
              private principal: PrincipalService,
  ) {
  }

 

  loadPlans(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: any) => {
        return res
      });
  }

  getData(): Observable<Response> {
    return this.http.get('/api/dataTable')
    .map(response => response.json().data);
  }
  
   getIndicators(): Observable<Response> {
      return this.http.get('/api/indicators').map( (res: Response) => res.json());
  }
  
  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes').map((res: Response ) => res.json());
  } 


  getPresetReport(): Observable<Response> {
    return this.http.get(this.presetReportUrl)
      .map((res: Response) => res.json())
  }

  getListRoutes(): Observable<Response> {
    return this.http.get('/api/listRoutes')
      .map((res: Response) => res.json())
  }

  getFilterFields(): Observable<Response> {
    return this.http.get(this.allFieldstUrl)
      .map((res: Response) => res.json())
  }

  toOnlyFields(data: Array<any>, propetry: string): Array<string> {
    let arr: Array<string> = [];
    data.map( item => {
      arr.push(item[propetry]);
    })
    return arr;
  }

}

