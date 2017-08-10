import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { TEACHING } from '../../../education.constants';
@Component({
  selector: 'app-edu-day-calendar',
  templateUrl: './edu-day-calendar.component.html',
  styleUrls: ['./edu-day-calendar.component.scss']
})
export class EduDayCalendarComponent implements OnInit, OnChanges {
  @Input() date;
  @Input() access;
  @Input() eventsData: Array<any>;
  @Input() selected: any;
  @Output() selectDay: EventEmitter<Array<any>> = new EventEmitter();
  isEdu: boolean;
  isSch: boolean;
  todayEvents: Array<any>;

  constructor() {
    this.isEdu = false;
    this.isSch = false;
    this.todayEvents = []
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.eventsData && changes.eventsData.currentValue) {
      this.checkDate(changes.eventsData.currentValue);
    }
  }

  checkDate(eventsData) {
    this.isEdu = false;
    this.isSch = false;
    this.todayEvents = []
    eventsData.map(event => {
      let d1 = new Date(event.date);
      let d2 = new Date(this.date.year, this.date.month - 1, this.date.day);
      if (d1.valueOf() === d2.valueOf()) {
        if (event.type === TEACHING) {
          this.isEdu = true;
        } else {
          this.isSch = true;
        }
        this.todayEvents.push(event);
      }
    })
    // console.log(`${this.date.day} === ${this.todayEvents.length}`);
  }

  onSelectDay() {
    this.selectDay.emit(this.todayEvents);
  }
}
