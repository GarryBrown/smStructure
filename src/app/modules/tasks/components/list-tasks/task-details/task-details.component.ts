import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

import { Task } from '../../../../models';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public task: Task;
  private pictures: Array<any>;
  private texts: Array<any>;
  dogs: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    // { name: 'Koby', human: 'Igor' },
    // { name: 'Razzle', human: 'Ward' },
    // { name: 'Molly', human: 'Rob' },
    // { name: 'Husi', human: 'Matias' },
  ];
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
    if (this.task && this.task.activityResults) {
      this.pictures = this.task.activityResults
        .filter(result => result.typeOfActivityResult.code === 'PHOTO')
      this.texts = this.task.activityResults
        .filter(result => result.typeOfActivityResult.code === 'TXT')
    }

  }



}
