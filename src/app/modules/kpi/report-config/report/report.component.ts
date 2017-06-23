import { Component, OnInit, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() report: Report;
  infoReport = false;
  field = false;
  selectedValue: string;
  routes = [
    "Route 1",
    "Route 2",
    "Route 3"
  ]
  indicators = [
    "Показатель 1",
    "Показатель 2",
    "Показатель 3"
    // { name: "Показатель 1" },
    // { name: "Показатель 2" },
    // { name: "Показатель 3" },

  ]
  fields = [
    "первое",
    "второе",
    "третье"
  ]



  constructor() { }

  ngOnInit() {
  }

  toggleInfo() {
    this.infoReport = !this.infoReport;
  }

}



export class Report {
  name: string;
}

export const REPORTS = [
  { name: 'Отчёт 1' },

  { name: 'Отчёт 2' },

  { name: 'Отчёт 3' }
]
