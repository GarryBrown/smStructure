import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes = [
  // Main redirect
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {
    path: '', component: SidebarComponent,
    outlet: 'sidebar'
  },
  // Handle all other routes
  //{path: '**',    redirectTo: '' }, //wtf!!?? It's break all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
