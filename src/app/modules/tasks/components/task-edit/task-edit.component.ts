import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Task } from '../../../../models';
import { TaskEditService, TasksService } from "../../services";
import { UtilsService, AlertBarComponent } from '../../../../shared';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
  providers: [AlertBarComponent]
})
export class TaskEditComponent implements OnInit {
  public task: Task;
  routes: any;
  typeOfActivities: any;
  deliveryPoints: any;
  getSelectedSingle: any;

  constructor(
    private alert: AlertBarComponent,
    private utilsService: UtilsService,
    private taskEditService: TaskEditService,
    private tasksService: TasksService,
    public dialogRef: MdDialogRef<TaskEditComponent>,
  ) {
    this.getSelectedSingle = utilsService.getSelectedSingle;
  }

  ngOnInit() {
    this.taskEditService.getRoutes().subscribe(
      (route: any) => this.routes = route,
      (error) => console.error(error)
    )
    this.taskEditService.getTypeOfActivity().subscribe(
      (data: any) => this.typeOfActivities = data,
      (error) => console.log(error)
    )
    if (this.task && this.task.route.id) {
      this.getDeliveryPoints(this.task.route);
    }
  }

  getDeliveryPoints(route) {
    this.taskEditService.getDelivetyPoints(route.id)
      .subscribe(
      (data: any) => this.deliveryPoints = data,
      (error) => console.error("Error getDelivetyPoints")
      )
  }

  save() {
    if (this.task.id) {
      this.tasksService.update(this.task).subscribe(
        (suc) => this.onSuccess(suc.json()),
        (err) => console.error(err)
      )
    } else {
      this.tasksService.create(this.task).subscribe(
        (suc) => this.onSuccess(suc.json()),
        (err) => console.error(err)
      )
    }
  }

  close(data?) {
    this.dialogRef.close(data);
  }

  onSuccess(data) {
    this.alert.open('Изменения сохранены.')
    this.close(data);
  }
}
