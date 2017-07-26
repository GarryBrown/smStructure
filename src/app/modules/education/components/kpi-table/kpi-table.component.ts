import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AlertBarComponent } from '../../../../shared';

import { Report } from '../../../../models';
import { KpiTableService } from '../../services/kpi-table.service';

@Component({
  selector: 'app-kpi-table',
  templateUrl: './kpi-table.component.html',
  styleUrls: ['./kpi-table.component.scss']
})
export class KpiTableComponent implements OnInit, OnChanges {
  @Input() report: Report;
  @Input() deliveryPoint: any;
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

  ngOnChanges() {
    if (this.report) {
      this.getData(this.report[0]);
      this.listIndicators = this.kpiTableService.getPropsObj(this.report[0].indicators);
    }
  }

  getData(report: Report) {
    this.isSaving = true;
    this.kpiTableService.getRoutesData(report.indicators, report.routes).subscribe(
      (data: any) => this.onSucces(data, this.onSuccesRouteData),
      error => console.error(error)
    );
  }

  onSuccesRouteData(data) { 
    console.log(data);  
    this.routesData = data;
    // this.routesData = data.slice(1,data.length); // for inmemory
  }

  onSucces(data: any, cb: any) {
    this.isSaving = false;
    cb.bind(this)(data);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
    this.alert.open("Не удалось получить данные :(");
  }
}
