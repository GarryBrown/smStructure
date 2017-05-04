import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import {MdDialog, MdDialogRef} from '@angular/material';


import { AdminService } from './admin.service';
import { AdminPopupService } from './dialogs/admin-popup.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit, OnDestroy {
  users: any[];

  error: any;
  success: any;

  itemsPerPage: number;
  routeData: any;
  /* pagin */
  page: any;
  previousPage: any;
  predicate: any;
  reverse: any;
  /* filter */

  foods = [
    {value: 'steak-0', viewValue: 'P&G'},
    {value: 'pizza-1', viewValue: 'Food'},
    {value: 'tacos-2', viewValue: 'Tacko'}
  ];



  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public  userService: AdminService,
    public dialog: MdDialog,
    private dialogsService: AdminPopupService,
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
    //console.log(`on init page: ${this.page}`);
    this.loadData();
  }

  ngOnDestroy() {
    this.routeData.unsubscribe();
  }



  transition () {
    this.router.navigate(['/admin'], { queryParams:
      {
        page: this.page,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadData();
  }

  loadData(){
    //console.log(`loading page: ${this.page} \n with sort: ${this.sort()}`);
    this.userService.query({
      page: this.page - 1,
      size : this.itemsPerPage,
      sort : this.sort()}).subscribe(
      (res: Response) => this.onSuccess(res.json(), res.headers),
      (res: Response) => this.onError(res.json())
    )
  }

  sort () {
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

  setActive(user, isActivated) {
        user.activated = isActivated;

        this.userService.update(user).subscribe(
            (response) => {
                if (response.status === 200) {
                    this.error = null;
                    this.success = 'OK';
                    this.loadData();
                } else {
                    this.success = null;
                    this.error = 'ERROR';
                }
            });
    }

  private onSuccess (data, headers) {
    //this.queryCount = this.totalItems;
    //console.log('_success_');
    //console.log(data.data);
    console.log(data);
    this.users = data;
  }

  private onError (error) {
    console.log('On error things');
  }

  /*openModal(order) {
    this.dialogsService
      .open(order, this.viewContainerRef)
      .subscribe(res => console.log(res));
  }*/

}



