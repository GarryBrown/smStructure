import { NgModule, Injectable }             from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { PaginUtilService } from '../../shared';
import { RouteAccessService } from '../../core';

import { AccountsComponent } from './components/account/account.component';
import { ActivateComponent } from './components/activate/activate.component';
import { ActivateByEmailComponent } from './components/activate-by-email/activate-by-email.component';



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
      },
       {
        path:'activateByEmail',
        component: ActivateByEmailComponent,
        //canActivate: [RouteAccessService],
      }
    ]
  },
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
