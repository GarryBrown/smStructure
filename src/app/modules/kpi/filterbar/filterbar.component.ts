import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../plan-detail/plan-detail.service';
import { ReportConfigService } from '../report-config/report-config.service';
import { Report, Route } from '../../../models';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit, OnChanges {
  @Input() indicators: Array<any>;
  @Input() currentIndicators: Array<any>;
  @Input() currentReport: Report;
  @Input() routes: Array<Route>;
  @Input() currentRoutes: Array<any>;
  @Output() updateCurrentIndicators: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  @Output() getData: EventEmitter<Report> = new EventEmitter<Report>();
  @Output() changeIndicators: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  isSaving: boolean;
  getSelected;
  allFields: Array<any>;
  constructor(
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    this.getIndicators();
  }


  ngOnChanges() {
    this.getIndicators();
  }

  changeRoutes(routes) {
    this.pdService.getIndicatorsByRoutes(routes).subscribe(
      data => this.onSucces(data, this.onSuccesIndicators),
      err => this.onError('getIndicatorsByRoutes', err)
    )
  }

  onSuccesIndicators(data) {
    this.indicators = data;
  }

  onSucces(data: any, cb: any) {
    this.isSaving = false;
    console.log(data);
    cb.bind(this)(data);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);

  }

  getIndicators() {
    if (this.indicators[0].planFields) {
      this.allFields = this.indicators[0].planFields;
    }
  }


  changeFields(event) {
    this.updateCurrentIndicators.emit(this.currentIndicators);
  }

  changeIndicatorsSet() {
    this.changeIndicators.emit(this.currentIndicators);
  }


  getDataFilter() {
    let report = new Report();
    report.indicators = this.currentIndicators;
    report.routes = this.currentRoutes;
    this.getData.emit(report);
  }


  allChecked(event, modelName, allOption, ) {

    if (event.checked) {
      this[modelName] = this[allOption];
      console.log(this.currentRoutes);
    }
    else {
      this[modelName] = [];
    }
  }




}
