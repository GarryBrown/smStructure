import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { StoresService, StoresDialogComponent } from '../../../../shared';
import { Store } from '../../../../models';

@Injectable()
export class ListShopsService {

  store: Store;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private storesService: StoresService
  ) { }

  public open(id?: number) {

    if (id) {
      this.storesService.find(id)
        .subscribe(store => {
          console.log(store);
          this.bindDialog(store);
        });
    } else {
      console.log(new Store());
      this.bindDialog(new Store());
    }
  }


  bindDialog(store?: any) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(StoresDialogComponent, config);

    dialogRef.componentInstance.store = store;
    dialogRef.componentInstance.isDisableForm = false;

    dialogRef.afterClosed().subscribe(res => {
      console.log('closed');
    });

    return dialogRef;
  }



}
