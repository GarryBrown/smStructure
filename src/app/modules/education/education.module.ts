import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'angular2-material-datepicker'
/*share*/
import { SharedModule, AlertBarComponent, UtilsService } from '../../shared';
import { DateUtilService } from '../../core';
import { MarkdownModule } from 'angular2-markdown';
/* test api */
import { environment } from '../../app.constants';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { EducationRoutingModule } from './education-routing.module';
/*service */
import { KpiTableService } from './kpi-table/kpi-table.service';
import { EducationService } from './education.service';
import { EduCalendarService } from './edu-calendar/edu-calendar.service';
import { StepsService } from './steps/steps.service';
import { EduConfigService } from './edu-config/edu-config.service';
import { EduResultService } from './edu-result/edu-result.service';
import { ResultService } from "app/modules/education/steps/result/result.service";
/* components */
import { EducationComponent } from './education.component';
import { EduCalendarComponent } from './edu-calendar/edu-calendar.component';
import { EduDayCalendarComponent } from './edu-calendar/edu-day-calendar/edu-day-calendar.component';
import { ListDayEventsComponent } from './list-day-events/list-day-events.component';
import { StepsComponent } from './steps/steps.component';
import { IntroductionComponent } from './steps/introduction/introduction.component';
import { StepComponent } from './steps/step/step.component';
import { EduConfigComponent } from './edu-config/edu-config.component';
import { QuestionComponent } from './steps/step/question/question.component';
import { EduResultComponent } from './edu-result/edu-result.component';
import { KpiTableComponent } from './kpi-table/kpi-table.component';
import { PlanDetailRowComponent } from './kpi-table/plan-detail-row/plan-detail-row.component'
import { ResultComponent } from './steps/result/result.component';


let myTestApiModule = [];
if (!environment.production) {
  myTestApiModule.push(InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }));
}

@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule,
    ...myTestApiModule,
    MarkdownModule,
    DatepickerModule
  ],
  declarations: [
    EducationComponent,
    EduCalendarComponent,
    EduDayCalendarComponent,
    ListDayEventsComponent,
    StepsComponent,
    IntroductionComponent,
    StepComponent,
    EduConfigComponent,
    QuestionComponent,
    EduResultComponent,
    KpiTableComponent,
    PlanDetailRowComponent,
    ResultComponent
  ],
  entryComponents: [
    EduConfigComponent,
  ],
  providers: [
    EducationService,
    KpiTableService,
    EduCalendarService,
    EduConfigService,
    StepsService,
    EduResultService,
    UtilsService,
    AlertBarComponent,
    ResultService
  ]
})
export class EducationModule { }
