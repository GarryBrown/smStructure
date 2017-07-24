import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from "@angular/http";


@Injectable()
export class EduResultService {

  private currentAnswer = new BehaviorSubject(undefined);
  fuck: string;
  private resoureUrlEduResult = '/api/eduResult';

  constructor(private http: Http) { }

  getEduResult(): Observable<Array<any>> {
    return this.http.get(this.resoureUrlEduResult)
      .map((res: Response) => {
        return res.json();
      });
  }

  getCategories(): Observable<Array<any>> {
    return this.http.get('/api/categories')
      .map((res: Response) => {
        return res.json();
      });
  }

  getRoutes(): Observable<Array<any>> {
    return this.http.get('/api/routes')
      .map((res: Response) => {
        return res.json();
      });
  }

  getThemes(): Observable<Array<any>> {
    return this.http.get('/api/themes')
      .map((res: Response) => {
        return res.json();
      });
  }

  getEduResultData(themes: Array<any>): Observable<Response> {
    // api/plan-routes?typeOfPlanId=1,5&routeId=213,214
    let params: URLSearchParams = new URLSearchParams();
    let routesIds: Array<any> = [];
    let categoriesIds: Array<any> = [];
    let themesIds: Array<any> = [];
    themes.map(theme => {
      theme.themes.map(id =>
        themesIds.push(id.id));
    });
    
    params.set('themeId', themesIds.join());
    return this.http.get(this.resoureUrlEduResult, {
      // search: params
    }).map((res: Response) => res.json());
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
