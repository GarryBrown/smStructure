import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { StoresDetailComponent } from './stores-detail/stores-detail.component';
import { StoresDialogComponent } from './stores-dialog/stores-dialog.component';
import { StoresPopupService } from './stores-popup.service';



@Component({
  selector: 'order-popup',
  template: '',
  providers: [StoresPopupService]
})
export class StoresPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;


  constructor (
    public storePopup: StoresPopupService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log('ProfileStoresPopupComponent ngOnInit ');
    this.routeSub = this.route.params.subscribe(params => {

      if (this.router.url.indexOf('detail') !== -1) {
       console.log('this is details!!');
       this.modalRef = this.storePopup.open(StoresDetailComponent, params['id']);
      } else {
        console.log('this is not details!!');
        if (params['id']) {
          this.modalRef = this.storePopup.open(StoresDialogComponent, params['id']);
        } else {
          this.modalRef = this.storePopup.open(StoresDialogComponent);
        }
      }

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    console.log('ProfileStoresPopupComponent OnDestroy ');
  }
}
/**
 * Created by demyanyuk.iv on 03.03.2017.
 */
