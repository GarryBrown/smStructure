import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*shared*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared';
import { DateUtilService } from '../../core';
/* route */
import { DashboardRoutingModule, UserResolvePagingParams } from './dashboard-routing.module';
/*service */
import { DashboardService } from './services/dashboard.service';
import { DashboardPopupService } from './services/dashboard-popup.service';
/* components */
import { DashboardComponent } from './dashboard.component';
import { OrderDetailComponent } from './components/dialogs/order-detail.component';
import { OrderPopupComponent } from './components/dialogs/order-popup.component';

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardComponent, OrderPopupComponent, OrderDetailComponent],
  entryComponents: [OrderDetailComponent],
  providers: [
    DashboardService, DashboardPopupService, DateUtilService, UserResolvePagingParams,
  ]
})
export class DashboardModule { }
