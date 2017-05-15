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
import { OrdersRoutingModule, UserResolvePagingParams } from './orders-routing.module';
/*service */
import { OrdersService } from './orders.service';
import { OrdersPopupService } from './dialogs/orders-popup.service';
/* components */
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './dialogs/order-detail.component';
import { OrderPopupComponent } from './dialogs/order-popup.component';


@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    OrdersRoutingModule,
    SharedModule,

    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),

  ],
  declarations: [OrdersComponent, OrderPopupComponent, OrderDetailComponent],
  entryComponents: [OrderDetailComponent],
  providers: [OrdersService, OrdersPopupService, DateUtilService, UserResolvePagingParams, ]
})
export class OrdersModule { }
