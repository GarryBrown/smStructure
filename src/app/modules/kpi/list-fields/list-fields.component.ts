import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PlanDetailService } from '../plan-detail/plan-detail.service';
import { Route, Report, Indicator, Field } from '../../../models';

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.scss'],
})
export class ListFieldsComponent implements OnInit {
  @Input() indicator: Indicator;
  @Input() allFields: Array<Field>;
  @Output() fieldsChange: EventEmitter<Array<Field>> = new EventEmitter();

  getSelected: any;

  constructor(
    private pdService: PlanDetailService,
  ) {
    this.getSelected = pdService.getSelected;
  }

  ngOnInit() {
  }

  allSelected(event, indicator) {
    if (event.checked) {
      indicator.planFields = this.allFields;
    } else {
      indicator.planFields = [];
    }
  }

  onChangeFields(fields) {
    this.fieldsChange.emit(fields);
  }

}
