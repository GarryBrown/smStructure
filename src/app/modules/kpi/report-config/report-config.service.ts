import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Report } from '../../../models';

@Injectable()
export class ReportConfigService {

  private resourceUrl = '/api/plan-reports';
  //private resourceUrl = '/api/reports';

  constructor(
    private http: Http,
  ) { }

  create(report: Report): Observable<Response> {
    return this.http.post(this.resourceUrl, report).map((res: Response) => res.json());
  }

  update(report: Report): Observable<Response> {
    return this.http.put(this.resourceUrl, report).map((res: Response) => res.json());
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  getReports(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: Response) => res.json())
  }
}
