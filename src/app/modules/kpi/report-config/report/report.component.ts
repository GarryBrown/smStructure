import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../../plan-detail/plan-detail.service';
import { ReportConfigService } from '../report-config.service';
import { Route, Report, Indicator, Field } from '../../../../models';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

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
          this.report.indicators = this.copyObj(this.report.indicators);
          this.indicators = data.sort((a, b) => {
            if (a.description < b.description) {
              return -1;
            } else if (a.description > b.description) {
              return 1;
            } else {
              return 0;
            }
          });

          this.allFields = this.indicators[0].planFields;
        },
        err => console.log('error')
      )
    }
    


  }


  copyObj(indicators) {
    return indicators.map(indicator => Object.assign({}, indicator));
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

  onCheckRoutes(routes) {
    this.report.routes = routes;
  }
  onCheckIndicators(indicators) {
    this.report.indicators = indicators;
  }


} 
