import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TaskEditService {
  sourceTaskUpdated: Subject<any> = new Subject();

  constructor(private http: Http) { }


  updateTasks(obj) {
    this.sourceTaskUpdated.next(obj);
  }

  checkUpdatesTasks(): Observable<any> {
    return this.sourceTaskUpdated.asObservable();
  }

  // getRoutes(): Observable<Response> {
  //   return this.http.get('api/routes')
  //     .map((res: Response) => res.json())
  // }

  // getTypeOfActivity(): Observable<Response> {
  //   return this.http.get('api/type-of-activities')
  //     .map((res: Response) => res.json())
  // }

  getDelivetyPoints(routeID): Observable<Response> {
    let params = new URLSearchParams();
    params.set('routeId', routeID.toString())
    return this.http.get('/api/delivery-points', {
      search: params
    })
      .map((res: Response) => res.json())
  }

  getRoutesAndTypeOfActivities() {
    return Observable.forkJoin(
      this.http.get('api/routes').map((res: any) => res.json()),
      this.http.get('api/type-of-activities').map((res: any) => res.json())
    )
  }
}
