import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*share*/
import { SharedModule } from '../../shared/shared.module';
/* route */
import { AccountsRoutingModule } from './account-routing.module';

/* components */
import { AccountsComponent } from './components/account/account.component';
/*service */
import { AccountsService } from './services/account.service';
import { ActivateComponent } from './components/activate/activate.component';
import { ActivateByEmailComponent } from './components/activate-by-email/activate-by-email.component';
import { ActivateByEmailService } from './services/activate-by-email.service';


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
