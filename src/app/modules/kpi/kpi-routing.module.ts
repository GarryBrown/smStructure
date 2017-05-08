import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared/services/pagin-util.service';
import { RouteAccessService } from '../../core/auth/route-access.service';

import { KPIComponent } from './kpi.component';
import { OrderPopupComponent } from './dialogs/order-popup.component';

@Injectable()
export class UserResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginUtilService) {}

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

const OrdersRoutes: Routes = [
  {
    path: 'kpi',
    component: KPIComponent,
    canActivate: [RouteAccessService],
    resolve: {
      'pagingParams': UserResolvePagingParams
    }
  },
  {
    path: 'order/:id/detail',
    component: OrderPopupComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(OrdersRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
