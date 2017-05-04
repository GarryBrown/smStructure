"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var material_1 = require('@angular/material');
var angular2_material_datepicker_1 = require('angular2-material-datepicker');
var date_util_service_1 = require('../../core/utils/date-util.service');
var dashboard_routing_module_1 = require('./dashboard-routing.module');
//import { UserResolvePagingParams } from './dashboard-routing.module';
var shared_module_1 = require('../../shared/shared.module');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_service_1 = require('./dashboard.service');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_mem_data_service_1 = require('../../in-mem-data-service');
//import { DashboardRoutes } from './dashboard-routing.module';
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                material_1.MaterialModule,
                angular2_material_datepicker_1.DatepickerModule,
                dashboard_routing_module_1.DashboardRoutingModule,
                shared_module_1.SharedModule,
                //RouterModule.forRoot(DashboardRoutes, { useHash: true }),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_mem_data_service_1.InMemDataService, { delay: 500 }),
            ],
            declarations: [dashboard_component_1.DashboardComponent],
            providers: [dashboard_service_1.DashboardService, date_util_service_1.DateUtilService, dashboard_routing_module_1.UserResolvePagingParams]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
