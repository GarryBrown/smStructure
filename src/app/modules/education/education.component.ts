import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Subscription } from "rxjs/Subscription";

import { AlertBarComponent } from '../../shared';
import { ALL, SCH, EDU, TEACHING, STORECHECK } from './education.constants';
import { Event } from '../../models';

import { EducationService, EduConfigService, EduCalendarService } from './services';
import { EduConfigComponent } from './components/edu-config/edu-config.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [AlertBarComponent]
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedDayEvent: Array<Event>;
  access: string;
  newEvents: any;
  header: string;
  eventsData: Array<any>;
  subscription: Subscription;

  constructor(
    private router: Router,
    public dialog: MdDialog,
    public educationService: EducationService,
    public eduConfigService: EduConfigService,
    private calService: EduCalendarService,
    private alert: AlertBarComponent
  ) {
    this.newEvents = null;
    this.selectedDayEvent = [];
    this.access = this.setStateByRoute(this.router.url);
    this.header = this.educationService.getHeader(this.access);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadData(dateRange) {
    console.log('loadData')
    this.subscription = this.calService.getEvent(dateRange.dateFrom, dateRange.dateTo).subscribe(
      (data: any) => {
        this.eventsData = data;
      },
      err => this.alert.open("Не удалось получить данные по обучению :(")
    )
  }

  onSelectDay(events) {
    this.selectedDayEvent = events;
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
        let newEvent: Event = new Event(
          result.id, result.type,
          result.route, result.route.staff,
          {}, result.dateOfStart);
        this.selectedDayEvent = [newEvent];
        this.eventsData = this.updateEvent(newEvent);
      }
    });
  }

  updateEvent(event) {
    return [...this.eventsData, event]
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

  deleteEvent(event) {
    this.eduConfigService.delete(event.id).subscribe(
      succes => {
        this.eventsData = this.eventsData.filter(ev => ev.id !== event.id)
        this.selectedDayEvent = [];
        this.alert.open('Событие удалено.')
      },
      error => this.alert.open('Ошибка! Событие не удалено')
    )
  }
}



