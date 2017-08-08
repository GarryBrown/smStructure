import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomersService {

  private resourceUrl = 'api/deliveryPoints';

  constructor(private http: Http
  ) { }

  create(store: any): Observable<any> {
    let copy: any = Object.assign({}, store);
    return this.http.post(this.resourceUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

  update(store: any): Observable<any> {
    let copy: any = Object.assign({}, store);
    return this.http.put(this.resourceUrl, copy).map((res: Response) => {
      return res.json();
    });
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      let jsonResponse = res.json();
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





}

