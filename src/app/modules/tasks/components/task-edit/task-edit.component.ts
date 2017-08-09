import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Task } from '../../../../models';
import { TaskEditService } from "../../services";
import { UtilsService } from '../../../../shared';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit, OnChanges {

  public task: Task;
  routes: any;
  typeOfActivities: any;
  deliveryPoints: any;
  getSelectedSingle: any;

  constructor(
    private taskEditService: TaskEditService,
    private utilsService: UtilsService
  ) {
    this.getSelectedSingle = utilsService.getSelectedSingle;
  }

  ngOnInit() {
    this.taskEditService.getRoutes().subscribe(
      (route: any) => {
        this.onSuccess(route);
        // this.routes = data;
        console.log(this.routes);
      },
      (error) => console.error(error)
    )

    this.taskEditService.getTypeOfActivity().subscribe(
      (data: any) => {
        this.typeOfActivities = data;
        console.log(this.typeOfActivities);
      },
      (error) => console.log(error)
    )

    if (this.task && this.task.route) {
      console.log("adfwerfaf")
      this.getDeliveryPoints(this.task.route);
    }

    // this.taskEditService.getDelivetyPoints().subscribe(
    //   (data: any) => {
    //     this.deliveryPoints = data;
    //     console.log(this.deliveryPoints);
    //   },
    //   (error) => console.log(error)
    // )
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.task && changes.task.currentValue.route) {
      this.getDeliveryPoints(changes.task.currentValue.route);
    }
  }

  getDeliveryPoints(route) {
    console.log("sluhaaa")
    this.taskEditService.getDelivetyPoints(route.id)
      .subscribe(
      (data: any) => this.deliveryPoints = data,
      (error) => console.log("looooh")
      )
  }

  onSuccess(data) {
    this.routes = data;
    // console.log(this.routes);

  }
}
