import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'Rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Report } from '../../../models';

@Injectable()
export class EduConfigService {
  private teaching = new BehaviorSubject(undefined);

  private resourceUrl = 'api/plan-reports-origin';
  private resourceReportUrl = 'api/plan-reports';
  private resourceTeachingUrl = 'api/teachings';

  constructor(
    private http: Http,
  ) { }

  findReport(id: number): Observable<any> {
    return this.http.get(`${this.resourceReportUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

  update(teaching: any): Observable<any> {
    let copy: any = Object.assign({}, teaching);
    return this.http.put(this.resourceTeachingUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

  getRoutes(): Observable<Response> {
    return this.http.get('api/routes')
      .map((res: Response) => res.json())
  }


  findRoutes(id): Observable<Response> {
    return this.http.get(`api/plan-reports/${id}`)
      .map((res: Response) => res.json())
  }

  getDelivetyPoints(routeID): Observable<Response> {
    let params = new URLSearchParams();
    params.set('routeId', routeID.toString())
    return this.http.get('/api/delivery-points')
      .map((res: Response) => res.json())
  }

  getThemes(): Observable<Response> {
    return this.http.get('/api/type-of-teachings')
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

        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            console.error(error);
            if (error.code === 2 || error.code === 1) {
              resolve(this.getPositionByIP(resolve, reject))
            }

            reject(error);
          });
      } else {
        console.log("Geolocation is not supported by this browser.");
        reject(false);
      }
    });

  }

  getPositionByIP(resolve, reject): Promise<any> {
    return this.http.get('https://ipinfo.io')
      .map((res: Response) => res.json())
      .toPromise().then(
      (position) => {
        resolve(position)
      },
      (error) => reject(error)
      )
  }

  createMetrics(location: any, time: any, teachingId: number, routeId: number, staffId: number) {
    let position;
    console.log(location);
    if (location.hasOwnProperty('loc')) {
      position = location.loc;
    } else {
      position = `${location.coords.latitude},${location.coords.longitude}`;
    }
    return {
      position: position,
      time: time,
      route: routeId,
      teaching: teachingId,
      staff: staffId
    }
  }


}

interface position {
  coord: {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
  }

  timestamp: number
}
