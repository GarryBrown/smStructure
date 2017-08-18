import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[salary-row]',
  templateUrl: './salary-row.component.html',
  styleUrls: ['./salary-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['salary', 'userSalary']
})
export class SalaryRowComponent implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
  
  }

  toggleInfo(event) {
    this.isExpanded = !this.isExpanded
  }
  

}
