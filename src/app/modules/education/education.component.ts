import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

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
  dateFromUrl: string;
  subscription: Subscription;
  subRoute: Subscription;
  subRouteAndData: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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



  loadData(dateRange) {
    this.subscription = this.calService.getEvent(dateRange.dateFrom, dateRange.dateTo).subscribe(
      (data: any) => {
        this.eventsData = data;
        // this.selectedDayEvent = this.getSelectedFromUrl(data, this.router.);
      },
      err => this.alert.open("Не удалось получить данные по обучению :(")
    );
    this.subRoute = this.route
      .queryParams
      .subscribe(params => {
        this.dateFromUrl = params['date'];
      });

    this.subRouteAndData = Observable.combineLatest(
      this.calService.getEvent(dateRange.dateFrom, dateRange.dateTo),
      this.route.queryParams
    ).subscribe(
      (data) => {
        this.selectedDayEvent = this.getSelectedFromUrl(data[0], data[1].date)
      }
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
        this.selectedDayEvent = [...this.selectedDayEvent, newEvent];
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
      // return EDU;
      return ALL;
    } else if (url === STORECHECK) {
      return SCH;
    } else {
      return ALL;
    }
  }

  getSelectedFromUrl(events: Array<Event>, date: string) {
    return events.filter((event) => {
      const d1 = new Date(event.date);
      const d2 = new Date(date);
      return d1.getDate() === d2.getDate();
    });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subRoute.unsubscribe();
    this.subRouteAndData.unsubscribe();
  }
}



