import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';

@Injectable()
export class ResultService {

  // private qualitiesUrl = '/api/qualities';

  constructor(private http: Http) { }

  getQualities(): Observable<Array<any>> {
    return this.http.get('/api/qualities')
      .map((res: Response) => {
        return res.json();
      });
  }

}
