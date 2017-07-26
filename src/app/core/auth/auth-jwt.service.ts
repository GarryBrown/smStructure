import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Rx';
import { UrlB2bService } from '../utils/url-b2b.service';

import { environment } from '../../app.constants';

@Injectable()
export class AuthJwtService {
    constructor(
        private http: Http,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService,
        private urlB2bService: UrlB2bService

    ) { }

    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }


    login(credentials): Observable<any> {

        let data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        if (environment.production) {
            return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        } else {
            return new Observable(observer => {
                observer.next(5);
                observer.complete();
            }).map(authenticateSuccess.bind(this));
        }



        function authenticateSuccess(resp) {
            let bearerToken;
            if (environment.production) {
                bearerToken = resp.headers.get('Authorization');
            } else {
                bearerToken = "Bearer fdsfjewpfjpwijr543209ur09243rjek;fj9320jr82094jrskdfj2930r902jreis;jarkl49t43htj3jkht;asd";
            }
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                let jwt = bearerToken.slice(7, bearerToken.length);
                let dataJwt = this.parseJwt(jwt);

                if (this.checkAuthority(dataJwt)) {
                    this.storeUrlFromJWT(dataJwt);
                    this.storeAuthenticationToken(jwt, credentials.rememberMe);
                    return jwt;
                } else {
                    return false;
                }

            }
        }
    }

    logout(): Observable<any> {
        return new Observable(observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    }

    loginWithToken(jwt, rememberMe) {
        let dataJwt = this.parseJwt(jwt);

        if (this.checkAuthority(dataJwt)) {
            this.storeUrlFromJWT(dataJwt);
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        } else {
            return Promise.reject('Hasn\'t role b2b: Promise reject'); // Put appropriate error message here
        }
    }

    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        } else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }

    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    checkAuthority(dataJwt) {
        return dataJwt.gateway.some(authority =>
            authority.authority === 'ROLE_ADMIN');
    }

    storeUrlFromJWT(dataJwt) {
        return dataJwt.gateway.forEach(authority => {
            if (authority.authority === 'ROLE_B2B') {
                this.urlB2bService.setUrl(authority.gateway);
            }
        });
    }


}
