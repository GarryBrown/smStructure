import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { CouseDialogComponent } from './couse-dialog/couse-dialog.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  public order: any;

  constructor(
    public dialogRef: MdDialogRef<OrderDetailComponent>,
    private dialog: MdDialog
    ) { }

  ngOnInit() {
    console.log(this.order);
  }


  openCouse() {
    let couseDialogRef = this.dialog.open(CouseDialogComponent, {
      data: 'На складе закончился товар, выбранной номенклатуры. Пожалуйста ожидайте и следите за статусом заказа.',
    });
  }

}

