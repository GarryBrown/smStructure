import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';


const routes: Routes = [
  // Main redirect
  { path: '', redirectTo: 'kpi', pathMatch: 'full' },
  // Handle all other routes
  //{path: '**',    redirectTo: '' }, //wtf!!?? It's break all
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
