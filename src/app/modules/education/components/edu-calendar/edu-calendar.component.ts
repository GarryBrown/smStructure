import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";

import { EduCalendarService } from '../../services';
import { AlertBarComponent } from "../../../../shared";

@Component({
  selector: 'app-edu-calendar',
  templateUrl: './edu-calendar.component.html',
  styleUrls: ['./edu-calendar.component.scss']
})
export class EduCalendarComponent implements OnInit, OnChanges, OnDestroy {
  @Output() selectDay: EventEmitter<Array<any>> = new EventEmitter();
  @Output() loadingData: EventEmitter<Array<any>> = new EventEmitter();
  @Input() access: string;
  @Input() eventsData: Array<any>;
  model: NgbDateStruct;
  subscription: Subscription;

  date: any;
  current: any;

  constructor(
    private calendar: NgbCalendar,
    private calService: EduCalendarService,
    private alert: AlertBarComponent
  ) {
    this.getDateRange(this.calendar.getToday())
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

  getDateRange(today): any {
    return {
      dateFrom: new Date(today.year, today.month, 1),
      dateTo: new Date(today.year, today.month + 1, 0)
    }

  }

  getMonth(ev) {
    let dateRange = this.getDateRange(ev.next);
    this.loadingData.emit(dateRange);
    return ev.next;
  }

}
