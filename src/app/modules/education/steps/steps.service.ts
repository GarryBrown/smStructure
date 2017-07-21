import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StepsService {

  // private resourceUrl = 'api/edu';
  private resourceUrl = 'api/teaching';

  constructor(
    private http: Http,
  ) { }

  find(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

  getTeaching(): Observable<any> {
    return this.http.get(this.resourceUrl).map((res: Response) => {
      return res.json();
    });
  }


  create(teaching: any): Observable<Response> {
    return this.http.post(this.resourceUrl, teaching);
  }

  update(teaching: any): Observable<Response> {
    return this.http.put(this.resourceUrl, teaching);
  }

}
