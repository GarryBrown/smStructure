"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var PrincipalService = (function () {
    function PrincipalService(account, authJwt) {
        this.account = account;
        this.authJwt = authJwt;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    PrincipalService.prototype.authenticate = function (_identity) {
        this._identity = _identity;
        this.authenticated = _identity !== null;
    };
    PrincipalService.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this._identity = undefined;
        }
        // check and see if we have retrieved the _identity data from the server.
        // if we have, reuse it by immediately resolving
        if (this._identity) {
            return Promise.resolve(this._identity);
        }
        if (!this.authJwt.getToken()) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    _this._identity = null;
                    _this.authenticated = false;
                    resolve(_this._identity);
                }, 500);
            });
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this._identity = {
                    firstname: 'Elon',
                    lastname: 'Musk',
                    hobby: 'Murder'
                };
                _this.authenticated = true;
                resolve(_this._identity);
            }, 500);
        });
        // retrieve the _identity data from the server, update the _identity object, and then resolve.
        /* WITHOUT API TEMP SOLUTION */
        /*return this.account.get().toPromise().then(account => {
  
          console.log('account');
          console.log(account);
          if (account) {
            this._identity = account;
            this.authenticated = true;
          } else {
            this._identity = null;
            this.authenticated = false;
          }
          return this._identity;
        }).catch(err => {
          this._identity = null;
          this.authenticated = false;
          return null;
        });*/
    };
    PrincipalService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    PrincipalService.prototype.getAccount = function () {
        return this._identity;
    };
    PrincipalService = __decorate([
        core_1.Injectable()
    ], PrincipalService);
    return PrincipalService;
}());
exports.PrincipalService = PrincipalService;
