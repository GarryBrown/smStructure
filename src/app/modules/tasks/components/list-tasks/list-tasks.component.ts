import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Task } from '../../../../models';
import { TasksService, TaskEditService } from '../../services';
import { AlertBarComponent } from "../../../../shared";

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  
  
  tasks: Array<Task>;
  error: any;
  success: any;
  routeData: any;
  /* pagin */
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
  predicate: any;
  reverse: any;
  /* filter */

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private taskEditService: TaskEditService,
    private alert: AlertBarComponent
  ) {
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.previousPage = data['pagingParams'].page;
      this.page = data['pagingParams'].page;
      this.reverse = data['pagingParams'].ascending;
      this.predicate = data['pagingParams'].predicate;
    });
  }

  ngOnInit() {
    this.taskEditService.checkUpdatesTasks().subscribe(
      (task) => this.updateTasks(task),
    )
    this.loadData();
  }

  updateTasks(updatedTask) {
    let isNew = true;
    this.tasks = this.tasks.map(task => {
      if (task.id === updatedTask.id) {
        isNew = false;
        task = updatedTask;
      }
      return task;
    })
    if (isNew) {
      this.tasks = [...this.tasks, updatedTask]
    }
  }

  onDelete(task) {
    this.tasksService.delete(task.id).subscribe(
      (res) => {
        this.tasks = this.tasks.filter(taskItem => taskItem.id !== task.id);
      },
      (err) => this.alert.open("Ошибка при удалении задания :(")
    )
  }

  transition() {
    this.router.navigate(['/tasks'], {
      queryParams:
      {
        page: this.page,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadData();
  }

  loadData() {
    this.tasksService.query({
      page: this.page - 1,
      size: this.itemsPerPage,
      sort: this.sort()
    }).subscribe(
      (res: Response) => this.onSuccess(res.json(), res.headers),
      (res: Response) => this.onError(res.json())
      )
  }

  sort() {
    let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }

  private onSuccess(data, headers) {
    this.totalItems = headers.get('X-Total-Count');
    console.log(data);
    this.tasks = data;
  }

  private onError(error) {
    console.error('On error things');
  }


}
