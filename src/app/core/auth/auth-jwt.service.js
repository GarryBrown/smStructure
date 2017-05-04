"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var AuthJwtService = (function () {
    function AuthJwtService(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthJwtService.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthJwtService.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        console.log(data);
        //return this.http.post('http://localhost:8084/api/authenticate', data).map(authenticateSuccess.bind(this));
        return new Rx_1.Observable(function (observer) {
            observer.next(5);
            observer.complete();
        }).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            console.log('response:');
            console.log(resp);
            console.log('store jwt');
            //let bearerToken = resp.headers.get('Authorization');
            var bearerToken = "Bearer fdsfjewpfjpwijr543209ur09243rjek;fj9320jr82094jrskdfj2930r902jreis;jarkl49t43htj3jkht;asd";
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                console.log('return jwt');
                return jwt;
            }
        }
    };
    AuthJwtService.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    AuthJwtService.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthJwtService.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        console.log(jwt + '    ' + rememberMe);
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthJwtService = __decorate([
        core_1.Injectable()
    ], AuthJwtService);
    return AuthJwtService;
}());
exports.AuthJwtService = AuthJwtService;
