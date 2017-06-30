import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../../plan-detail/plan-detail.service';
import { ReportConfigService } from '../report-config.service';
import { Route, Report, Indicator, Field } from '../../../../models';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() report: Report;
  @Input() routes: Array<any>;
  @Output() onSave: EventEmitter<Report> = new EventEmitter<Report>();
  @Output() onDelete: EventEmitter<Report> = new EventEmitter<Report>();

  indicators: Array<Indicator>;
  allFields: Array<Field>;
  details = false;
  getSelected: any;
  isSaving: boolean;

  isAllChecked: boolean;

  constructor(
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    if (this.report && this.report.routes) {
      this.pdService.getIndicatorsByRoutes(this.report.routes).subscribe(
        (data: any) => {
          this.indicators = data;
          this.allFields = this.indicators[0].planFields;
        },
        err => console.log('error')
      )
    }
  }

  toggleInfo() {
    this.details = !this.details;
  }

  save() {
    this.onSave.emit(this.report);
    this.toggleInfo();
  }

  changeRoutes(routes) {
    this.pdService.getIndicatorsByRoutes(routes).subscribe(
      data => {
        this.indicators = data;
        this.allFields = this.indicators[0].planFields;
      },
      err => this.onError('getIndicatorsByRoutes', err)
    )
  }

  delete(report) {
    this.onDelete.emit(report);
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }

  allChecked(event, modelName, allOption, ) {
    if (event.checked) {
      this.report[modelName] = this[allOption];
    }
    else {
      this.report[modelName] = [];
    }
  }

} 
