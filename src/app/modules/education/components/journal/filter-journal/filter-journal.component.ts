import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EduConfigService } from '../../../services';
import { Route } from '../../../../../models';

@Component({
  selector: 'app-filter-journal',
  templateUrl: './filter-journal.component.html',
  styleUrls: ['./filter-journal.component.scss']
})
export class FilterJournalComponent implements OnInit {
  @Output() onOparams = new EventEmitter();
  routes: Array<Route>
  filterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private eduConfigService: EduConfigService
  ) { }

  ngOnInit() {
    this.loadSelectData();
    this.filterForm = this.formBuilder.group({
      dateFrom: ['', Validators.required],
      dateTo: '',
      route: '',
      associate: '',
      type: '',
      status: ''
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid);
    if (valid) {
      this.onOparams.emit(value)
    }
  }



  loadSelectData() {
    this.eduConfigService.getRoutes().subscribe(
      (data: any) => this.routes = data
    )
  }

}
