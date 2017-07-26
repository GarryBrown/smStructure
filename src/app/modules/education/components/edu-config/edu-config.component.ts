import { Component, OnInit, Inject } from '@angular/core';
import { ALL, SCH, EDU } from '../../education.constants';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { EduConfigService } from '../../services/edu-config.service';
import { StepsService } from '../../services/steps.service';
import { UtilsService } from '../../../../shared';
import { Event, TypeOfEvent, Route, Report } from '../../../../models';

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
  teaching: any;
  getSelected: any;
  isStarted: boolean;
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
    this.loadCommonObj();
    this.eduConfigService.getRoutes().subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessRoutes),
      (error) => this.onError('getRoutes', error)
    )
    this.eduConfigService.getReports().subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessReports),
      (error) => this.onError('getRoutes', error)
    )
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

  onSuccessTeaching(data) {
    this.teaching = data;
    this.isStarted = this.teaching.position ? true : false;
  }
  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }

  loadTeaching() {
    this.stepsService.find(1).subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessTeaching),
    );
  }

  loadCommonObj() {
    if (this.event.type.description === 'Обучение') {
      this.loadTeaching();
    } else {
      // this.loadStoreCheck();
    }
  }

  beginTeaching() {
    let latLng = null;
    let time;
    this.eduConfigService.getLocation().then(
      (latLng) => {
        latLng = latLng;
        time = new Date();
        this.teaching.position = latLng;
        this.teaching.dateTime = time;
        // this.eduConfigService.update(this.teaching).subscribe(
        //   (obj) => this.goToTeaching(obj),
        //   (err) => console.error(err)
        // )
        this.goToTeaching(this.teaching);
      },
      (err) => console.error('Promise getLocation')
    );
  }

  goToTeaching(teaching) {
    this.eduConfigService.setCurrentTeaching(teaching);
    this.router.navigate(['edu/theme', this.teaching.id]).then(
      (result) => this.dialogRef.close(false),
      (reason) => console.error(`navigate error ${reason}`)
    );
  }

}
