import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Report } from '../../../models';

@Injectable()
export class ReportConfigService {

  private resourceUrl = '/api/reports';

  constructor(
    private http: Http,
  ) { }

  create(report: Report): Observable<Response> {
    return this.http.post(this.resourceUrl, report);
  }

  update(report: Report): Observable<Response> {
    return this.http.put(this.resourceUrl, report);
  }

  getReports(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: Response) => res.json())
  }
}