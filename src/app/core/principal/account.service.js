"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.user = {
            name: "Jhon",
            password: "123"
        };
    }
    AccountService.prototype.get = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            setTimeout(function () {
                observer.next(_this.user);
            }, 1);
            setTimeout(function () {
                observer.complete();
            }, 5);
        }).map(function (res) { return res.json(); });
        //return this.http.get('api/account').map((res: Response) => res.json());
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    AccountService = __decorate([
        core_1.Injectable()
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
