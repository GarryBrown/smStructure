import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule, ConfirmComponent, OrderBy } from '../../shared';
import { DateUtilService } from '../../core';

/* test api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { OrdersRoutingModule, UserResolvePagingParams } from './kpi-routing.module';
/*service */
import { KPIService, PlanDetailService, ReportConfigService } from './services';
/* components */
import { KPIComponent } from './kpi.component';
import { PlanDetailComponent } from "./components/plan-detail/plan-detail.component";
import { PlanDetailRowComponent } from "./components/plan-detail/plan-detail-row/plan-detail-row.component";
import { FilterbarComponent } from "./components/filterbar/filterbar.component";
import { ReportConfigComponent } from './components/report-config/report-config.component';
import { ReportComponent } from './components/report-config/report/report.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { environment } from '../../app.constants';
import { KpiChartComponent } from './components/kpi-chart/kpi-chart.component';
import { ListFieldsComponent } from './components/list-fields/list-fields.component';

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
    ReportConfigComponent,
    ReportComponent,
    FilterbarComponent,
    KpiChartComponent,
    ListFieldsComponent,
    CheckboxComponent,
    OrderBy,
    ConfirmComponent],
  entryComponents: [
    PlanDetailRowComponent,
    PlanDetailComponent,
    ReportConfigComponent,
    FilterbarComponent,
    CheckboxComponent,
    ConfirmComponent],
  providers: [
    KPIService,
    ReportConfigService,
    PlanDetailService,
    DateUtilService,
    UserResolvePagingParams,
  ],
})
export class KPIModule { }
