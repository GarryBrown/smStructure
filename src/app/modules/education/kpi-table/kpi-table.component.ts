import { Component, OnInit, Input } from '@angular/core';
import { AlertBarComponent } from '../../../shared';

import { Report } from '../../../models';
import { KpiTableService } from './kpi-table.service';

@Component({
  selector: 'app-kpi-table',
  templateUrl: './kpi-table.component.html',
  styleUrls: ['./kpi-table.component.scss']
})
export class KpiTableComponent implements OnInit {
  @Input() report: Report;

  routesData: Array<any>;
  isSaving: boolean;

  // transformed array for iterate
  listIndicators: Array<any>;



  constructor(
    private kpiTableService: KpiTableService,
    private alert: AlertBarComponent
  ) {
    this.isSaving = true;
  }

  ngOnInit() {
  }


  getData(report: Report) {
    this.isSaving = true;
    this.kpiTableService.getRoutesData(report.indicators, report.routes).subscribe(
      (data: any) => this.onSucces(data, this.onSuccesRouteData),
      error => console.error(error)
    );
  }

  onSuccesRouteData(data) {
    this.routesData = data;
  }


  onSucces(data: any, cb: any) {
    this.isSaving = false;
    cb.bind(this)(data.data);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
    this.alert.open("Не удалось получить данные :(");
  }



}
