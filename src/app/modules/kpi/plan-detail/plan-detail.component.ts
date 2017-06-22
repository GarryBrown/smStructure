import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Agent } from "app/models/agent.model";
import { KPIService } from "app/modules/kpi/kpi.service";
import { PlanDetailService } from './plan-detail.service';

import { ReportConfigComponent } from '../report-config/report-config.component';

import { Route, Report, Indicator } from '../../../models';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PlanDetailComponent implements OnInit, AfterViewInit {

  routesData: Array<any>;
  
  indicators: Array<any>;
  currentIndicators: Array<any>;

  listRoutes: Array<Route>;
  currentdRoutes: Array<Route>;

  reports: Array<any>;
  currentReport: Report;
  getSelected;

  listIndicators;
  @ViewChild('video') video:any;

  constructor(
    private kpiService: KPIService,
    private pdService: PlanDetailService,
    public dialog: MdDialog,
  ) {
    this.reports = [];
    // this.indicators = [];
    this.currentIndicators = [];
    this.currentReport = null;

    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    this.test();
    this.pdService.getReports()
      .subscribe(
      (data: any) => this.onSuccesReport(data),
      err => this.currentReport = new Report()
      );

    this.pdService.getRoutes().subscribe(
      (data: any) => {
        console.log('rooouttteee');
        console.log(data);
        this.listRoutes = data;
      },
      err => console.error('No getListRoutes for filter routes'));
  }

  ngAfterViewInit() {

  }


  changeReports(report) {
    this.currentdRoutes = report.routes;
    this.currentIndicators = report.indicators;
    this.changeIndicators(report.indicators);
  }


  changeIndicators(indicators) {
    console.log(this.currentIndicators);
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

  // getSelected(selectedVals: Array<any>, option: any) {
  //   if (selectedVals) {
  //     for (let i = 0; i < selectedVals.length; i++) {
  //       if (option.id === selectedVals[i].id) {
  //         return selectedVals[i];
  //       }
  //     }
  //   }
  //   return option;
  // }


  openConfig() {
    let dialogRef = this.dialog.open(ReportConfigComponent, {
      // data: [this.reports, this.allFieldsDesc]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  applyFilter() {
    this.pdService.getRoutesData(this.currentIndicators, this.currentdRoutes)
      .subscribe((data: any) => {
        console.log(data);
        console.log(this.listIndicators);
        this.routesData = data;
      },
      error => console.log(error)
      );
  }

  onSuccesReport(reports) {
    this.reports = reports.data;
    if (!this.reports.length) {
      this.currentReport = new Report();
    }

  }

  changeFields(newCurrentIndicators) {
    console.log('YAEEEEH');
    this.listIndicators = this.pdService.getPropsObj(newCurrentIndicators);
    console.log(this.listIndicators);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }


  test() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.warn('Geolocation is not supported by this browser');
    }

    
  }

  showPosition(position) {
      console.log(`Your position : `);
      console.log(position);
  }

}
