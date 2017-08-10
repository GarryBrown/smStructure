import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
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
      Observable.of(new Task()).delay(300).subscribe(task => {
        this.bindDialog(component, task);
      });
    }

  }

  bindDialog(component: TemplateRef<any>, task: Task) {
    let dialogRef: MdDialogRef<any>;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '50%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.bindEntity(task);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.taskEditService.updateTasks(data);
      }

      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }

}
