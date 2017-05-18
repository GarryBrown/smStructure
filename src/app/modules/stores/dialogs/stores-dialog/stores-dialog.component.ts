import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Store } from '../../../../models/store.model';

import { StoresService } from '../../stores.service';
import { DaDataService } from '../../../../shared/services/da-data.service';

@Component({
  selector: 'app-stores-dialog',
  templateUrl: './stores-dialog.component.html',
  styleUrls: ['./stores-dialog.component.scss']
})
export class StoresDialogComponent implements OnInit, OnDestroy {
  isSaving: Boolean;
  public store: Store;
  isDisableForm: boolean;
  customers = [
    { id: 1, shortDescription: 'Nike' },
    { id: 2, shortDescription: 'Jordan' },
    { id: 3, shortDescription: 'Culture' }
  ];

  constructor(
    public dialogRef: MdDialogRef<StoresDialogComponent>,
    public dialog: MdDialog,
    private storesService: StoresService,
    private daData: DaDataService) {
      this.isDisableForm = true;
  }


  ngOnInit() {
    this.isSaving = false;
  }

  clear() {
    this.dialogRef.close('Cancel');
  }

  save() {
    console.log('save');
    console.log(this.store);
    this.isSaving = true;
    if (this.store.id !== undefined) {
      console.log('update');
      this.storesService.update(this.store).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      console.log('create');
      this.storesService.create(this.store).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }
  }

  private onSaveSuccess(result) {
    this.isSaving = false;
    this.dialogRef.close(result);
  }

  private onSaveError() {
    this.isSaving = false;
  }

  toggleIsDisableForm() {
    this.isDisableForm = !this.isDisableForm;
  }

  ngOnDestroy() { }


  openAddCustomer() {
    let dialogRef = this.dialog.open(AddCustomerComponent);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }

}



@Component({
  selector: 'app-add-customer',
  template: `
  <h1> Woooow </h1>`
})

export class AddCustomerComponent {
  constructor(public dialogRef: MdDialogRef<AddCustomerComponent>) { }
}