import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { CustomersService } from '../customers.service';
import { Customer } from '../../../../models';


@Injectable()
export class CustomerPopupService {
 customer: Customer;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private customerService: CustomersService
  ) { }

  public open(component: any, id?: number) {

      if (id) {
        this.customerService.find(id)
          .subscribe(customer => {
            this.bindDialog(component, customer.data);
        });
      } else {
        this.bindDialog(component, new Customer());
      }
  }

  bindDialog(component, customer?: any) {
    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.customer = customer;
    dialogRef.afterClosed().subscribe(res => {
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    });
    return dialogRef;
  }
}
