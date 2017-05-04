import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { AdminDetailComponent } from './admin-detail.component';
import { AdminPopupService } from './admin-popup.service';



@Component({
  selector: 'order-popup',
  template: ''
})
export class AdminPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;

  constructor (
    public dashboardPopup: AdminPopupService,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.modalRef = this.dashboardPopup.open(AdminDetailComponent, params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}/**
 * Created by demyanyuk.iv on 03.03.2017.
 */
