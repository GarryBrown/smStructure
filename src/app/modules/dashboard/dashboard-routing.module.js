"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var route_access_service_1 = require('../../core/auth/route-access.service');
var dashboard_component_1 = require('./dashboard.component');
var UserResolvePagingParams = (function() {
  function UserResolvePagingParams(paginationUtil) {
    this.paginationUtil = paginationUtil;
  }
  UserResolvePagingParams.prototype.resolve = function(route, state) {
    var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
    // console.log(page);
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  };
  UserResolvePagingParams = __decorate([
    core_1.Injectable()
  ], UserResolvePagingParams);
  return UserResolvePagingParams;
}());
exports.UserResolvePagingParams = UserResolvePagingParams;
var DashboardRoutes = [{
  path: 'dashboard',
  component: dashboard_component_1.DashboardComponent,
  canActivate: [route_access_service_1.RouteAccessService],
  resolve: {
    'pagingParams': UserResolvePagingParams
  }
}];
var DashboardRoutingModule = (function() {
  function DashboardRoutingModule() {}
  DashboardRoutingModule = __decorate([
    core_1.NgModule({
      imports: [
        //RouterModule.forChild(DashboardRoutes, { useHash: true })
        router_1.RouterModule.forRoot(DashboardRoutes, { useHash: true }),
      ],
      exports: [
        router_1.RouterModule
      ]
    })
  ], DashboardRoutingModule);
  return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
/*import { NgModule, Injectable }             from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared/services/pagin-util.service';

import { DashboardComponent } from './dashboard.component';

@Injectable()
export class UserResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginUtilService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
    console.log(page);
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      'pagingParams': UserResolvePagingParams
    }
  }
];*/
/*
@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})*/
/*export class DashboardRoutingModule { }*/