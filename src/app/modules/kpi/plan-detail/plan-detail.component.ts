import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Agent } from "app/models/agent.model";
import { KPIService } from "app/modules/kpi/kpi.service";
import { PlanDetailService } from './plan-detail.service';
import { ReportConfigService } from '../report-config/report-config.service';

import { ReportConfigComponent } from '../report-config/report-config.component';

import { Route, Report, Indicator } from '../../../models';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PlanDetailComponent implements OnInit {

  routesData: Array<any>;
  isSaving: boolean;

  indicators: Array<any>;
  currentIndicators: Array<any>;

  listRoutes: Array<Route>;
  currentRoutes: Array<Route>;

  reports: Array<any>;
  currentReport: Report;
  // transformed array for iterate
  listIndicators: Array<any>;
  // func for light selected in md-select
  getSelected: any;

  constructor(
    private kpiService: KPIService,
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
    public dialog: MdDialog,
  ) {
    this.reports = [];
    // this.indicators = [];
    this.currentIndicators = [];
    this.currentReport = null;
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    this.reportService.getReports().subscribe(
      data => this.onSucces(data, this.onSuccesReport),
      err => this.currentReport = new Report()
    );
    this.pdService.getRoutes().subscribe(
      (data: any) => {
        // this.listRoutes = data;
        this.onSucces(data, this.onSuccesRoutes)
      },
      err => console.error('No getListRoutes for filter routes'));
  }

  changeReports(report) {
    this.currentRoutes = report.routes;
    this.currentIndicators = report.indicators;
    this.changeIndicators(report.indicators);
  }

  changeIndicators(indicators) {
    this.listIndicators = this.pdService.getPropsObj(indicators);
  }

  changeRoutes(routes) {
    this.pdService.getIndicatorsByRoutes(routes).subscribe(
      (data) => {
        console.log(data);
        this.indicators = data
      },
      err => this.onError('getIndicatorsByRoutes', err)
    )
  }


  openConfig() {
    let dialogRef = this.dialog.open(ReportConfigComponent, {
      // data: [this.reports, this.allFieldsDesc]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  applyFilter() {
    this.isSaving = true;
    this.pdService.getRoutesData(this.currentIndicators, this.currentRoutes).subscribe(
      data => this.onSucces(data, this.onSuccesRouteData),
      error => console.log(error)
    );
  }

  onSuccesRouteData(data) {
    console.log(data);
    console.log(this.listIndicators);
    this.routesData = data;
  }

  onSuccesReport(reports) {
    this.reports = reports.data;
    if (!this.reports.length) {
      this.currentReport = new Report();
    }
  }


  onSuccesRoutes(routes: Array<Route>) {
    this.listRoutes = routes;
  }


  onSucces(data: any, cb: any) {
    this.isSaving = false;
    cb.bind(this)(data);
  }

  changeFields(newCurrentIndicators) {
    console.log('changeFields');
    this.listIndicators = this.pdService.getPropsObj(newCurrentIndicators);
    console.log(this.listIndicators);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }

}
