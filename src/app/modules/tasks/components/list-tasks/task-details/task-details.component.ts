import { Component, OnInit } from '@angular/core';

import { Task } from '../../../../models';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public tack;
  constructor() { }

  ngOnInit() {
  }

}
