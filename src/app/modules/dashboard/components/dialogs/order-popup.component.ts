import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { OrderDetailComponent } from './order-detail.component';
import { DashboardPopupService } from '../../services/dashboard-popup.service';



@Component({
  selector: 'order-popup',
  template: ''
})
export class OrderPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;

  constructor (
    public dashboardPopup: DashboardPopupService,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.modalRef = this.dashboardPopup.open(OrderDetailComponent, params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}/**
 * Created by demyanyuk.iv on 03.03.2017.
 */
