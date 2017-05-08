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
import { OrdersRoutingModule, UserResolvePagingParams } from './kpi-routing.module';
/*service */
import { KPIService } from './kpi.service';
import { OrdersPopupService } from './dialogs/orders-popup.service';
/* components */
import { KPIComponent } from './kpi.component';
import { OrderDetailComponent } from './dialogs/order-detail.component';
import { OrderPopupComponent } from './dialogs/order-popup.component';
import { PlanChartComponent } from "app/components/planChart/plan-chart.component";


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DatepickerModule,
    OrdersRoutingModule,
    SharedModule,

    InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),

  ],
  declarations: [KPIComponent, OrderPopupComponent, OrderDetailComponent, PlanChartComponent],
  entryComponents: [OrderDetailComponent, PlanChartComponent],
  providers: [KPIService, OrdersPopupService, DateUtilService, UserResolvePagingParams, ]
})
export class KPIModule { }
