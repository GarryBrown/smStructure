import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*share*/
import { SharedModule } from '../../shared/shared.module';
/* route */
import { StoresRoutingModule } from './stores-routing.module';

/* components */
import { StoresComponent } from './stores.component';
import { StoresPopupComponent } from './dialogs/stores-popup.component';
import { StoresDetailComponent } from './dialogs/stores-detail/stores-detail.component';
import { StoresDialogComponent } from './dialogs/stores-dialog/stores-dialog.component';
import { AutocompliteAddressComponent } from './autocomplite-address/autocomplite-address.component';
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
    StoresDialogComponent,
    AutocompliteAddressComponent
    ],
  entryComponents: [
    StoresDetailComponent,
    StoresDialogComponent,
    AutocompliteAddressComponent
    ],
  providers: [StoresService]
})
export class StoresModule { }
