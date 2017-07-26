import { Component, OnInit, Inject } from '@angular/core';
import { ALL, SCH, EDU } from '../../education.constants';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { EduConfigService } from '../../services/edu-config.service';
import { StepsService } from '../../services/steps.service';
import { UtilsService } from '../../../../shared';
import { Event, Route, Report } from '../../../../models';


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
  themes: Array<any>;
  report: Report;
  teaching: any;
  getSelected: any;
  isStarted: boolean;
  types: Array<string> = [
    'store-check',
    'teaching'
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
    this.eduConfigService.getThemes().subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessThemes),
      (error) => this.onError('getRoutes', error)
    )
  }


  loadTeaching(id) {
    this.stepsService.find(id).subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessTeaching),
    );
  }

  loadCommonObj() {
    if (this.event.type === 'teaching') {
      this.loadTeaching(this.event.id);
    } else {
      // this.loadStoreCheck();
    }
  }

  beginTeaching() {
    console.log('begin')
    let position: any = { loc: '' };
    let time, metrics;
    this.eduConfigService.getLocation().then(
      (latLng) => {
        console.log('then1 res')
        position = latLng ? latLng : position;
        time = new Date();
        return this.eduConfigService.createMetrics(position, time, this.teaching.id, this.teaching.route.id, this.teaching.staff.id)
      },
      (err) => {
        console.log('then1 rej')
        time = new Date();
        return this.eduConfigService.createMetrics(position, time, this.teaching.id, this.teaching.route.id, this.teaching.staff.id)
      }
    ).then(
      (metricObj) => {
        console.log('then2 res')
        // this.eduConfigService.update(this.teaching).subscribe(
        //   (obj) => this.goToTeaching(obj),
        //   (err) => console.error(err)
        // )
        this.goToTeaching(this.teaching);
      }
      );
  }

  goToTeaching(teaching) {
    console.log(teaching)
    this.eduConfigService.findReport(this.report.id).subscribe(
      (data) => { console.log(data) },
      (err) => console.error(err),
    )
    this.eduConfigService.setCurrentTeaching(teaching);
    this.router.navigate(['edu/theme', this.teaching.id]).then(
      (result) => this.dialogRef.close(false),
      (reason) => console.error(`navigate error ${reason}`)
    );
  }


  onSuccess(data: any, cb: any) {
    cb.bind(this)(data);
  }

  onSuccessRoutes(data) {
    this.routes = data;
  }

  onSuccessReports(data) {
    this.reports = data;
  }

  onSuccessThemes(data) {
    this.themes = data;
  }

  onSuccessTeaching(data) {
    this.teaching = data;
    this.isStarted = this.teaching.position ? true : false;
  }
  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }

  close() {
    this.dialogRef.close(false);
  }


}
