import { Component, OnInit, OnDestroy, Input } from '@angular/core';

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

  indicators: Array<Indicator>;
  allFields: Array<any>;
  details = false;
  getSelected: any;

  constructor(
    private pdSerivce: PlanDetailService,
    private reportService: ReportConfigService,
  ) {
    this.getSelected = pdSerivce.getSelected;
  }

  ngOnInit() {
    if (this.report) {
      this.pdSerivce.getIndicatorsByRoutes(this.report.routes).subscribe(
        (data: any) => {
          this.indicators = data.data;
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
    // this.isSaving = true;
    console.log(this.report);
    this.reportService.update(this.report).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
  }

  private onSaveSuccess(result) {
    // this.isSaving = false;
    this.toggleInfo();
  }

  private onSaveError() {
    // this.isSaving = false;
    this.toggleInfo();
  }

  private delete(report) {
    console.warn("ATTENTION! IT'S DELETING");
    this.reportService.delete(report.id).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
  }

}
