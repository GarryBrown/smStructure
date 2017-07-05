import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { EducationService } from './education.service';
import { EduConfigComponent } from './edu-config/edu-config.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedDayEvent: Array<any>;
  constructor(
    private router: Router,
    public dialog: MdDialog,
    private activatedRoute: ActivatedRoute,
    public educationService: EducationService,
  ) {
    this.selectedDayEvent = [];
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe;
  }

  onSelectDay(event) {
    this.selectedDayEvent = event;
  }

  openDialog(event?: any) {
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '70%';
    let dialogRef = this.dialog.open(EduConfigComponent, config);
    dialogRef.componentInstance.route = event ? event.route : [];
    dialogRef.componentInstance.staff = event ? event.route : [];
    dialogRef.afterClosed().subscribe(result => {
     console.log(result);
    });
  }

}



