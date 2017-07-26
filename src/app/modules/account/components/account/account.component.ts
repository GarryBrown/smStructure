import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AccountsService } from '../../services/account.service';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountsService]
})
export class AccountsComponent {
  

}
