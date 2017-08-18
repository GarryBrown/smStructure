import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StepsService {

  private resourceUrl = 'api/teachings';
  private resourceSpecialitiesUrl = 'api/teaching-specialities';

  constructor(
    private http: Http,
  ) { }

  find(id: string): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

  getTeaching(): Observable<any> {
    return this.http.get(this.resourceUrl).map((res: Response) => {
      return res.json();
    });
  }

  sendAnswer(teachingSpecialities) {
    let copy: any = Object.assign({}, teachingSpecialities);
    return this.http.put(this.resourceSpecialitiesUrl, copy).map((res: Response) => {
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
