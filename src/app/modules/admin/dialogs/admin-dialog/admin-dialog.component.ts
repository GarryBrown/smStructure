import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../../../../models';

import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit, OnDestroy {
  isSaving: Boolean;
  public user: User;
  authorities: any[];
  languages: string[] = [
    'en',
    'ru'
  ];

  constructor(public dialogRef: MdDialogRef<AdminDialogComponent>,
    private adminService: AdminService, ) {
    this.authorities = ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_B2B'];
  }


  ngOnInit() {
    this.isSaving = false;
  }

  clear() {
    this.dialogRef.close('Cancel');
  }

  save() {
    console.log('save');
    console.log(this.user);
    console.log(this.user.id);
    this.isSaving = true;
    if (this.user.id !== null) {
      console.log('update');
      this.adminService.update(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      console.log('create');
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


  setActive(active) {
    console.log(active);
    this.user.activated = active.checked;
  }

  ngOnDestroy() { }

}
