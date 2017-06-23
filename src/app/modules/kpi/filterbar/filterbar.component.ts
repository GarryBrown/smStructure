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
  @Input() currentRoutes: Array<Route>;
  @Output() updateCurrentIndicators: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
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
    this.allFields = this.indicators[0].planFields;
  }


  ngOnChanges() {
    // console.log(this.currentIndicators);
    // console.log(this.indicators);
    console.log('this.currentRoutes');
    console.log(this.currentRoutes);
  }


  changeFields() {
    console.log('change in filterbar');
    console.log(this.currentIndicators);
    this.updateCurrentIndicators.emit(this.currentIndicators);
  }

  save() {
    this.isSaving = true;
    this.currentReport.routes = this.currentRoutes;
    this.currentReport.indicators = this.currentIndicators;
    console.log(this.currentReport);
    if (this.currentReport.id) {
      this.reportService.create(this.currentReport).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.reportService.update(this.currentReport).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }
  }

  private onSaveSuccess(result) {
    this.isSaving = false;
  }

  private onSaveError() {
    this.isSaving = false;
  }

}
