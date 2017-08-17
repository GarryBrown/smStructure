import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay'

import { Report } from '../../../models';

@Injectable()
export class JournalService {

  private resourceUrl = 'api/plan-reports-origin';

  constructor(
    private http: Http,
  ) { }



  findReport(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

  getJournal(): Observable<any> {
    return Observable.from([
      [{ id: 1, description: 'Тема 1', date: "15.35.2001", route: "RS101", associate: "Сергей Навальный", status: "Выполнено", ocenka: "4,5" },
      { id: 1, description: 'Тема 2', date: "15.44.2001", route: "RS101", associate: "Сергей Навальный", status: "Выполнено", ocenka: "4,5" },
      { id: 1, description: 'Тема 3', date: "15.88.2001", route: "RS103", associate: "Артем Навальный", status: "Начато", ocenka: "" },
      { id: 1, description: 'Тема 4', date: "15.01.2001", route: "RS101", associate: "Сергей Навальный", status: "Просрочено", ocenka: "" }]
    ]).delay(1000);
  }

  getDelivetyPoints(routeID): Observable<Response> {
    let params = new URLSearchParams();
    params.set('routeId', routeID.toString())
    return this.http.get('/api/delivery-points', {
      search: params
    })
      .map((res: Response) => res.json())
  }




}

