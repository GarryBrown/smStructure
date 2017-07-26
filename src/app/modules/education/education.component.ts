import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ALL, SCH, EDU } from './education.constants';
import { Event } from '../../models';

import { EducationService } from './services/education.service';
import { EduConfigComponent } from './components/edu-config/edu-config.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedDayEvent: Array<any>;
  access: string;
  header: string;
  constructor(
    private router: Router,
    public dialog: MdDialog,
    private activatedRoute: ActivatedRoute,
    public educationService: EducationService,
  ) {
    this.selectedDayEvent = [];
    this.access = this.setStateByRoute(this.router.url);
    this.header = this.educationService.getHeader(this.access);
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
    config.height = '500px';
    config.width = '450px';
    let dialogRef = this.dialog.open(EduConfigComponent, config);
    dialogRef.componentInstance.event = event ? event : new Event();
    dialogRef.componentInstance.access = this.access;
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  setStateByRoute(url: string): string {
    url = url.slice(1, url.length);
    if (url === 'edu') {
      return EDU;
    } else if (url === 'store-check') {
      return SCH;
    } else {
      return ALL;
    }
  }

}



