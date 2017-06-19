import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: '[plan-detail-row]',
  templateUrl: './plan-detail-row.component.html',
  styleUrls: ['./plan-detail-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailRowComponent implements OnInit {
  @Input() route: any;
  @Input() indicators: Array<any>; //use fields[0] to get data

  isExpanded: boolean = false;

  constructor() {
  }

  ngOnInit() {
  console.log(this.indicators[0]);
  console.log(this.route.indicators);
  }

  toggle(event) {
    this.isExpanded = !this.isExpanded
  }

}
