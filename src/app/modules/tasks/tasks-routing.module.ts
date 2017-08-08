import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { RouteAccessService } from "../../core";
import { PaginUtilService } from '../../shared';

import { ListTasksComponent, TasksPopupComponent } from "./components";

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

const mapRoutes: Routes = [
  {
    path: 'tasks',
    component: ListTasksComponent,
    canActivate: [RouteAccessService],
    resolve: {
      'pagingParams': UserResolvePagingParams
    }
  },
   {
    path: 'task/:id/details',
    component: TasksPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'task/:id/edit',
    component: TasksPopupComponent,
    outlet: 'popup',
  },
  {
    path: 'task/new',
    component: TasksPopupComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(mapRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule { }
