import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AuthJwtService {
    constructor(
        private http: Http,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService
    ) {}

    getToken () {
      return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    // login (credentials): Observable<any>  {

    //     let data = {
    //       username: credentials.username,
    //       password: credentials.password,
    //       rememberMe: credentials.rememberMe
    //     };

    //     // console.log(data);

    //     return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));

    //     function authenticateSuccess (resp) {
    //       let bearerToken = resp.headers.get('Authorization');
    //       if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
    //           let jwt = bearerToken.slice(7, bearerToken.length);
    //           console.log(jwt);
    //           this.storeAuthenticationToken(jwt, credentials.rememberMe);
    //           return jwt;
    //       }
    //     }
    // }

    login (credentials): Observable<any>  {
       let data = {
         username: credentials.username,
         password: credentials.password,
         rememberMe: credentials.rememberMe
       };
       console.log(data);
       //return this.http.post('http://localhost:8084/api/authenticate', data).map(authenticateSuccess.bind(this));
       return new Observable(observer => {
         observer.next(5);
         observer.complete();
       }).map(authenticateSuccess.bind(this));
       function authenticateSuccess (resp) {
         console.log('response:');
         console.log(resp);
         console.log('store jwt');
         //let bearerToken = resp.headers.get('Authorization');
         let bearerToken = "Bearer fdsfjewpfjpwijr543209ur09243rjek;fj9320jr82094jrskdfj2930r902jreis;jarkl49t43htj3jkht;asd";
         if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            let jwt = bearerToken.slice(7, bearerToken.length);
            this.storeAuthenticationToken(jwt, credentials.rememberMe);
            console.log('return jwt');
            return jwt;
         }
       }
   }

    logout (): Observable<any> {
        return new Observable(observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }

  loginWithToken(jwt, rememberMe) {
     if (jwt) {
     this.storeAuthenticationToken(jwt, rememberMe);
     return Promise.resolve(jwt);
     } else {
     return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
     }
  }
  storeAuthenticationToken(jwt, rememberMe) {
      console.log(jwt + '    ' + rememberMe);
     if (rememberMe) {
     this.$localStorage.store('authenticationToken', jwt);
     } else {
     this.$sessionStorage.store('authenticationToken', jwt);
     }
  }

}
