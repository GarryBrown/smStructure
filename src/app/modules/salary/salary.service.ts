import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class SalaryService {

  private UrlSalaries = 'api/salaries';
  private UrlUser = 'api/users/gorbunov.ia';

  constructor(private http: Http) { }
  
  getSalariesAndUserSalary() {
   return Observable.forkJoin(
      this.http.get('api/salaries').map((res: any) => res.json()),
      this.http.get('api/users/gorbunov.ia').map((res: any) => res.json())
    )
  }
}
