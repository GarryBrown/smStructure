import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { StoresService } from '../stores.service';
import { Store } from '../../../models/store.model';


@Injectable()
export class StoresPopupService {
 store: any;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private storesService: StoresService
  ) { }

  public open(component: any, id?: number) {

      if (id) {
        this.storesService.find(id)
          .subscribe(store => {
            this.bindDialog(component, store.data);
        });
      } else {
        console.log(new Store());
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


    dialogRef.afterClosed().subscribe(res => {
        console.log('closed');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    });

    return dialogRef;
  }

}
