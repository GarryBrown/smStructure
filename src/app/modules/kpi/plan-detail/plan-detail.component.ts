import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

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

  routes: Array<Route>;

  currentRoutes: Array<Route>;
  reports: Array<any>;
  currentReport: Report;
  // transformed array for iterate
  listIndicators: Array<any>;
  // func for light selected in md-select
  getSelected: any;

  currentdRoutes: Array<Route>;

  constructor(
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
    public dialog: MdDialog,
  ) {
    this.isSaving = true;
    this.reports = [];
    this.currentIndicators = [];
    this.getSelected = pdService.getSelected;
    this.currentReport = new Report();
  }

  ngOnInit() {
    this.reportService.getReports().subscribe(
      data => { this.isSaving = true; this.onSucces(data, this.onSuccesReport) },
      err => this.onError('getReports', err)
    );
    this.pdService.getRoutes().subscribe(
      (data: any) => {
        this.onSucces(data, this.onSuccesRoutes)
      },
      err => console.error('No getroutes for filter routes'));
  }

  // changes selects
  changeReports(report: Report) {
    this.currentRoutes = report.routes;
    this.changeRoutes(this.currentRoutes);
    this.currentIndicators = report.indicators;
    this.changeIndicators(report.indicators);
    this.applyFilter();
  }

  changeIndicatorsSet(indicators) {
    this.currentIndicators = indicators;
    this.changeIndicators(indicators);
  }

  changeIndicators(indicators: Array<Indicator>) {
    this.listIndicators = this.pdService.getPropsObj(indicators);
  }

  changeRoutes(routes: Array<Route>) {
    this.pdService.getIndicatorsByRoutes(routes).subscribe(
      data => this.onSucces(data, this.onSuccesIndicators),
      err => this.onError('getIndicatorsByRoutes', err)
    )
  }


  openConfig() {
    let reportsCopy: Array<Report> = new Array();
    this.reports.map(report =>
      reportsCopy.push(Object.assign({}, report))
    );

    let dialogRef = this.dialog.open(ReportConfigComponent, {
      data: [reportsCopy, this.routes], width: '75%', height: '85%'
    });
    dialogRef.afterClosed().subscribe((result: Array<Report>) => {
      if (result) {
        this.reports = result;
        if (this.currentReport) {
          console.log('CHANGE!')
          this.currentReport = this.reports.filter(report => report.id === this.currentReport.id)[0];
          this.changeReports(this.currentReport);
        }

      }
    });


  }

  applyFilter() {
    this.isSaving = true;
    this.pdService.getRoutesData(this.currentIndicators, this.currentRoutes).subscribe(
      (data: any) => this.onSucces(data, this.onSuccesRouteData),
      error => console.error(error)
    );
  }

  getData(report: Report) {
    this.isSaving = true;
    this.pdService.getRoutesData(report.indicators, report.routes).subscribe(
      (data: any) => this.onSucces(data, this.onSuccesRouteData),
      error => console.error(error)
    );
  }

  onSuccesRouteData(data) {
    this.routesData = data;
  }

  onSuccesIndicators(data) {
    this.indicators = data;
  }

  onSuccesReport(reports) {
    this.reports = reports;
    if (!this.reports.length) {
      this.currentReport = new Report();
    }
  }

  onSuccesRoutes(routes: Array<Route>) {
    this.routes = routes;
  }

  onSucces(data: any, cb: any) {
    this.isSaving = false;
    cb.bind(this)(data);
  }

  changeFields(newCurrentIndicators) {
    this.listIndicators = this.pdService.getPropsObj(newCurrentIndicators);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);

  }

}
