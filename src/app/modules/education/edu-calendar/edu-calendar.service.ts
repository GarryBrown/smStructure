import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EduCalendarService {

  constructor(
    private http: Http
  ) { }

  getEvent() {
    return this.http.get('api/teaching').map(data => data.json());
  }

}
