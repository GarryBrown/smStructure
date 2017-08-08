import { Component, OnInit } from '@angular/core';

import { Task } from '../../../../models';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  constructor() { }

  ngOnInit() {
  }

}
