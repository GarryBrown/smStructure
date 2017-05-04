import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomersService,]
})
export class CustomersComponent implements OnInit {

  stores: any[];

  constructor(
    private storesService: CustomersService
  ) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.storesService.query()
    .subscribe(
        (res: Response) => this.onSuccess(res.json()),
        (res: Response) => this.onError(res.json())
    );
  }

  private onSuccess (data) {
    console.log(data.data);
    this.stores = data.data;
  }

  private onError (error) {
    console.log('On error things');
  }


}
