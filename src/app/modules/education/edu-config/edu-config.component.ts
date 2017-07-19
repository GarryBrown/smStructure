import { Component, OnInit } from '@angular/core';
import { ALL, SCH, EDU } from '../education.constants';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { EduConfigService } from './edu-config.service';
import { StepsService } from '../steps/steps.service';
import { UtilsService } from '../../../shared';
import { Event, TypeOfEvent, Route, Report } from '../../../models';

@Component({
  selector: 'app-edu-config',
  templateUrl: './edu-config.component.html',
  styleUrls: ['./edu-config.component.scss']
})
export class EduConfigComponent implements OnInit {
  all;
  sch;
  edu;
  public event: Event;
  public access;
  routes: Array<Route>;
  reports: Array<Report>;
  report: Report;
  getSelected: any;
  types: Array<TypeOfEvent> = [
    { id: 2, description: 'store-check' },
    { id: 1, description: 'Обучение' }
  ];

  constructor(
    private utilsService: UtilsService,
    public dialogRef: MdDialogRef<EduConfigComponent>,
    private eduConfigService: EduConfigService,
    private stepsService: StepsService,
    private router: Router
  ) {
    this.getSelected = utilsService.getSelectedSingle;
    this.all = ALL;
    this.sch = SCH;
    this.edu = EDU;
  }

  ngOnInit() {
    console.log(this.access);
    console.log(this.event);
    this.eduConfigService.getRoutes().subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessRoutes),
      (error) => this.onError('getRoutes', error)
    )
    this.eduConfigService.getReports().subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessReports),
      (error) => this.onError('getRoutes', error)
    )
  }

  startEvent() {
    console.log(this.event);
    let obj = {
      event: this.event,
      report: this.report,
    };
    this.loadTeaching();

  }

  close() {
    this.dialogRef.close(false);
  }

  onSuccess(data: any, cb: any) {
    cb.bind(this)(data.data);
  }

  onSuccessRoutes(data) {
    this.routes = data;
  }

  onSuccessReports(data) {
    this.reports = data;
  }

  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);

  }

 loadTeaching() {
    this.stepsService.getTeaching().subscribe((teaching: any) => {
      let data = teaching.data;
      // console.log(data);
      // console.log(data[0].id);
      this.eduConfigService.setCurrentTeaching(data[0]);
      this.router.navigate(['edu/theme', 1]).then(
        (result) => this.dialogRef.close(false),
        (reason) => console.error(`navigate error ${reason}`)
      );
    });
  }
}
