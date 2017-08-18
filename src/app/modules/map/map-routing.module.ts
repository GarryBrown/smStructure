import { NgModule, Injectable } from '@angular/core';
import { Resolve, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { MapComponent } from "./map.component";
import { RouteAccessService } from "../../core";


const mapRoutes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    canActivate: [RouteAccessService],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mapRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class MapRoutingModule { }
