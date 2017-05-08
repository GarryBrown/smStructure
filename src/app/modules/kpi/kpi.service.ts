import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { DateUtilService, PrincipalService } from '../../core';


@Injectable()
export class KPIService {

  private resourceUrl = '/api/plans';

  constructor(private http: Http,
              private  dateUtils: DateUtilService,
              private principal: PrincipalService,
  ) {
    // this.resourceUrl = principal.getUrl() + this.resourceUrl;
  }

  create(order: any): Observable<any> {
    let copy: any = Object.assign({}, order);
    copy.dateOfCreate = this.dateUtils.toDate(order.dateOfCreate);
    copy.dateOfDocument = this.dateUtils.toDate(order.dateOfDocument);
    copy.dateOfDelivery = this.dateUtils.toDate(order.dateOfDelivery);
    copy.dateOfPayment = this.dateUtils.toDate(order.dateOfPayment);
    return this.http.post(this.resourceUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

  update(order: any): Observable<any> {
    let copy: any = Object.assign({}, order);

    copy.dateOfCreate = this.dateUtils.toDate(order.dateOfCreate);

    copy.dateOfDocument = this.dateUtils.toDate(order.dateOfDocument);

    copy.dateOfDelivery = this.dateUtils.toDate(order.dateOfDelivery);

    copy.dateOfPayment = this.dateUtils.toDate(order.dateOfPayment);
    return this.http.put(this.resourceUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      let jsonResponse = res.json();
      jsonResponse.dateOfCreate = this.dateUtils
        .convertDateTimeFromServer(jsonResponse.dateOfCreate);
      jsonResponse.dateOfDocument = this.dateUtils
        .convertDateTimeFromServer(jsonResponse.dateOfDocument);
      jsonResponse.dateOfDelivery = this.dateUtils
        .convertDateTimeFromServer(jsonResponse.dateOfDelivery);
      jsonResponse.dateOfPayment = this.dateUtils
        .convertDateTimeFromServer(jsonResponse.dateOfPayment);
      return jsonResponse;
    });
  }

  loadPlans(): Observable<Response> {
    return this.http.get(this.resourceUrl)
      .map((res: any) => {
        console.log(res);
        return res
      });
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

}

