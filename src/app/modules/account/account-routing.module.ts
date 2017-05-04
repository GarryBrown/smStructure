import { NgModule, Injectable }             from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared';
import { RouteAccessService } from '../../core';

import { AccountsComponent } from './account.component';
import { ActivateComponent } from './activate/activate.component';
// import { AccountsPopupComponent } from './dialogs/stores-popup.component';



const AccountsRoutes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    //canActivate: [RouteAccessService],
    children: [
      {
        path:'activate',
        component: ActivateComponent,
        //canActivate: [RouteAccessService],
      }
    ]
  },
  // {
  //     path: 'store/:id/detail',
  //     component: AccountsPopupComponent,
  //     outlet: 'popup'
  // },
  // {
  //     path: 'new-store',
  //     component: AccountsPopupComponent,
  //     outlet: 'popup'
  // },
  // {
  //     path: 'store/:id/edit',
  //     component: AccountsPopupComponent,
  //     outlet: 'popup'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AccountsRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AccountsRoutingModule { }
