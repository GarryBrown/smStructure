import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from "app/app.constants";

@Injectable()
export class AccountService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('api/account').map((res: Response) => res.json());
    //  return this.http.get(`${environment.gataway}/api/account`).map((res: Response) => res.json());
  }

  save(account: any): Observable<Response> {
    return this.http.post('api/account', account);
  }
}
