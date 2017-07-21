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
  private reportUrl = '/api/reports';
  constructor(
    private http: Http,
  ) { }

  findReport(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

  update(teaching: any): Observable<any> {
    let copy: any = Object.assign({}, teaching);
    return this.http.put(this.resourceUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

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

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          resolve(position);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
        resolve(null);
      }
    });

  }
}
