import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* shared */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared';
/* route */
import { ProfileRoutesModule } from './profile-routing.module';
/* components */
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { PasswordComponent } from './profile-detail/password/password.component';
import { AvatarComponent } from './profile-detail/avatar/avatar.component';

import { CustomersComponent } from './customers/customers.component';
import { CustomerPopupComponent } from './customers/dialogs/customer-popup.component';
import { CustomerDialogComponent } from './customers/dialogs/customer-dialog/customer-dialog.component';
import { CustomerDetailComponent } from './customers/dialogs/customer-detail/customer-detail.component';
/*service */
import { CustomersService } from './customers/customers.service';

import { AutocompliteCustomerComponent } from './customers/autocomplite-customer/autocomplite-customer.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutesModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProfileComponent,
    ProfileDetailComponent,
    PasswordComponent,
    AvatarComponent,
    CustomersComponent,
    CustomerPopupComponent,
    CustomerDialogComponent,
    CustomerDetailComponent,
    AutocompliteCustomerComponent,
  ],
  entryComponents: [
    CustomerPopupComponent,
    CustomerDialogComponent,
    CustomerDetailComponent,
    AutocompliteCustomerComponent],
  providers: [
    CustomersService,
  ]
})
export class ProfileModule { }
