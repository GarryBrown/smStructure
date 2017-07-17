import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from "@angular/http";


@Injectable()
export class EduResultService {

  private currentAnswer = new BehaviorSubject(undefined);

  fuck: string;


  constructor(private http: Http) { }

  getEduResult(): Observable<Array<any>> {
    return this.http.get('/api/eduResult')
      .map((res: Response) => {
        return res.json();
      });
  }

  setCurrentAnswer(answer: any) {
    this.currentAnswer.next(answer);
  }

  getCurrentAnswer(): Observable<any> {
    return this.currentAnswer.asObservable().filter(answer => answer !== undefined);
  }

  setA(str) {
    this.fuck = str;
  }

  getA() {
    return this.fuck;
  }

}
