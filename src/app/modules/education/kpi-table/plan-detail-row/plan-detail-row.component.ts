import { Component, OnInit, Input, ViewEncapsulation, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: '[plan-detail-row]',
  templateUrl: './plan-detail-row.component.html',
  styleUrls: ['./plan-detail-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailRowComponent implements OnInit, OnChanges {
  @Input() route: any;
  @Input() indicators: Array<any>; //use fields[0] to get data

  isExpanded: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }
  ngOnChanges() {

  }

  toggle(event) {
    this.isExpanded = !this.isExpanded
  }

}
