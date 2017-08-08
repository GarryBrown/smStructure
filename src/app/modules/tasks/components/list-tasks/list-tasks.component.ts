import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Task } from '../../../../models';
import { TasksService } from '../../services';

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

  foods = [
    { value: 'steak-0', viewValue: 'P&G' },
    { value: 'pizza-1', viewValue: 'Food' },
    { value: 'tacos-2', viewValue: 'Tacko' }
  ];

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.previousPage = data['pagingParams'].page;
      this.page = data['pagingParams'].page;
      this.reverse = data['pagingParams'].ascending;
      this.predicate = data['pagingParams'].predicate;
    });
  }

  ngOnInit() {
    this.loadData();
  }

  onDelete(task) {

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
    console.log('On error things');
  }


}
