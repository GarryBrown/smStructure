import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-day-events',
  templateUrl: './list-day-events.component.html',
  styleUrls: ['./list-day-events.component.scss']
})
export class ListDayEventsComponent implements OnInit {
  @Output() openDialog: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Input() events;

  constructor() { }

  ngOnInit() {
  }

  onOpenDialog(event) {
    this.openDialog.emit(event);
  }

  deleteEducation(event) {
    this.deleteEvent.emit(event);
  }
}
