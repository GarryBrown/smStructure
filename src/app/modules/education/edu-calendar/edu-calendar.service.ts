import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EduCalendarService {

  constructor(
    private http: Http
  ) { }

  // скорее всего будет принимать парамет и подргужать либо сторчеки либо обучения
  getEvent() {
    return this.http.get('api/events').map(data => data.json());
  }
  // getEvent() {
  //   return this.http.get('api/teaching').map(data => data.json());
  // }

}
