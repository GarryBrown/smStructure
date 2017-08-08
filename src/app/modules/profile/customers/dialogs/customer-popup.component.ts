import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { CustomerPopupService } from './customer-popup.service';



@Component({
  selector: 'order-popup',
  template: '',
  providers: [CustomerPopupService]
})
export class CustomerPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;

  constructor (
    public customerPopup: CustomerPopupService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {

      if (this.router.url.indexOf('detail') !== -1) {
       this.modalRef = this.customerPopup.open(CustomerDetailComponent, params['id']);
      } else {
        if (params['id']) {
          this.modalRef = this.customerPopup.open(CustomerDialogComponent, params['id']);
        } else {
          this.modalRef = this.customerPopup.open(CustomerDialogComponent);
        }
      }

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
/**
 * Created by demyanyuk.iv on 03.03.2017.
 */
