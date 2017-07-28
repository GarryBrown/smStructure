import { Component, OnInit, Input, DoCheck, OnChanges, Output, EventEmitter } from '@angular/core';

import { TEACHING } from '../../../education.constants';
@Component({
  selector: 'app-edu-day-calendar',
  templateUrl: './edu-day-calendar.component.html',
  styleUrls: ['./edu-day-calendar.component.scss']
})
export class EduDayCalendarComponent implements OnInit, DoCheck, OnChanges {
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

  ngOnChanges() {
    if (this.eventsData) this.checkDate();
  }

  ngDoCheck() {

  }

  checkDate() {
    this.eventsData.map(event => {
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
  }

  onSelectDay() {
    this.selectDay.emit(this.todayEvents);
  }
}
