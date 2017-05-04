import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AvatarService {

  resourceUrl = 'api/account/avatar';

  constructor(
    private http: Http,
  ) { }

  save(formData): Observable<any> {
     return this.http.post(this.resourceUrl, formData).map((res: Response) => {
            return res.json();
        });
  }

}
