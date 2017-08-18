import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule, ConfirmComponent, OrderBy } from '../../shared';
import { DateUtilService } from '../../core';
/* route */
import { OrdersRoutingModule, UserResolvePagingParams } from './kpi-routing.module';
/*service */
import { KPIService, PlanDetailService, ReportConfigService } from './services';
/* components */
import { PlanDetailComponent } from "./components/plan-detail/plan-detail.component";
import { PlanDetailRowComponent } from "./components/plan-detail/plan-detail-row/plan-detail-row.component";
import { FilterbarComponent } from "./components/filterbar/filterbar.component";
import { ReportConfigComponent } from './components/report-config/report-config.component';
import { ReportComponent } from './components/report-config/report/report.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListFieldsComponent } from './components/list-fields/list-fields.component';



@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    OrdersRoutingModule,
    SharedModule,
  ],
  declarations: [
    PlanDetailRowComponent,
    PlanDetailComponent,
    ReportConfigComponent,
    ReportComponent,
    FilterbarComponent,
    ListFieldsComponent,
    CheckboxComponent,
    //OrderBy,
    ConfirmComponent
  ],
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
