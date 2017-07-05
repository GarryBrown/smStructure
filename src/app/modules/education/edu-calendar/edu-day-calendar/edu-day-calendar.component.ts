import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edu-day-calendar',
  templateUrl: './edu-day-calendar.component.html',
  styleUrls: ['./edu-day-calendar.component.scss']
})
export class EduDayCalendarComponent implements OnInit {
  @Input() date;
  @Input() eventsData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
