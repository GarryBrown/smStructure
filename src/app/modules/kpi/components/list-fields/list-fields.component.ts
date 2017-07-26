import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../../services/plan-detail.service';
import { Route, Report, Indicator, Field } from '../../../../models';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.scss'],
})
export class ListFieldsComponent implements OnInit {
  @Input() indicator: Indicator;
  @Input() allFields: Array<Field>;
  @Output() fieldsChange: EventEmitter<Array<Field>> = new EventEmitter();
  disabled = false;
  getSelected: any;
  listFields: Array<Field>;

  constructor(
    private pdService: PlanDetailService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
    this.listFields = this.copyObj(this.indicator);
  }

  onChangeFields(fields) {
    this.fieldsChange.emit(fields);
  }

  onCheckPlanFields(fields) {
    this.indicator.planFields = fields;
    this.onChangeFields(fields);
    // this.disabled = this.allFields.some(indicator => this.indicator.planFields.length === 0);
    // console.log(this.disabled);
    // console.log(fields);
  }
  copyObj(indicator) {
    let copyIndicators = [];
    indicator.planFields.map(field => copyIndicators.push(Object.assign({}, field)));
    return copyIndicators;
  }

}
