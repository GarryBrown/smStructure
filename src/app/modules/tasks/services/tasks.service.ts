import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Task } from '../../../models';

@Injectable()
export class TasksService {

  private resourceUrl = 'api/activities';
  // info: http://yt/issue/HM-125

  constructor(private http: Http, ) { }

  create(user: Task): Observable<Response> {
    return this.http.post(this.resourceUrl, user);
  }

  update(user: Task): Observable<Response> {
    return this.http.put(this.resourceUrl, user);
  }

  find(login: string): Observable<Task> {
    return this.http.get(`${this.resourceUrl}/${login}`).map((res: Response) => res.json());
  }

  delete(login: string): Observable<Response> {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }

  query(req?: any): Observable<Response> {
    const params: URLSearchParams = new URLSearchParams();
    if (req) {
      params.set('page', req.page);
      params.set('size', req.size);
      if (req.sort) {
        params.paramsMap.set('sort', req.sort);
      }
    }
    const options = {
      search: params
    };
    return this.http.get(this.resourceUrl, options);
  }

  // query(req?: any): Observable<Response> {
  //   let headers = new Headers();
  //   headers.append('Access-Control-Expose-Headers', 'etag');
  //   const params: URLSearchParams = new URLSearchParams();

  //   if (req) {
  //     params.set('page', req.page);
  //     params.set('size', req.size);
  //     if (req.sort) {
  //       params.paramsMap.set('sort', req.sort);
  //     }
  //   }
  //   const options = {
  //     search: params,
  //     headers: headers
  //   };
  //   return this.http.get(this.resourceUrl, options);
  // }
}
