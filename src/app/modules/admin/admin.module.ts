import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared';
import { DateUtilService } from '../../core';
/* test api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { AdminRoutingModule, UserResolvePagingParams } from './admin-routing.module';
/*service */
import { AdminService } from './admin.service';
import { AdminPopupService } from './dialogs/admin-popup.service';
/* components */
import { AdminComponent } from './admin.component';
import { AdminDetailComponent } from './dialogs/admin-detail/admin-detail.component';
import { AdminDialogComponent } from './dialogs/admin-dialog/admin-dialog.component';
import { AdminPopupComponent } from './dialogs/admin-popup.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DatepickerModule,
    AdminRoutingModule,
    SharedModule,

    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),

  ],
  declarations: [AdminComponent, AdminPopupComponent, AdminDetailComponent, AdminDialogComponent],
  entryComponents: [AdminDetailComponent, AdminDialogComponent],
  providers: [AdminService, AdminPopupService, DateUtilService, UserResolvePagingParams, ]
})
export class AdminModule { }
