import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Http } from "@angular/http";
import { DashboardService } from './dashboard.service';
import { DashboardPopupService } from './dialogs/dashboard-popup.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit, OnDestroy {
  orders: any[];
  /* property for sample Interceptor */
  users: Array<any> = [];

  itemsPerPage: number;
  routeData: any;
  /* pagin */
  page: any;
  previousPage: any;
  predicate: any;
  reverse: any;
  /* filter */
  dateFrom: any;
  dateTo: any;
  foods = [
    { value: 'steak-0', viewValue: 'P&G' },
    { value: 'pizza-1', viewValue: 'Food' },
    { value: 'tacos-2', viewValue: 'Tacko' }
  ];
  dateFromPlaceholder: string = "С";
  dateToPlaceholder: string = "По";


  constructor(private http: Http,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dashService: DashboardService,
    public dialog: MdDialog,
    private dialogsService: DashboardPopupService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.previousPage = data['pagingParams'].page;
      this.page = data['pagingParams'].page;
      this.reverse = data['pagingParams'].ascending;
      this.predicate = data['pagingParams'].predicate;
    });
  }


  ngOnInit() {
    this.http.get('/users')
      .subscribe(
      (users: any) => {
        this.users = users.json(),
          (err: any) => console.log(err)
      }
      );
    // this.http.get('http://mocker.egen.io/users')
    //         .subscribe(
    //             (data: any) => console.log(data),
    //             (err: any) => console.log(err)
    //         );



    //console.log(`on init page: ${this.page}`);
    this.loadData();
  }

  ngOnDestroy() {
    this.routeData.unsubscribe();
  }



  transition() {
    this.router.navigate(['/dashboard'], {
      queryParams:
      {
        page: this.page,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadData();
  }

  loadData() {
    //console.log(`loading page: ${this.page} \n with sort: ${this.sort()}`);
    this.dashService.query({
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
    //this.queryCount = this.totalItems;
    //console.log('_success_');
    //console.log(data.data);
    this.orders = this.dashService.computing(data.data);
  }

  private onError(error) {
    console.log('On error things');
  }

  /*openModal(order) {
    this.dialogsService
      .open(order, this.viewContainerRef)
      .subscribe(res => console.log(res));
  }*/

}



