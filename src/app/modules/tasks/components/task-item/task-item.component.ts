import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../../models';

@Component({
  selector: '[app-task-item]',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(task: Task) {
    this.delete.emit(task)
  }

}
