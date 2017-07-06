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
import { PlanDetailService } from './plan-detail/plan-detail.service';
import { ReportConfigService } from './report-config/report-config.service';
/* components */
import { KPIComponent } from './kpi.component';
import { PlanChartComponent } from "app/components/planChart/plan-chart.component";
import { PlanDetailComponent } from "app/modules/kpi/plan-detail/plan-detail.component";
import { PlanDetailRowComponent } from "app/modules/kpi/plan-detail/plan-detail-row/plan-detail-row.component";
import { FilterbarComponent } from "./filterbar/filterbar.component";
import { ReportConfigComponent } from './report-config/report-config.component';
import { ReportComponent } from './report-config/report/report.component';
import { CheckboxComponent } from './filterbar/checkbox/checkbox.component';


import { environment } from '../../app.constants';
import { KpiChartComponent } from './kpi-chart/kpi-chart.component';
import { ListFieldsComponent } from './list-fields/list-fields.component';

let myTestApiModule = [];
if (!environment.production) {
  myTestApiModule.push(InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }));
}


@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    OrdersRoutingModule,
    SharedModule,
    ...myTestApiModule,
  ],
  declarations: [
    KPIComponent,
    PlanDetailRowComponent,
    PlanDetailComponent,
    PlanChartComponent,
    ReportConfigComponent,
    ReportComponent,
    FilterbarComponent,
    KpiChartComponent,
    ListFieldsComponent,
    CheckboxComponent],
  entryComponents: [
    PlanDetailRowComponent,
    PlanChartComponent,
    PlanDetailComponent,
    ReportConfigComponent,
    FilterbarComponent,
    CheckboxComponent],
  providers: [
    KPIService,
    ReportConfigService,
    PlanDetailService,
    DateUtilService,
    UserResolvePagingParams,
  ]
})
export class KPIModule { }
