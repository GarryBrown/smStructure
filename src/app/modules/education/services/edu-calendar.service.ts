import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';

@Injectable()
export class EduCalendarService {

  constructor(
    private http: Http
  ) { }

  getEvent(dateFrom, dateTo) {
    const from: string = `${dateFrom.getFullYear()}/${dateFrom.getMonth()}/${dateFrom.getDate()}`;
    const to: string = `${dateTo.getFullYear()}/${dateTo.getMonth()}/${dateTo.getDate()}`;
    let params: URLSearchParams = new URLSearchParams();
    params.set('beginDate', from);
    params.set('endDate', to);
    return this.http.get('api/events', {
      search: params
    }).map(data => data.json());
  }

}
