import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared/services/pagin-util.service';
import { RouteAccessService } from '../../core/auth/route-access.service';

import { KPIComponent } from './kpi.component';
import { PlanDetailComponent } from "app/modules/kpi/plan-detail/plan-detail.component";

@Injectable()
export class UserResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginUtilService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

const KPIRoutes: Routes = [
  {
    path: 'kpi/charts',
    component: KPIComponent,
    canActivate: [RouteAccessService],
    resolve: { 'pagingParams': UserResolvePagingParams }
  },
  {
    path: 'kpi',
    canActivate: [RouteAccessService],
    component: PlanDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(KPIRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
