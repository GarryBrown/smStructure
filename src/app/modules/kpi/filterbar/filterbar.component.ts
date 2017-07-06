import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../plan-detail/plan-detail.service';
import { ReportConfigService } from '../report-config/report-config.service';
import { Report, Route } from '../../../models';
import { CheckboxComponent } from '../checkbox/checkbox.component';

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
  copyIndicators: Array<any>;
  isSaving: boolean;
  getSelected;
  allFields: Array<any>;
  disabled = false;
  hide = false;
  listIndicator: Array<any> = [];

  constructor(
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {

    this.getIndicators();
    
     this.listIndicator = this.copyObj(this.currentIndicators);
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
    // console.log(data);
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
    report.routes = this.currentRoutes;
    report.indicators = this.currentIndicators;
    this.getData.emit(report);
  }

  copyObj(indicators) {
    return indicators.map(indicator => this.listIndicator.push(Object.assign({}, indicator)));
  }

  onCheckRoutes(routes) {
    console.log(routes);
      this.currentRoutes = routes;
  }
  onCheckIndicators(indicators) {
    this.currentIndicators = indicators;
  }

  

}
