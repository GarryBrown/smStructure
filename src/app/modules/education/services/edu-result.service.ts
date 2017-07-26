import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from "@angular/http";

import { UtilsService } from '../../../shared';

export interface resultFilter {
  dateFrom: Date,
  dateTo: Date,
  themes: Array<any>,
  routes: Array<any>,
  category: any
}

@Injectable()
export class EduResultService {

  private currentAnswer = new BehaviorSubject(undefined);
  fuck: string;
  private resoureUrlEduResult = '/api/eduResult';

  constructor(
    private http: Http,
    private utilsService: UtilsService
  ) { }


  setCurrentAnswer(answer: any) {
    this.currentAnswer.next(answer);
  }

  getCurrentAnswer(): Observable<any> {
    return this.currentAnswer.asObservable().filter(answer => answer !== undefined);
  }

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

  getEduResultData(filter: resultFilter): Observable<Response> {
    // api/plan-routes?typeOfPlanId=1,5&routeId=213,214

    let params: URLSearchParams = new URLSearchParams();
    if (filter.dateFrom) {
      params.set('dateFrom', this.utilsService.dateToString(filter.dateFrom));
    }
    if (filter.dateTo) {
      params.set('dateFrom', this.utilsService.dateToString(filter.dateTo));
    }
    if (filter.category) {
      params.set('category', filter.category);
    }

    if (filter.themes.length) {
      let themesIds: Array<number> = [];
      filter.themes.map(id =>
        themesIds.push(id)
      );
      params.set('themes', themesIds.join());
    }
    if (filter.routes.length) {
      let routesIds: Array<number> = [];
      filter.routes.map(id =>
        routesIds.push(id)
      );
      params.set('routes', routesIds.join());
    }

    return this.http.get(this.resoureUrlEduResult, {
      // search: params
    }).map((res: Response) => res.json());
  }



}
