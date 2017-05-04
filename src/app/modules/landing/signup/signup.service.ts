import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class SignupService {

  private resourceUrl = 'api/leaveorder';

  constructor(private http: Http) { }

  signUp (credentials) : Observable<Response>{
    return this.http.post(this.resourceUrl, credentials).map((res: Response) =>{
      console.log(res);
      return res.json();
    });
  }

}
