import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ALL, SCH, EDU, TEACHING, STORECHECK } from './education.constants';
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
  newEvents: any;
  header: string;
  constructor(
    private router: Router,
    public dialog: MdDialog,
    private activatedRoute: ActivatedRoute,
    public educationService: EducationService,
  ) {
    this.newEvents = null;
    this.selectedDayEvent = [];
    this.access = this.setStateByRoute(this.router.url);
    this.header = this.educationService.getHeader(this.access);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  onSelectDay(event) {
    this.selectedDayEvent = event;
  }

  openDialog(event?: any) {
    let config = new MdDialogConfig();
    config.height = '90%';
    config.width = '50%';
    let dialogRef = this.dialog.open(EduConfigComponent, config);
    let eventObj = event ? event : this.access === EDU ? this.createEDUEvent(TEACHING) : this.createEDUEvent(STORECHECK);
    dialogRef.componentInstance.event = eventObj;
    dialogRef.componentInstance.access = this.access;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedDayEvent = result;
      }
      this.newEvents = {
        id: 8,
        type: "teaching",
        date: "2017-07-19T17:47:56.873+03:00",
        route: {
          id: 214,
          isActive: true,
          code: "00000000828",
          description: "PS101",
          staff: null
        },
        staff: {
          id: 49,
          isActive: true,
          code: "CB-003714",
          description: "Обмачевская Ирина Николаевна"
        }
      }

    });
  }

  setStateByRoute(url: string): string {
    url = url.slice(1, url.length);
    if (url === 'edu') {
      return EDU;
    } else if (url === STORECHECK) {
      return SCH;
    } else {
      return ALL;
    }
  }

  createEDUEvent(type: string) {
    let event = new Event();
    event.type = type;
    return event;
  }

}



