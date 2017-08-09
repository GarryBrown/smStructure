import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: '[plan-detail-row]',
  templateUrl: './plan-detail-row.component.html',
  styleUrls: ['./plan-detail-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailRowComponent implements OnInit, OnChanges {
  @Input() route: any;
  @Input() indicators: Array<any>; //use fields[0] to get data
  @Input() deliveryPoint: any;
  isExpanded: boolean = false;

  constructor() {
  }

  ngOnInit() {
   
  }
  
  ngOnChanges() {
    console.log('this.deliveryPoint')
    console.log(this.deliveryPoint)
  }

  toggle(event) {
    this.isExpanded = !this.isExpanded
  }
}
