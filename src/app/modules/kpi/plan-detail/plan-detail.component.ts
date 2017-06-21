import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Agent } from "app/models/agent.model";
import { KPIService } from "app/modules/kpi/kpi.service";

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
  presetReports: Array<any>;
  allFields: Array<any>;
  allFieldsDesc: Array<any>;
  headerColumns: Array<string> = ["Маршрут", "Цель", "Факт", "%", "Прогноз", "Прогноз %", "GAP", "План на день"];

  private hideElement: boolean = false;

  constructor(
    private kpiService: KPIService,
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.kpiService.getRoutes()
      .subscribe((data: any) => {
        this.routes = data.data.routes;
        this.indicators = data.data.indicators;
        console.log('this.routes');
        console.log(data.data);

      }, error => console.log(error));
    this.kpiService.getPresetReport().subscribe(
      (data: any) => {
        this.presetReports = data.data;
        // console.log(data);
      },
      err => console.error('Error getPresetReport')
    )

    this.kpiService.getIndicators().subscribe(
      (data: any) => this.indicatorsKPI = data.data,
      err => console.error('No indicators for filter kpi')
    )
    this.kpiService.getListRoutes().subscribe(
      (data: any) => this.listRoutes = data.data,
      err => console.error('No getListRoutes for filter routes')

    )

    this.kpiService.getFilterFields().subscribe(
      (data: any) => {
        this.allFields = data.data;
        this.allFieldsDesc = this.kpiService.toOnlyFields(this.allFields, 'description');
        console.log('allFields:');
        console.log(this.allFields);
      },
      err => console.error('Error getPresetReport')
    )

  }

  openConfig() {
    let dialogRef = this.dialog.open(ReportConfigComponent, {
      data: [this.presetReports, this.allFieldsDesc]
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
