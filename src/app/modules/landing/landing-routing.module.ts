import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { SigninComponent } from './signin/signin.component';


const LandingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      // {
      //   path: 'landing',
      //   component: LandingPageComponent,
      // },
      {
        path: 'login',
        component: SigninComponent,
      },
      // {
      //   path: 'signup',
      //   component: SignupComponent,
      // },
    ]


  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(LandingRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
/**
 * Created by demyanyuk.iv on 06.03.2017.
 */
