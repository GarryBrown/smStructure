import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Agent } from "app/models/agent.model";
import { KPIService } from "app/modules/kpi/kpi.service";
import { PlanDetailService } from './plan-detail.service';

import { ReportConfigComponent } from '../report-config/report-config.component';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailComponent implements OnInit {
  routes: Array<any>;
  indicators: Array<any>;
  indicatorsKPI: Array<any>;
  listRoutes: Array<any>;
  selectedAgents: Array<any>;
  reports: Array<any>;
  currentReports: any;
  listIndicators;
  headerColumns: Array<string> = ["Маршрут", "Цель", "Факт", "%", "Прогноз", "Прогноз %", "GAP", "План на день"];

  private hideElement: boolean = false;

  constructor(
    private kpiService: KPIService,
    private pdService: PlanDetailService,
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.pdService.getRoutes()
      .subscribe((data: any) => {
        this.routes = data.data.routes;
        this.indicators = data.data.indicators;
      }, error => console.log(error));

    this.pdService.getReports().subscribe(
      (data: any) => {
        this.reports = data.data;
        this.currentReports = data.data[0];
        this.listIndicators = this.pdService.getPropsObj(this.currentReports);
        console.log(this.reports);
        console.log(this.listIndicators);

      },
      err => console.error('Error getPresetReport'));

    this.pdService.getListRoutes().subscribe(
      (data: any) => this.listRoutes = data.data,
      err => console.error('No getListRoutes for filter routes'));
  }

  openConfig() {
    let dialogRef = this.dialog.open(ReportConfigComponent, {
      // data: [this.reports, this.allFieldsDesc]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  toggleElement() {
    if (this.hideElement) {
      this.hideElement = false;
    }
    else {
      this.hideElement = true;
    }
  }

}
