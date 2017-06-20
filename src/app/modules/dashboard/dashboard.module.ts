import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*share*/
import { DatepickerModule } from 'angular2-material-datepicker';
import { SharedModule } from '../../shared/shared.module';
import { DateUtilService } from '../../core/utils/date-util.service';
/* test api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../../in-mem-data-service';
/* route */
import { DashboardRoutingModule, UserResolvePagingParams } from './dashboard-routing.module';
/*service */
import { DashboardService } from './dashboard.service';
import { DashboardPopupService } from './dialogs/dashboard-popup.service';
/* components */
import { DashboardComponent } from './dashboard.component';
import { OrderDetailComponent } from './dialogs/order-detail.component';
import { OrderPopupComponent } from './dialogs/order-popup.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

/* library for Interceptor */
import { httpFactory } from '../../blocks/interceptor/http.provider';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NgbModule.forRoot(),
    DatepickerModule,
    DashboardRoutingModule,
    SharedModule,
    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),
    // users не показывается только из-за web-memory-api

  ],
  declarations: [DashboardComponent, OrderPopupComponent, OrderDetailComponent],
  entryComponents: [OrderDetailComponent],
  providers: [
    {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }, 
    DashboardService, DashboardPopupService, DateUtilService, UserResolvePagingParams,
  ]
})
export class DashboardModule { }
