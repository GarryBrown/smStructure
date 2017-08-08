import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Customer } from '../../../../../models';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomersService } from '../../customers.service';
import { DaDataService } from '../../../../../shared/services/da-data.service';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit, OnDestroy {
  isSaving: Boolean;
  public customer: Customer;
  private daDataList: any;


  constructor(public dialogRef: MdDialogRef<CustomerDialogComponent>,
              private customerService: CustomersService,
              private daData: DaDataService) {

   }


  ngOnInit() {
    this.isSaving = false;
  }

  onSelectSug(sug) {
    this.customer.inn = sug.data.inn;
    this.customer.description = sug.unrestricted_value;
    this.customer.shortDescription = sug.value;
    this.customer.address = sug.data.address.value;
  }

  clear() {
        this.dialogRef.close('Cancel');
  }

  save() {
        this.isSaving = true;
        if (this.customer.id !== undefined ) {
            this.customerService.update(this.customer).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.customerService.create(this.customer).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        }
  }

  private onSaveSuccess(result) {
      this.isSaving = false;
      this.dialogRef.close(result);
  }

    private onSaveError() {
        this.isSaving = false;
    }

  ngOnDestroy(){}

}
