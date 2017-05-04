"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var sort_by_directive_1 = require('./directive/sort-by.directive');
var sort_directive_1 = require('./directive/sort.directive');
var pagin_util_service_1 = require('./services/pagin-util.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [sort_by_directive_1.SortByDirective, sort_directive_1.SortDirective],
            exports: [common_1.CommonModule,
                sort_by_directive_1.SortByDirective,
                sort_directive_1.SortDirective],
            providers: [pagin_util_service_1.PaginUtilService]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
