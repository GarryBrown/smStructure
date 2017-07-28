import { Component, OnInit, Inject } from '@angular/core';
import { ALL, SCH, EDU, TEACHING, STORECHECK } from '../../education.constants';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { EduConfigService } from '../../services';
import { StepsService } from '../../services';
import { UtilsService } from '../../../../shared';
import { Event, Route, Report } from '../../../../models';
import { Http } from '@angular/http'


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
  isFinished: boolean;

  types: Array<string> = [
    TEACHING,
    STORECHECK
  ];

  constructor(
    private http: Http,
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
    console.log(this.event)
    console.log(this.access)
  }


  loadTeaching(id) {
    this.stepsService.find(id).subscribe(
      (data: any) => this.onSuccess(data, this.onSuccessTeaching),
    );
  }

  loadCommonObj() {
    if (this.event.type === TEACHING) {
      if (this.event.id) {
        this.loadTeaching(this.event.id);
      } else {
        this.onSuccessTeaching({})
      }

    } else if (this.event.id && this.event.type === STORECHECK) {
      // this.loadStoreCheck();
    }
  }

  beginTeaching() {
    console.log('begin')
    let position: any = { loc: '' };
    let time, metrics;
    this.eduConfigService.getLocation().then(
      (latLng) => {
        position = latLng ? latLng : position;
        time = new Date();
        return this.eduConfigService.createMetrics(position, time, this.teaching.id, this.teaching.route.id, this.teaching.staff.id)
      },
      (err) => {
        time = new Date();
        return this.eduConfigService.createMetrics(position, time, this.teaching.id, this.teaching.route.id, this.teaching.staff.id)
      }
    ).then(
      (metricObj) => {
        this.eduConfigService.partiallyUpdate(this.teaching).subscribe(
          (obj) => this.goToTeaching(obj),
          (err) => console.error(err)
        )
        // this.goToTeaching(this.teaching);
      }
      );
  }

  goToTeaching(teaching) {
    console.log(teaching)
    // what is the foo below???? For why?
    // this.eduConfigService.findReport(this.report.id).subscribe(
    //   (data) => { console.log(data) },
    //   (err) => console.error(err),
    // )
    this.eduConfigService.setCurrentTeaching(teaching);
    this.router.navigate(['edu/theme', this.teaching.id]).then(
      (result) => this.dialogRef.close(false),
      (reason) => console.error(`navigate error ${reason}`)
    );
  }

  createTeaching() {
    this.teaching.dateOfStart = this.event.date;
    // this.teaching.route = this.event.route;
    this.http.get(`api/routes/${this.event.route.id}`).subscribe(
      (data: any) => {
        data = data.json();
        console.log(data)
        this.teaching.route = data;
        this.teaching.staff = data.staff;
        this.teaching.kpi = '';
        this.teaching.ability = '';
        this.teaching.strongSuit = '';
        this.teaching.zoneOfGrowth = '';
        console.log(this.teaching)
        this.eduConfigService.createTeaching(this.teaching).subscribe(
          (teaching) => {
            // вставить алерт сервис
            this.close(teaching);
          },
          (error) => { }// вставить алерт сервис
        )
      },
      (err) => console.error(err)
    )





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

    // для избежания многочисленных проверок, опишите и создайте класс в соответствии с объектом
    // у которого уже будут необходимые пустые поля, я не успел, сорян
    if (data.teachingSpecialities) {
      this.isStarted = this.isStartedEdu(data.teachingSpecialities);
    } else {
      this.isStarted = false;
    }
    this.isFinished = this.teaching.kpi ? true : false;
  }
  onError(api: string, err: any) {
    console.error(`error in ${api} => ${err}`);
  }

  close(result?) {
    this.dialogRef.close(result);
  }

  isStartedEdu(spesiality) {
    let isStarted;
    if (spesiality.steps) {
      for (let key in spesiality.steps) {
        if (spesiality.steps[key].questions || spesiality.steps[key].deliveryPoint) {
          isStarted = true
        }
      }
    } else {
      isStarted = false;
    }
    console.log(isStarted)
    return isStarted;
  }


}
