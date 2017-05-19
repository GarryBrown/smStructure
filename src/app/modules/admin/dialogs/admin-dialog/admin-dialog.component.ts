import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../../../../models';

import { AdminService } from '../../admin.service';
import { ListShopsComponent } from '../list-shops/list-shops.component';
import { DeleteUtilsService } from '../../../../shared';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss'],
})
export class AdminDialogComponent implements OnInit, OnDestroy {
  isSaving: Boolean;
  public user: User;
  authorities: any[];
  languages: string[] = [
    'en',
    'ru'
  ];
  isDisableForm: boolean;

  constructor(
    public dialogRef: MdDialogRef<AdminDialogComponent>,
    public dialog: MdDialog,
    private adminService: AdminService,
    private deleteUtilsService: DeleteUtilsService 
  ) {
    this.authorities = ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_B2B'];
    this.isDisableForm = true;
  }


  ngOnInit() {
    this.isSaving = false;
  }

  clear() {
    this.dialogRef.close('Cancel');
  }

  save() {
    this.isSaving = true;
    if (this.user.id !== null) {
      this.adminService.update(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.adminService.create(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }
  }

  private onSaveSuccess(result) {
    this.isSaving = false;
    this.dialogRef.close(result);
  }

  private onSaveError() {
    this.isSaving = false;
  }


  setActive(active, prorerty) {
    this.user[prorerty] = active.isActive;
  }

  toggleIsDisableForm() {
    this.isDisableForm = !this.isDisableForm;
  }

  ngOnDestroy() { }

  openAddShop() {
    let dialogRef = this.dialog.open(ListShopsComponent, {
      height: '80%',
      width: '70%',
    });
    
    dialogRef.componentInstance.selectedStores = this.user.shops;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user.shops = result;
      }
      
    });
  }

  removeShop(id) {
    this.deleteUtilsService.removeById(this.user.shops, id)
      .then(
        (newList) => this.user.shops = newList,
        (err) => console.error('can\'t remove this shop from list')
      );
  }

}
