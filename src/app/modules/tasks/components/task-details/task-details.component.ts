import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Task } from '../../../../models';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public task: Task;
  private pictures: Array<any>;
  private comments: Array<any>;
  increasedPicture: any;

  constructor(
    public dialogRef: MdDialogRef<TaskDetailsComponent>,
  ) {
    this.increasedPicture = null;
  }

  ngOnInit() {
    console.log('ngOnInit')
    if (this.task && this.task.activityResults) {
      this.pictures = this.task.activityResults
        .filter(result => result.typeOfActivityResult.code === 'PHOTO')
      this.comments = this.task.activityResults
        .filter(result => result.typeOfActivityResult.code === 'TXT')
    }

  }

  bindEntity(task) {
    this.task = task;
  }

  selectPicture(picture) {
    this.increasedPicture = picture;
  }

  close() {
    this.dialogRef.close(false);
  }



}
