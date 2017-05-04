import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AccountsService } from './account.service';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountsService]
})
export class AccountsComponent implements OnInit {
  stores: any[];

  constructor(
    private storesService: AccountsService,
    translate: TranslateService
  ) { 
    // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('ru');
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.storesService.query()
    .subscribe(
        (res: Response) => this.onSuccess(res.json()),
        (res: Response) => this.onError(res.json())
    );
  }

  private onSuccess (data) {
    console.log(data.data);
    this.stores = data.data;
  }

  private onError (error) {
    console.log('On error things');
  }

}
