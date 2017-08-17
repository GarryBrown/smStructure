import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { ResultPopupService } from '../../services';
import { StepsComponent } from '../steps/steps.component';

@Component({
  selector: 'app-edu-result-popups',
  template: '',
  styleUrls: ['./edu-result-popups.component.scss'],
  providers: [ResultPopupService],
  encapsulation: ViewEncapsulation.None
})
export class EduResultPopupsComponent implements OnInit {

  modalRef: any;
  routeSub: any;

  constructor(
    public resultPopup: ResultPopupService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.modalRef = this.resultPopup.open(StepsComponent, params['id']);
    });
  }

}
