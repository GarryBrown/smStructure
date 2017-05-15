import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared';
import { RouteAccessService } from '../../core';

import { AdminComponent } from './admin.component';
import { AdminPopupComponent } from './dialogs/admin-popup.component';

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

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RouteAccessService],
    resolve: {
      'pagingParams': UserResolvePagingParams
    }
  },
  {
    path: 'user/:login/detail',
    component: AdminPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'user/:login/edit',
    component: AdminPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'user/new',
    component: AdminPopupComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AdminRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
