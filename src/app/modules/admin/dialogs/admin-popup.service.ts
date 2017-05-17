import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { AdminService } from '../admin.service';
import { User } from '../../../models';


@Injectable()
export class AdminPopupService {
  order: any;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private adminService: AdminService
  ) { }

  public open(component: any, login?: string) {

    if (login) {
      this.adminService.find(login)
        .subscribe(user => {
          this.bindDialog(component, user);
        });
    } else {
      this.bindDialog(component, new User());
    }

  }

  bindDialog(component, user: any) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(component, config);

     user.shops = [
      { address: "г. Краснодар, ул. Стахановская д. 55", description: 'Табрис'},
      { address: "г. Краснодар, ул. Красная д. 3", description: 'Ашан'},
      { address: "г. Ростов, ул. Ленина д. 86", description: 'Магнит'}
    ];
    dialogRef.componentInstance.user = user;



    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }

}
