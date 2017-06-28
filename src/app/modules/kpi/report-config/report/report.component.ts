import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../../plan-detail/plan-detail.service';
import { ReportConfigService } from '../report-config.service';
import { Route, Report, Indicator } from '../../../../models';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() report: Report;
  @Input() routes: Array<Route>;
  @Output() onSave: EventEmitter<Report> = new EventEmitter<Report>();

  indicators: Array<Indicator>;
  allFields: Array<any>;
  details = false;
  getSelected: any;
  isSaving: boolean;

  constructor(
    private pdService: PlanDetailService,
    private reportService: ReportConfigService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    console.log(this.report);
    if (this.report && this.report.routes) {
      this.pdService.getIndicatorsByRoutes(this.report.routes).subscribe(
        (data: any) => {
          this.indicators = data;
          console.log(data[0]);
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
    this.isSaving = true;
    if (this.report.id === undefined) {
      this.reportService.create(this.report).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.reportService.update(this.report).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }
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

  private onSaveSuccess(result) {
    this.isSaving = false;
    this.toggleInfo();
    this.onSave.emit(result);
  }

  private onSaveError() {
    this.isSaving = false;
    console.error('FAAAAAALEEEEEN');
  }

  private delete(report) {
    console.warn("ATTENTION! IT'S DELETING");
    this.reportService.delete(report.id).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);

  }

}
