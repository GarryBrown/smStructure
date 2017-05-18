import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StoresService } from '../../../stores/stores.service';
import { Store } from '../../../../models';

@Component({
  selector: 'app-list-shops',
  templateUrl: './list-shops.component.html',
  styleUrls: ['./list-shops.component.scss']
})
export class ListShopsComponent implements OnInit {
  stores: Store[];

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
    private storesService: StoresService
  ) {
    this.previousPage = 0;
    this.page = 0;
    this.reverse = 'asc';
    this.predicate = 'id';

  }

  ngOnInit() {
    this.loadData();
  }


  transition() {
    console.log('transition');
    // this.router.navigate(['/admin'], {
    //   queryParams:
    //   {
    //     page: this.page,
    //     sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
    //   }
    // });
    this.loadData();
  }

  loadData() {
    this.storesService.query({
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
    this.totalItems = 2 // headers.get('X-Total-Count');
    console.log(data);
    this.stores = data;
  }

  private onError(error) {
    console.log('On error things');
  }


}
