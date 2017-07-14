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
  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }

    return option;
  }
}
