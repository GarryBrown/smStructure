import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared';
import { DateUtilService } from '../../core';
import { MarkdownModule } from 'angular2-markdown';
/* test api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { EducationRoutingModule } from './education-routing.module';
/*service */
import { EducationService } from './education.service';
import { EduCalendarService } from './edu-calendar/edu-calendar.service';
import { StepsService } from './steps/steps.service';
/* components */
import { EducationComponent } from './education.component';
import { EduCalendarComponent } from './edu-calendar/edu-calendar.component';
import { EduDayCalendarComponent } from './edu-calendar/edu-day-calendar/edu-day-calendar.component';
import { ListDayEventsComponent } from './list-day-events/list-day-events.component';
import { StepsComponent } from './steps/steps.component';
import { IntroductionComponent } from './steps/introduction/introduction.component';
import { StepComponent } from './steps/step/step.component';
import { EduConfigComponent } from './edu-config/edu-config.component';

import { environment } from '../../app.constants';





let myTestApiModule = [];
if (!environment.production) {
  myTestApiModule.push(InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }));
}


@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
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
    ],
  entryComponents: [
    EduConfigComponent,
    ],
  providers: [
    EducationService,
    EduCalendarService,
    StepsService,
  ]
})
export class EducationModule { }
