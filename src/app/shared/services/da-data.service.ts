import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, BaseRequestOptions  } from '@angular/http';

@Injectable()
export class DaDataService {
    public token = 'fcbec257229411559aa335079b5063a29bb3c759';
    public urlCustomer = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
    public urlAddress = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

    constructor(private http: Http) { }

    queryCustomers(req) {
      let headers = this.createHeader();
      return this.http.post(this.urlCustomer, req, { headers : headers })
        .map((res: Response) => {
          return res.json().suggestions;
      })
      ;
    }

    queryAddress(req) {
      let headers = this.createHeader();
      return this.http.post(this.urlAddress, req, { headers : headers })
        .map((res: Response) => {
          return res.json().suggestions;
      });
    }


    createHeader(): Headers {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Token ' + this.token);
      return headers;
    }


}
