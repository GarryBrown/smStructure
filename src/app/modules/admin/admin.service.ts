import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { DateUtilService, UrlB2bService } from '../../core';
import { User } from '../../models';


@Injectable()
export class AdminService {

    private resourceUrl = '/api/users';


    constructor(private http: Http,
        private dateUtils: DateUtilService,
        private urlB2bService: UrlB2bService
    ) {
        this.resourceUrl = urlB2bService.getUrl() + this.resourceUrl;
    }

    create(user: User): Observable<Response> {
        return this.http.post(this.resourceUrl, user);
    }

    update(user: User): Observable<Response> {
        return this.http.put(this.resourceUrl, user);
    }

    find(login: string): Observable<User> {
        return this.http.get(`${this.resourceUrl}/${login}`).map((res: Response) => res.json());
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
        // return this.http.get(this.resourceUrl);
    }

    delete(login: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${login}`);
    }




}

