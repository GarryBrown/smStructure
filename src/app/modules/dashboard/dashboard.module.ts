import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared/shared.module';
import { DateUtilService } from '../../core/utils/date-util.service';
/* test api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { DashboardRoutingModule, UserResolvePagingParams } from './dashboard-routing.module';
/*service */
import { DashboardService } from './dashboard.service';
import { DashboardPopupService } from './dialogs/dashboard-popup.service';
/* components */
import { DashboardComponent } from './dashboard.component';
import { OrderDetailComponent } from './dialogs/order-detail.component';
import { OrderPopupComponent } from './dialogs/order-popup.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DatepickerModule,
    DashboardRoutingModule,
    SharedModule,

    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),

  ],
  declarations: [DashboardComponent, OrderPopupComponent, OrderDetailComponent],
  entryComponents: [OrderDetailComponent],
  providers: [DashboardService, DashboardPopupService, DateUtilService, UserResolvePagingParams, ]
})
export class DashboardModule { }
