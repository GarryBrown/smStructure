import { Injectable, ViewContainerRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { TasksService } from './tasks.service';
import { TaskEditService } from './task-edit.service';
import { Task } from '../../../models';


@Injectable()
export class TasksPopupService {

  constructor(
    private dialog: MdDialog,
    private router: Router,
    private tasksService: TasksService,
    private taskEditService: TaskEditService
  ) { }

  public open(component: any, id?: string) {

    if (id) {
      this.tasksService.find(id)
        .subscribe(task => {

          this.bindDialog(component, task);
        });
    } else {
      let source = Observable.of(new Task())
      source.subscribe(task => {
        console.log('next!')
        this.bindDialog(component, task);
      });
    }

  }

  bindDialog(component, task: Task) {
    let dialogRef;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '50%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.task = task;

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.taskEditService.updateTasks(data);
      }

      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }

}
