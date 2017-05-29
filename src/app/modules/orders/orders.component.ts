import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';

import { PrincipalService } from '../../core';
import { OrdersService } from './orders.service';
import { OrdersPopupService } from './dialogs/orders-popup.service';
import { Account } from '../../models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: any[];

  error: any;
  success: any;
  loading: boolean;
  reloadFunc: any;
  localReloadToggle: boolean;

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


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public ordersService: OrdersService,
    private principal: PrincipalService,
    public dialog: MdDialog,
    private dialogsService: OrdersPopupService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.previousPage = data['pagingParams'].page;
      this.page = data['pagingParams'].page;
      this.reverse = data['pagingParams'].ascending;
      this.predicate = data['pagingParams'].predicate;
    });
    this.loading = true;
  }


  ngOnInit() {
    this.loadData();
    this.principal.identity().then(
      account => {
        console.log('then work');
        this.checkAutoReload(account);
      }
    )

  }

  ngOnDestroy() {
    this.routeData.unsubscribe();
  }

  transition() {
    this.router.navigate(['/orders'], {
      queryParams:
      {
        page: this.page,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadData();
  }

  loadData() {
    this.orders = this.ordersService.computing(this.ordersService.mockOrders);
    setTimeout(
      () => this.loading = false,
      1200)
    // this.ordersService.query({
    //   page: this.page - 1,
    //   size: this.itemsPerPage,
    //   sort: this.sort()
    // }).subscribe(
    //   (res: Response) => this.onSuccess(res.json(), res.headers),
    //   (res: Response) => this.onError(res.json())
    //   )
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
    this.orders = this.ordersService.computing(data.data);
    this.loading = false;
  }

  private onError(error) {
    console.log('On error things');
  }

  /******AUTORELOAD*******/

  checkAutoReload(user: Account) {
    this.localReloadToggle = user.autoReload;
    if (user.autoReload) {
      console.log('autoReload work');
      this.autoReload();
    }
  }

  autoReload() {
    this.reloadFunc = setInterval( () => this.runReload(), 5000);
  }

  runReload() {
    this.loading = true;
    this.loadData();
  }

  stopAutoReload() {
    clearInterval(this.reloadFunc);
  }

  toggleReload() {
    if ( this.localReloadToggle ) {
      this.stopAutoReload();
    } else {
      this.autoReload();
    }
    this.localReloadToggle = !this.localReloadToggle;
  }


}



