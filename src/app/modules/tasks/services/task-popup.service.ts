import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { TasksService } from './tasks.service';
import { Task } from '../../../models';


@Injectable()
export class TasksPopupService {

  constructor(
    private dialog: MdDialog,
    private router: Router,
    private tasksService: TasksService
  ) { }

  public open(component: any, id?: string) {

    if (id) {
      this.tasksService.find(id)
        .subscribe(task => {
          this.bindDialog(component, task);
        });
    } else {
      let newTask = new Task()
      this.bindDialog(component, newTask);
    }

  }

  bindDialog(component, task: Task) {

    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '50%';
    dialogRef = this.dialog.open(component, config);
    if (task.id === undefined || task.id === null) {
      // dialogRef.componentInstance.isDisableForm = false;
    }

    dialogRef.componentInstance.task = task;

    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
      //update reducer
    });

    return dialogRef;
  }

}
