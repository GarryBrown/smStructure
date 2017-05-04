"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//login сделать модулем с регистрацией и логином в одном + чайлд
var login_component_1 = require('./login/login.component');
var sidebar_component_1 = require("./components/common/sidebar/sidebar.component");
var routes = [
    // Main redirect
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', component: sidebar_component_1.SidebarComponent,
        outlet: 'sidebar'
    },
    { path: 'login', component: login_component_1.LoginComponent },
    // Handle all other routes
    { path: '**', redirectTo: '/dashboard' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
