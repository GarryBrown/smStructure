import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared';
import { DateUtilService } from '../../core';
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
import { PlanDetailTOComponent } from "app/modules/kpi/plan-detail/plan-detail.component";
import { PlanDetailRowComponent } from "app/modules/kpi/plan-detail/plan-detail-row/plan-detail-row.component";

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    OrdersRoutingModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),
  ],
  declarations: [KPIComponent, PlanDetailRowComponent,  OrderPopupComponent, PlanDetailTOComponent, OrderDetailComponent, PlanChartComponent],
  entryComponents: [OrderDetailComponent, PlanDetailRowComponent, PlanChartComponent, PlanDetailTOComponent],
  providers: [KPIService, OrdersPopupService, DateUtilService, UserResolvePagingParams, ]
})
export class KPIModule { }