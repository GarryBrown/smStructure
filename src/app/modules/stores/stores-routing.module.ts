import { NgModule, Injectable }             from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared/services/pagin-util.service';
import { RouteAccessService } from '../../core/auth/route-access.service';

import { StoresComponent } from './stores.component';
import { StoresPopupComponent } from './dialogs/stores-popup.component';



const StoresRoutes: Routes = [
  {
    path: 'stores',
    component: StoresComponent,
    canActivate: [RouteAccessService],
  },
  {
      path: 'store/:id/detail',
      component: StoresPopupComponent,
      outlet: 'popup'
  },
  {
      path: 'new-store',
      component: StoresPopupComponent,
      outlet: 'popup'
  },
  {
      path: 'store/:id/edit',
      component: StoresPopupComponent,
      outlet: 'popup'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(StoresRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class StoresRoutingModule { }
