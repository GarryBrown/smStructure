import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { DashboardService } from '../dashboard.service';
import { OrderDetailComponent } from './order-detail.component';


@Injectable()
export class DashboardPopupService {
 order: any;
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  public open(component: any, id: number) {

    this.dashboardService.find(id)
      .subscribe(order => {
        this.bindDialog(component, order)
      });

  }

  bindDialog(component, order: any) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.order = order.data;


    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    });

    return dialogRef;
  }

}
