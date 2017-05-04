import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*share*/
import { SharedModule } from '../../shared/shared.module';
/* route */
import { AccountsRoutingModule } from './account-routing.module';

/* components */
import { AccountsComponent } from './account.component';
// import { AccountsPopupComponent } from './dialogs/account-popup.component';
// import { AccountsDetailComponent } from './dialogs/account-detail/account-detail.component';
// import { AccountsDialogComponent } from './dialogs/account-dialog/account-dialog.component';
// import { AutocompliteAddressComponent } from './autocomplite-address/autocomplite-address.component';
/*service */
import { AccountsService } from './account.service';
import { ActivateComponent } from './activate/activate.component';


@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
  ],
  declarations: [
    AccountsComponent,
    ActivateComponent,
    // AccountsPopupComponent,
    // AccountsDetailComponent,
    // AccountsDialogComponent,
    // AutocompliteAddressComponent
    ],
  entryComponents: [
    // AccountsDetailComponent,
    // AccountsDialogComponent,
    // AutocompliteAddressComponent
    ],
  providers: [AccountsService]
})
export class AccountModule { }
