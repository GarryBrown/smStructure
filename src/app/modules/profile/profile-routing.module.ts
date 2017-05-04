import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteAccessService } from '../../core/auth/route-access.service';

import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerPopupComponent } from './customers/dialogs/customer-popup.component';


const ProfileRoutes: Routes = [
  {
    path: 'account',
    component: ProfileComponent,
    canActivate: [RouteAccessService],
    children: [
      {
        path: 'profile',
        component: ProfileDetailComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
    ],
  },
  {
      path: 'customer/:id/detail',
      component: CustomerPopupComponent,
      outlet: 'popup'
  },
  {
      path: 'new-customer',
      component: CustomerPopupComponent,
      outlet: 'popup'
  },
  {
      path: 'customer/:id/edit',
      component: CustomerPopupComponent,
      outlet: 'popup'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ProfileRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutesModule { }
/**
 * Created by demyanyuk.iv on 09.03.2017.
 */
