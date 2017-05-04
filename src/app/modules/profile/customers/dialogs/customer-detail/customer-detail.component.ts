import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  public store: any;

  constructor(public dialogRef: MdDialogRef<CustomerDetailComponent>) { }

  ngOnInit() {
  }

}
