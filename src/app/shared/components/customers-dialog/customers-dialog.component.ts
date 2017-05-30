import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Customer } from '../../../models';
import { DaDataService } from '../../services/da-data.service';


@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.scss']
})
export class CustomersDialogComponent implements OnInit {
  public customer: Customer;
  autoComplite: FormControl;
  filteredStates: Observable<any[]>;

  constructor(
    public dialogRef: MdDialogRef<CustomersDialogComponent>,
    private daData: DaDataService,
    public dialog: MdDialog,
  ) {
    this.autoComplite = new FormControl({ value: '' });
    this.filteredStates = this.autoComplite.valueChanges
      .startWith('')
      .filter(val => val.length >= 2)
      .flatMap(inputString => this.daData.queryCustomers({ query: inputString }));
  }

  ngOnInit() {
  }

  displayFn(sug) {
    if (sug.value) {
      this.customer.inn = sug.data.inn;
      this.customer.kpp = sug.data.kpp;
    }
    return sug.value;

  }


  clear() {
    this.dialogRef.close('Cancel');
  }

}

