import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { StoresService } from '../../../stores/stores.service';
import { ListShopsService } from './list-shops.service';
import { Store } from '../../../../models';
import { DeleteUtilsService } from '../../../../shared';


@Component({
  selector: 'app-list-shops',
  templateUrl: './list-shops.component.html',
  styleUrls: ['./list-shops.component.scss'],
  providers: [ListShopsService]
})
export class ListShopsComponent implements OnInit {
  stores: Store[];
  public selectedStores: Store[];

  error: any;
  success: any;
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
    private storesService: StoresService,
    private listShopsService: ListShopsService,
    public dialog: MdDialog,
    public dialogRef: MdDialogRef<ListShopsComponent>,
    private deleteUtilsService: DeleteUtilsService,
  ) {
    this.previousPage = 1;
    this.page = 1;
    this.reverse = 'asc';
    this.predicate = 'id';
    this.itemsPerPage = 2;
    this.selectedStores = [];
  }

  ngOnInit() {
    this.loadData();
  }


  selectStore(store: Store) {
    
    if (this.selectedStores.length) {
      if(this.deleteUtilsService.isExistInList(this.selectedStores, store.id)) {
        this.deleteUtilsService.removeById(this.selectedStores, store.id)
          .then(
            (selectedList) => {
              this.selectedStores = selectedList;
            },
            (error) => console.error('Can\'t remove store')
          )
      } else {
        this.selectedStores.push(store);
      }
    } else {
      this.selectedStores.push(store);
    }
  }


  transition() {
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
      );
  }

  //hightLighting active class
  isExistInList(id: string) {
    return this.selectedStores.some(store => store.id === id);
  }

  sort() {
    let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  loadPage(page: number) {
    console.log('loadPage');
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }


  private onSuccess(data, headers) {
    this.totalItems = headers.get('X-Total-Count');
    console.log('total' + this.totalItems);
    console.log(data);
    this.stores = data;
  }

  private onError(error) {
    console.error('On error things');
  }

  close() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.selectedStores);
  }


  dialogShop(event: Event ,id?: number) {
    event.stopPropagation();
    console.log(event);
    this.listShopsService.open(id);
  }


}
