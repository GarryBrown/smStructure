import { Component, OnInit, Input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: '[plan-detail-row]',
  templateUrl: './plan-detail-row.component.html',
  styleUrls: ['./plan-detail-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailRowComponent implements OnInit {
  @Input() agent: any;
  isExpanded: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggle(event) {
    this.isExpanded = !this.isExpanded
  }

}
