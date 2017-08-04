import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { environment } from '../../app.constants';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';

import { SalaryRoutingModule } from './salary-routing.module';


import { SalaryComponent } from './salary.component';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared';
import { DateUtilService } from '../../core';
import { OrderBy } from '../../shared';
import { ConfirmComponent } from '../../shared';
import { SalaryService } from "app/modules/salary/salary.service";
/* test api */
/* route */
/*service */
/* components */

let myTestApiModule = [];
if (!environment.production) {
  myTestApiModule.push(InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }));
}

@NgModule({
  imports: [
    CommonModule,
    SalaryRoutingModule,
    ...myTestApiModule,
    SharedModule
  ],
  declarations: [SalaryComponent],
  providers: [SalaryService]
})
export class SalaryModule { }
