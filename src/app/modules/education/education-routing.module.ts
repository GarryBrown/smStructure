import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { RouteAccessService } from '../../core';

import { EducationComponent } from './education.component';
import { StepsComponent } from './components/steps/steps.component';
import { EduResultComponent } from './components/edu-result/edu-result.component';
import { JournalComponent } from './components/journal/journal.component';
import { EduResultPopupsComponent } from "./components/edu-result-popups/edu-result-popups.component";

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
  {
    path: 'edu-result',
    component: EduResultComponent,
    canActivate: [RouteAccessService],
  },
  {
    path: 'journal',
    component: JournalComponent,
    canActivate: [RouteAccessService],
  },
  {
    path: 'result/:id/details',
    component: EduResultPopupsComponent,
    outlet: 'popup',
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(EducationRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class EducationRoutingModule { }
