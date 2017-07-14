import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { Subscription } from "rxjs/Subscription";

import { EduCalendarService } from './edu-calendar.service';

@Component({
  selector: 'app-edu-calendar',
  templateUrl: './edu-calendar.component.html',
  styleUrls: ['./edu-calendar.component.scss']
})
export class EduCalendarComponent implements OnInit {
  @Output() selectDay: EventEmitter<Array<any>> = new EventEmitter();
  @Input() access: string;
  model: NgbDateStruct;
  subscription: Subscription;
  eventsData: Array<any>;

  constructor(
    private http: Http,
    private calService: EduCalendarService
  ) { }

  ngOnInit() {

    this.loadData();
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
    this.subscription = this.calService.getEvent().subscribe(
      (data: any) => this.eventsData = data.data,
      err => console.error('Opps')
    )
  }


}
