import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';

@Injectable()
export class EduCalendarService {

  constructor(
    private http: Http
  ) { }

  // скорее всего будет принимать парамет и подргужать либо сторчеки либо обучения
  getEvent(dateFrom, dateTo) {
    const from: string = `${dateFrom.getFullYear()}/${dateFrom.getMonth()}/${dateFrom.getDate()}`;
    const to: string = `${dateTo.getFullYear()}/${dateTo.getMonth()}/${dateTo.getDate()}`;
    console.log(`from ${from} to ${to}`)
    let params: URLSearchParams = new URLSearchParams();
    params.set('from', from);
    params.set('to', to);
    return this.http.get('api/events').map(data => data.json());
  }

}
