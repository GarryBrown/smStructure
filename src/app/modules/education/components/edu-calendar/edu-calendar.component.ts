import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";

import { EduCalendarService } from '../../services';
import { AlertBarComponent } from "app/shared";

@Component({
  selector: 'app-edu-calendar',
  templateUrl: './edu-calendar.component.html',
  styleUrls: ['./edu-calendar.component.scss']
})
export class EduCalendarComponent implements OnInit, OnDestroy {
  @Output() selectDay: EventEmitter<Array<any>> = new EventEmitter();
  @Input() access: string;
  model: NgbDateStruct;
  subscription: Subscription;
  eventsData: Array<any>;
  date: any;
  dateFrom: any;
  dateTo: any;
  current: any;


  constructor(
    private calendar: NgbCalendar,
    private calService: EduCalendarService,
    private alert: AlertBarComponent
  ) {
    this.getDateRange(this.calendar.getToday())
  }

  ngOnInit() {

    this.loadData();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  onSelectDay(events) {
    this.selectDay.emit(events);
  }

  loadData() {
    this.subscription = this.calService.getEvent(this.dateFrom, this.dateTo).subscribe(
      (data: any) => {
        console.log("EVENTS");
        this.eventsData = data;
      },
      err => this.alert.open("Не удалось получить данные :(")
      // console.error('Opps')
    )
  }


  getDateRange(today) {
    this.dateFrom = new Date(today.year, today.month, 1)
    this.dateTo = new Date(today.year, today.month + 1, 0)
  }

  getMonth(ev) {
    console.log(ev.next);
    this.getDateRange(ev.next);
    this.loadData();
    return ev.next;
  }

}
