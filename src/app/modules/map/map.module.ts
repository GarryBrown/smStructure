import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapRoutingModule } from "./map-routing.module";
import { MapComponent } from "app/modules/map/map.component";


@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
  ],
  declarations: [MapComponent],
})
export class MapModule { }
