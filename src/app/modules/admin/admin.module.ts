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
import { AdminRoutingModule, UserResolvePagingParams } from './admin-routing.module';
/*service */
import { AdminService } from './admin.service';
import { AdminPopupService } from './dialogs/admin-popup.service';
import { DeleteUtilsService } from '../../shared';
/* components */
import { AdminComponent } from './admin.component';
import { AdminDetailComponent } from './dialogs/admin-detail/admin-detail.component';
import { AdminDialogComponent } from './dialogs/admin-dialog/admin-dialog.component';
import { AdminPopupComponent } from './dialogs/admin-popup.component';
import { ListShopsComponent } from './dialogs/list-shops/list-shops.component';


@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    AdminRoutingModule,
    SharedModule,

    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),

  ],
  declarations: [
    AdminComponent,
    AdminPopupComponent,
    AdminDetailComponent,
    AdminDialogComponent,
    ListShopsComponent],
  entryComponents: [
    AdminDetailComponent,
    AdminDialogComponent,
    ListShopsComponent],
  providers: [
    AdminService,
    AdminPopupService,
    DateUtilService,
    UserResolvePagingParams,
    DeleteUtilsService]
})
export class AdminModule { }
