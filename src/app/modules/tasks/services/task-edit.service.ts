import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class TaskEditService {

  constructor(private http: Http) { }

  getRoutes(): Observable<Response> {
    return this.http.get('api/routes')
      .map((res: Response) => res.json())
  }

  getTypeOfActivity(): Observable<Response> {
    return this.http.get('api/type-of-activities')
      .map((res: Response) => res.json())
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
