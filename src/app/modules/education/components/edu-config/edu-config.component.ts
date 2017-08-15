import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

import { EduConfigService, StepsService } from '../../services';
import { UtilsService } from '../../../../shared';
import { Event, Route, Report } from '../../../../models';
import { ALL, SCH, EDU, TEACHING, STORECHECK } from '../../education.constants';

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
  public access: string;
  routes: Array<Route>;
  reports: Array<Report>;
  themes: Array<any>;
  report: Report;
  teaching: any;
  getSelected: any;
  isStarted: boolean;
  isFinished: boolean;
  // for select type teaching
  types: Array<string> = [
    STORECHECK,
    TEACHING
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
    this.eduConfigService.getRoutes().subscribe(
      (data: any) => this.onSuccessRoutes(data),
      (error) => this.onError('getRoutes', error)
    )
    this.eduConfigService.getReports().subscribe(
      (data: any) => this.onSuccessReports(data),
      (error) => this.onError('getRoutes', error)
    )
    this.eduConfigService.getThemes().subscribe(
      (data: any) => this.onSuccessThemes(data),
      (error) => this.onError('getRoutes', error)
    )
    this.loadCommonObj();
  }

  loadCommonObj() {
    if (this.event.type === TEACHING) {
      if (this.event.id) {
        this.loadTeaching(this.event.id);
      } else {
        console.warn('Event hasn"t "id" field! And I create a new one!');
        this.onSuccessTeaching({})
      }

    } else if (this.event.id && this.event.type === STORECHECK) {
      // this.loadStoreCheck();
    }
  }

  loadTeaching(id) {
    this.stepsService.find(id).subscribe(
      (data: any) => this.onSuccessTeaching(data),
    );
  }

  beginTeaching() {
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
      }
      );
  }

  // переход в обучение
  goToTeaching(teaching) {
    // console.log(teaching)
    this.teaching = teaching;
    // очистка "кеша"
    this.eduConfigService.setCurrentTeaching(undefined);
    this.router.navigate(['edu/theme', this.teaching.id]).then(
      (result) => this.dialogRef.close(false),
      (reason) => console.error(`navigate error ${reason}`)
    );
  }

  createTeaching() {
    this.teaching.dateOfStart = this.event.date;
    this.teaching.route = this.event.route;
    this.http.get(`api/routes/${this.event.route.id}`).subscribe(
      (data: any) => {
        data = data.json();
        this.teaching.route = data;
        this.teaching.staff = data.staff;
        this.teaching.kpi = '';
        this.teaching.ability = '';
        this.teaching.strongSuit = '';
        this.teaching.zoneOfGrowth = '';
        this.eduConfigService.createTeaching(this.teaching).subscribe(
          (teaching) => {
            teaching.type = this.event.type;
            // вставить алерт сервис
            this.close(teaching);
          },
          (error) => { console.error('createTeaching error') }// вставить алерт сервис
        )
      },
      (err) => console.error(err)
    )
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

  isStartedEdu(spesiality: any): boolean {
    let isStarted: boolean;
    if (spesiality.steps) {
      for (let key in spesiality.steps) {
        if (this.eduConfigService.isQuestionsHasAnswer(spesiality.steps[key].questions) || spesiality.steps[key].deliveryPoint) {
          isStarted = true
        }
      }
    } else {
      isStarted = false;
    }
    return isStarted;
  }


  changeEventType(event) {
    if (event === TEACHING) {
      this.teaching = {}
    } else {
      this.teaching = null;
    }
  }

  saveEvent() {
    if (this.event.type === TEACHING) {
      this.createTeaching();
    } else {
      console.warn('Я ещё не обучен создавать store-check')
    }
  }

  startEvent() {
    if (this.event.type === TEACHING) {
      this.beginTeaching();
    } else {
      console.warn('Я ещё не обучен начинать store-check')
    }
  }

  continueEvent() {
    if (this.event.type === TEACHING) {
      this.goToTeaching(this.teaching);
    } else {
      console.warn('Я ещё не обучен продолжпть store-check')
    }
  }


}
