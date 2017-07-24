// import { Injectable } from '@angular/core';
// import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class InterceptorService {

//   constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
//     super(backend, defaultOptions);
//   }

//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('request...');
//     return super.request(url, options).catch(res => {
//       // do something
//     });        
//   }

//   get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     console.log('get...');
//     return super.get(url, options).catch(res => {
//       // do something
//     });
//   }

// }