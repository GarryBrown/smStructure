import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { AdminService } from '../admin.service';
import { AdminDetailComponent } from './admin-detail.component';


@Injectable()
export class AdminPopupService {
 order: any;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private dashboardService: AdminService
  ) { }

  public open(component: any, login?: string) {

    this.dashboardService.find(login)
      .subscribe(user => {
        this.bindDialog(component, user)
      });

  }

  bindDialog(component, user: any) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.user = user;


    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    });

    return dialogRef;
  }

}
