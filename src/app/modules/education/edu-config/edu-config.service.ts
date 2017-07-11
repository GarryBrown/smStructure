import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'Rxjs/Observable';

@Injectable()
export class EduConfigService {

  constructor(
    private http: Http,
  ) { }


  getRoutes(): Observable<Response> {
    return this.http.get('/api/routes')
      .map((res: Response) => res.json())
  }

}
