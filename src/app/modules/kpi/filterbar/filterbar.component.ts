import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../plan-detail/plan-detail.service';
import { Report } from '../../../models';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit, OnChanges {
  @Input() indicators: Array<any>;
  @Input() currentIndicators: Array<any>;
  @Input() currentReport: Report;
  @Output() updateCurrentIndicators: EventEmitter<Array<any>>  = new EventEmitter<Array<any>>();
  getSelected;
  allFields: Array<any>;
  constructor(
    private pdService: PlanDetailService,
  ) { 
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    console.log(this.currentIndicators);
    console.log(this.indicators);
    this.allFields = this.indicators[0].planFields;
  }


  ngOnChanges() {
    console.log(this.currentIndicators);
    console.log(this.indicators);
  }


  changeFields() {
    console.log('change in filterbar');
    console.log(this.currentIndicators);
    this.updateCurrentIndicators.emit(this.currentIndicators);
  }

  save() {
    
  }

}
