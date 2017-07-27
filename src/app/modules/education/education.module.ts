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
import {
  KpiTableService, EducationService,
  EduCalendarService,
  StepsService,
  EduConfigService,
  EduResultService,
  ResultService
} from './services';
/* components */
import { EducationComponent } from './education.component';
import { EduCalendarComponent } from './components/edu-calendar/edu-calendar.component';
import { EduDayCalendarComponent } from './components/edu-calendar/edu-day-calendar/edu-day-calendar.component';
import { ListDayEventsComponent } from './components/list-day-events/list-day-events.component';
import { StepsComponent } from './components/steps/steps.component';
import { IntroductionComponent } from './components/steps/introduction/introduction.component';
import { StepComponent } from './components/steps/step/step.component';
import { EduConfigComponent } from './components/edu-config/edu-config.component';
import { QuestionComponent } from './components/steps/step/question/question.component';
import { EduResultComponent } from './components/edu-result/edu-result.component';
import { KpiTableComponent } from './components/kpi-table/kpi-table.component';
import { PlanDetailRowComponent } from './components/kpi-table/plan-detail-row/plan-detail-row.component'
import { ResultComponent } from './components/steps/result/result.component';


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
