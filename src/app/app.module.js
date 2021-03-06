"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
require('hammerjs');
var app_routing_module_1 = require('./app-routing.module');
var ng2_webstorage_1 = require('ng2-webstorage');
/* Basic */
var app_component_1 = require('./app.component');
var core_module_1 = require('./core/core.module');
//import { SidebarComponent } from './shared/shared.module';
/* Modules */
var kpi_module_1 = require('./modules/kpi/kpi.module');
var control_module_1 = require('./modules/control/control.module');
var login_module_1 = require('./login/login.module');
var dashboard_module_1 = require('./modules/dashboard/dashboard.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule.forRoot(),
                ng2_webstorage_1.Ng2Webstorage,
                login_module_1.LoginModule,
                kpi_module_1.KpiModule,
                control_module_1.ControlModule,
                dashboard_module_1.DashboardModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
