import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { DateUtilService, PrincipalService } from '../../core';


@Injectable()
export class EducationService {

  private resourceUrl = '/api/plans';
  private presetReportUrl = '/api/reports';
  private allFieldstUrl = '/api/allFields';

  constructor(private http: Http,
    private dateUtils: DateUtilService,
    private principal: PrincipalService,
  ) {
  }



  loadPlans(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: any) => {
        return res
      });
  }

}

