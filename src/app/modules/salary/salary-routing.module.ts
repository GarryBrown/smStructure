import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { RouteAccessService } from '../../core';
import { SalaryComponent } from './salary.component';

const SalaryRoutes: Routes = [
  {
    path: 'salary',
    component: SalaryComponent,
    canActivate: [RouteAccessService],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(SalaryRoutes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class SalaryRoutingModule { }
