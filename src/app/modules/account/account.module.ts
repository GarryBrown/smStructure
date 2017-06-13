import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*share*/
import { SharedModule } from '../../shared/shared.module';
/* route */
import { AccountsRoutingModule } from './account-routing.module';

/* components */
import { AccountsComponent } from './account.component';
/*service */
import { AccountsService } from './account.service';
import { ActivateComponent } from './activate/activate.component';
import { ActivateByEmailComponent } from './activate-by-email/activate-by-email.component';
import { ActivateByEmailService } from './activate-by-email/activate-by-email.service';


@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
  ],
  declarations: [
    AccountsComponent,
    ActivateComponent,
    ActivateByEmailComponent,

    ],
  entryComponents: [

    ],
  providers: [
    AccountsService,
    ActivateByEmailService]
})
export class AccountModule { }
