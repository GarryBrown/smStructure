import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { RouteAccessService } from '../../core';

import { EducationComponent } from './education.component';
import { StepsComponent } from './steps/steps.component';

const EducationRoutes: Routes = [
  {
    path: 'edu',
    component: EducationComponent,
    canActivate: [RouteAccessService],
  },
  {
    path: 'edu/theme/:id',
    component: StepsComponent,
    canActivate: [RouteAccessService],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(EducationRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule,
  ]
})
export class EducationRoutingModule { }
