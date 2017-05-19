import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { AdminService } from '../admin.service';
import { User, Store } from '../../../models';


@Injectable()
export class AdminPopupService {
  shopsMock: any[];
  constructor(
    private dialog: MdDialog,
    private router: Router,
    private adminService: AdminService
  ) { this.setMock();}

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

    user.shops = this.shopsMock;
    dialogRef.componentInstance.user = user;



    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }




  setMock() {
    this.shopsMock = [ {
  "id" : 2,
  "uid" : "e0faedee1e1c45f896d13a1a4181b341",
  "isActive" : true,
  "description" : "Shop 2",
  "shortDescription" : "Shop 2",
  "phoneNumber" : "79181003456",
  "email" : "shop@locakhost",
  "acceptanceStartTime" : "18:00:00",
  "acceptanceEndTime" : "09:00:00",
  "customer" : {
    "id" : 0,
    "uid" : "",
    "isActive" : false,
    "inn" : "",
    "kpp" : "",
    "description" : "Нет данных",
    "shortDescription" : "Нет данных",
    "phoneNumber" : "",
    "email" : "",
    "typeOfCustomer" : {
      "id" : 0,
      "uid" : "00000000000000000000000000000000",
      "isActive" : false,
      "description" : "Нет данных"
    },
    "shops" : null,
    "addresses" : null
  },
  "typeOfShop" : {
    "id" : 1,
    "uid" : "Самообслуживание",
    "isActive" : true,
    "description" : "Самообслуживание"
  },
  "branch" : {
    "id" : 6,
    "uid" : "KR",
    "isActive" : true,
    "description" : "Краснодар",
    "shops" : null
  },
  "users" : null,
  "addresses" : null,
  "deliveryDays" : null,
  "typesOfPayments" : null,
  "typesOfSaleDocuments" : null
}, {
  "id" : 3,
  "uid" : "ea3671c1e6874e19bcb22cc98cc51e45",
  "isActive" : true,
  "description" : "Shop 2",
  "shortDescription" : "Shop 2",
  "phoneNumber" : "79181003456",
  "email" : "shop@locakhost",
  "acceptanceStartTime" : "18:00:00",
  "acceptanceEndTime" : "09:00:00",
  "customer" : 0,
  "typeOfShop" : 1,
  "branch" : 6,
  "users" : null,
  "addresses" : null,
  "deliveryDays" : null,
  "typesOfPayments" : null,
  "typesOfSaleDocuments" : null
} ];
  }
}
