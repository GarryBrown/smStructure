import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SalaryRoutingModule } from './salary-routing.module';

/*shared*/
import { SharedModule } from '../../shared';

/*service */
import { SalaryService } from "app/modules/salary/salary.service";
/* components */
import { SalaryComponent } from './salary.component';
import { SalaryRowComponent } from './salary-row/salary-row.component';

@NgModule({
  imports: [
    CommonModule,
    SalaryRoutingModule,
    SharedModule
  ],
  declarations: [SalaryComponent, SalaryRowComponent],
  // entryComponents: [SalaryRowComponent],
  providers: [SalaryService]
})
export class SalaryModule { }
