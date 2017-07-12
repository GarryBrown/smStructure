import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*share*/
import { SharedModule, UtilsService } from '../../shared';
import { DateUtilService } from '../../core';
import { MarkdownModule } from 'angular2-markdown';
/* test api */
import { environment } from '../../app.constants';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { EducationRoutingModule } from './education-routing.module';
/*service */

import { EducationService } from './education.service';
import { EduCalendarService } from './edu-calendar/edu-calendar.service';
import { StepsService } from './steps/steps.service';
import { EduConfigService } from './edu-config/edu-config.service';
import { EduResultService } from './edu-result/edu-result.service';
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
    MarkdownModule
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
    ],
  entryComponents: [
    EduConfigComponent,
    ],
  providers: [
    EducationService,
    EduCalendarService,
    EduConfigService,
    StepsService,
    EduResultService,
    UtilsService,
  ]
})
export class EducationModule { }
