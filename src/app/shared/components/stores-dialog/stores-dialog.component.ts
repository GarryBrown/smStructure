import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MdAutocompleteModule } from '@angular/material';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { StoresService } from '../../services/stores.service';
import { DaDataService } from '../../services/da-data.service';
import { Store, Customer } from '../../../models';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';

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
    { id: 1, shortDescription: 'Nike', description: 'Nike Official', inn: '123', kpp: '77777', address: 'Woooooowoow' },
    { id: 2, shortDescription: 'Jordan',  description: 'Nike Official', inn: '123', kpp: '77777', address: 'Woooooowoow' },
    { id: 3, shortDescription: 'Culture',  description: 'Nike Official', inn: '123', kpp: '77777', address: 'Woooooowoow' }
  ];

  stateCtrl: FormControl;
  stateCtrl1: FormControl;
  filteredStates: Observable<any[]>;

  constructor(
    public dialogRef: MdDialogRef<StoresDialogComponent>,
    public dialog: MdDialog,
    private storesService: StoresService,
    private daData: DaDataService) {
    this.isDisableForm = true;
    this.stateCtrl = new FormControl({ value: '', disabled: this.isDisableForm });
    this.stateCtrl1 = new FormControl({ value: '', disabled: this.isDisableForm });
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith('')
      .filter(val => val.length >= 1)
      .flatMap(inputString => this.daData.queryAddress({ query: inputString }));

      
  }


  ngOnInit() {
    this.isSaving = false;
    console.log(this.store);
  }


  displayFn(obj): any {
    console.log(obj);
    return obj.value;
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
    if (!this.isDisableForm) {
      this.stateCtrl.enable();
      this.stateCtrl1.enable();
    } else {
      this.stateCtrl.disable();
      this.stateCtrl1.disable();
    }

    console.log(this.stateCtrl);
  }

  ngOnDestroy() { }


  openAddCustomer(customer?) {
    if (!customer) {
      customer = new Customer();
    }
    
    let dialogRef = this.dialog.open(CustomersDialogComponent, {
      height: '80%',
      width: '70%',
    });
    
    dialogRef.componentInstance.customer = customer;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`result ${result}`);
      }

    });
  }

}


