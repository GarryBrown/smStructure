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
export class PlanDetailTOComponent implements OnInit {
  agents: Array<any>;
  selectedAgents: Array<any>;
  presetReports: Array<any>;
  allFields: Array<any>;
  allFieldsDesc: Array<any>;
  headerColumns: Array<string> = ["Маршрут", "Цель", "Факт", "%", "Прогноз", "Прогноз %", "GAP", "План на день"];

  constructor(
    private kpiService: KPIService,
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.kpiService.loadPlanDetails()
      .map(response => response.json().data)
      .subscribe(data => {
        this.agents = data;
        // console.log(this.agents);
      }, error => console.log(error));
    this.kpiService.getPresetReport().subscribe(
      (data: any) => {
        this.presetReports = data.data;
        console.log(data);
      },
      err => console.error('Error getPresetReport')
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

}
