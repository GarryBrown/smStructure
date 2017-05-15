import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Rx';
import { UrlB2bService } from '../utils/url-b2b.service';


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
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));

        function authenticateSuccess(resp) {
            let bearerToken = resp.headers.get('Authorization');
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

    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    checkAuthority(dataJwt) {
        return dataJwt.gateway.some(authority =>
            authority.authority === 'ROLE_B2B');
    }

    storeUrlFromJWT(dataJwt) {
        return dataJwt.gateway.forEach(authority => {
            if (authority.authority === 'ROLE_B2B') {
                this.urlB2bService.setUrl(authority.gateway);
            }
        });
    }


}
