import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class EduResultService {

  private currentAnswer = new BehaviorSubject(undefined);

  fuck: string;


  constructor() { }

  setCurrentAnswer(answer: any) {
    this.currentAnswer.next(answer);
  }

  getCurrentAnswer(): Observable<any> {
    return this.currentAnswer.asObservable().filter( answer => answer !== undefined);
  }

  setA(str) {
    this.fuck = str;
  }

  getA() {
    return this.fuck;
  }

}
