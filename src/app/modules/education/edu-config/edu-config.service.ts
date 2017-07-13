import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'Rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Report } from '../../../models';

@Injectable()
export class EduConfigService {
  // private resourceUrl = '/api/plan-reports';
  private resourceUrl = '/api/planReports';
  private edu = new BehaviorSubject(undefined);

  constructor(
    private http: Http,
  ) { }


  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes')
      .map((res: Response) => res.json())
  }


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

  setCurrentEdu(obj) {
    console.log('setCurrentEdu');
    console.log(obj);
    this.edu.next(obj);
  }

  getCurrentEdu(): Observable<any> {
    return this.edu.asObservable().filter( item => item !== undefined);
  }



}
