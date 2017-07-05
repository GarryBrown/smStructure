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
import { EducationRoutingModule } from './education-routing.module';
/*service */
import { EducationService } from './education.service';
import { EduCalendarService } from './edu-calendar/edu-calendar.service';
/* components */
import { EducationComponent } from './education.component';




import { environment } from '../../app.constants';
import { EduCalendarComponent } from './edu-calendar/edu-calendar.component';
import { EduDayCalendarComponent } from './edu-calendar/edu-day-calendar/edu-day-calendar.component';


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
  ],
  declarations: [
    EducationComponent,
    EduCalendarComponent,
    EduDayCalendarComponent,
    ],
  entryComponents: [
    ],
  providers: [
    EducationService,
    EduCalendarService
  ]
})
export class EducationModule { }
