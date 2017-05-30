import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { StoresService } from '../stores.service';
import { Store } from '../../../models';


@Injectable()
export class StoresPopupService {
  store: Store;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private storesService: StoresService
  ) { }

  public open(component: any, id?: number) {

    if (id) {
      this.storesService.find(id)
        .subscribe(store => {
          console.log(store);
          this.bindDialog(component, store);
        });
    } else {
      this.bindDialog(component, new Store());
    }
  }


  bindDialog(component, store?: any) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.store = store;
    if (store.id === undefined) {
      dialogRef.componentInstance.isDisableForm = false;
      dialogRef.componentInstance.stateCtrl.enable();
      dialogRef.componentInstance.stateCtrl1.enable();
    }

    dialogRef.afterClosed().subscribe(res => {
      console.log('closed');
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }

}
