import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { DateUtilService, PrincipalService } from '../../core';


@Injectable()
export class DashboardService {

  private resourceUrl = '/api/dashboard';

  constructor(private http: Http,
              private  dateUtils: DateUtilService,
              private principal: PrincipalService,
  ) {
    this.resourceUrl = principal.getUrl() + this.resourceUrl;
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

  query(req?: any): Observable<Response> {
    let options = this.createRequestOption(req);
    //return this.http.get(this.resourceUrl).map(res => res);
    return this.http.get(this.resourceUrl) // i remove options, need add it
      .map((res: any) => this.convertResponse(res));
      //.map( (res: any) => this.computing(res));
  }

  delete(id: number): Observable<Response> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }


  private convertResponse(res: any): any {
    let jsonResponse = res.json();
    for (let i = 0; i < jsonResponse.length; i++) {
      jsonResponse[i].dateOfCreate = this.dateUtils
        .convertDateTimeFromServer(jsonResponse[i].dateOfCreate);
      jsonResponse[i].dateOfDocument = this.dateUtils
        .convertDateTimeFromServer(jsonResponse[i].dateOfDocument);
      jsonResponse[i].dateOfDelivery = this.dateUtils
        .convertDateTimeFromServer(jsonResponse[i].dateOfDelivery);
      jsonResponse[i].dateOfPayment = this.dateUtils
        .convertDateTimeFromServer(jsonResponse[i].dateOfPayment);
    }
    res._body = jsonResponse;
    return res;
  }

  private createRequestOption(req?: any): BaseRequestOptions {
    let options: BaseRequestOptions = new BaseRequestOptions();
    if (req) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('page', req.page);
      params.set('size', req.size);
      if (req.sort) {
        params.paramsMap.set('sort', req.sort);
      }
      params.set('query', req.query);

      options.search = params;
    }
    return options;
  }

  public computing(data: any): any {
    data.forEach(function(item){
      item.orderQuantityAmount = 0;
      item.saleQuantityAmount = 0;
      item.orderSpecialities.forEach(function (itemSpec) {
        if (itemSpec.orderQuantity > 0)  item.orderQuantityAmount++;
        if (itemSpec.saleQuantity > 0)  item.saleQuantityAmount++;
      });
    });
    return data;
  }


/*  changeFilters(filters: Filters): void {
    this.filters = filters;
    this.refetch();
  }

  private refetch(): void {
    const params = new URLSearchParams();
    params.set("speaker", this.filters.speaker);
    params.set("title", this.filters.title);
    params.set("minRating", this.filters.minRating.toString());
    this.http.get(`/talks`, {search: params}).forEach((r) => {
      const data = r.json();
      this._talks = data.talks;
      this._list = data.list;
    });
  }*/

}

