import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'Rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Report } from '../../../models';

@Injectable()
export class EduConfigService {
  // private resourceUrl = '/api/plan-reports';
  private resourceUrl = '/api/planReports';
  private teaching = new BehaviorSubject(undefined);

  constructor(
    private http: Http,
  ) { }


  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes')
      .map((res: Response) => res.json())
  }

  getDelivetyPoints(): Observable<Response> {
    return this.http.get('/api/deliveryPoints')
      .map((res: Response) => res.json())
  }

  getReports(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: Response) => res.json())
  }

  setCurrentTeaching(obj) {
    this.teaching.next(obj);
  }

  getCurrentTeaching(): Observable<any> {
    return this.teaching.asObservable(); //.filter(item => item !== undefined);
  }



}
