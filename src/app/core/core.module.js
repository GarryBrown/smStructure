"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var auth_service_1 = require('./auth/auth.service');
var auth_jwt_service_1 = require('./auth/auth-jwt.service');
var route_access_service_1 = require('./auth/route-access.service');
var account_service_1 = require('./principal/account.service');
var principal_service_1 = require('./principal/principal.service');
var date_util_service_1 = require('./utils/date-util.service');
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: [
                auth_service_1.AuthService,
                auth_jwt_service_1.AuthJwtService,
                route_access_service_1.RouteAccessService,
                account_service_1.AccountService,
                principal_service_1.PrincipalService,
                date_util_service_1.DateUtilService
            ]
        };
    };
    CoreModule = __decorate([
        core_1.NgModule({
            exports: [
                http_1.HttpModule
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
