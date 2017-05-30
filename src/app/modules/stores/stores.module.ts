import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*share*/
import { SharedModule, StoresDialogComponent, CustomersDialogComponent } from '../../shared';
/* route */
import { StoresRoutingModule } from './stores-routing.module';

/* components */
import { StoresComponent } from './stores.component';
import { StoresPopupComponent } from './dialogs/stores-popup.component';
import { StoresDetailComponent } from './dialogs/stores-detail/stores-detail.component';

/*service */
import { StoresService } from './stores.service';




@NgModule({
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule,
  ],
  declarations: [
    StoresComponent,
    StoresPopupComponent,
    StoresDetailComponent,
    ],
  entryComponents: [
    StoresDetailComponent,
    StoresDialogComponent,
    CustomersDialogComponent,
    ],
  providers: [StoresService]
})
export class StoresModule { }
