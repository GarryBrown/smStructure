import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { AdminPopupService } from './admin-popup.service';



@Component({
  selector: 'admin-popup',
  template: '',
  providers: [AdminPopupService]
})
export class AdminPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;

  constructor (
    public adminPopup: AdminPopupService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {

      if (this.router.url.indexOf('detail') !== -1) {
       this.modalRef = this.adminPopup.open(AdminDetailComponent, params['login']);
      } else {
        if (params['login']) {
          this.modalRef = this.adminPopup.open(AdminDialogComponent, params['login']);
        } else {
          this.modalRef = this.adminPopup.open(AdminDialogComponent);
        }
      }

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}/**
 * Created by demyanyuk.iv on 03.03.2017.
 */
