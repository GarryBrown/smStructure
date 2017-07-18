import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { StepsService } from './steps.service';
import { EduConfigService } from '../edu-config/edu-config.service'
import { UtilsService } from '../../../shared';
import { Report } from '../../../models';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  subscriptionServer: Subscription;
  subscriptionRoute: Subscription;
  subscriptionService: Subscription;
  theme: any;
  results: any;
  stepsIndex: Array<number> = [];
  currentStepIndex: number;
  showIntro: boolean;
  showResult: boolean;
  answeredQuestions: any;
  report: Report;


  constructor(
    private route: ActivatedRoute,
    private stepsService: StepsService,
    private utilsService: UtilsService,
    private eduConfigService: EduConfigService
  ) {
    this.currentStepIndex = 0;
    this.showIntro = false;
    this.showResult = false;
    this.answeredQuestions = new Object();
  }

  ngOnInit() {
    //this.getReport();
    this.getLocation();
    this.getTeaching();
  }

  // Загрузить объект из сервиса
  //   if (undefined)
  //     загрузить с сервера
  // Отсортировать
  // Определить текущий
  getTeaching() {
    console.log('getTeaching');
    this.subscriptionService = this.eduConfigService.getCurrentTeaching().subscribe(
      (obj: any) => {
        if (obj !== undefined) {
          this.onSuccess(obj);
        } else {
          console.log("Loading from server");
          this.loadFromRouteParam();
        }
      },
      err => console.error(err)
    );
  }

  loadFromRouteParam() {
    this.subscriptionRoute = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
  }


  load(id) {
    this.stepsService.find(id).subscribe((teaching: any) => {
      this.onSuccess(teaching.data);
    });
  }

  onSuccess(teaching) {
    let data = teaching;
    console.log(data);
    this.theme = data.typeOfTeaching;
    this.results = data.teachingSpecialities;
    this.theme.steps = this.sortStep(this.theme.steps);
    this.stepsIndex = this.setSteps(this.theme.steps);

    console.log(this.results);
    this.currentStepIndex = this.setCurrentStep(this.setCurrentStepID, data);
    console.log(this.currentStepIndex);
    this.setAnsweredQuestions(this.theme.steps);
  }


  sortStep(steps) {
    return steps.sort(this.utilsService.sortByOrderBy);
  }

  setSteps(steps) {
    return steps.map(step => step.id);//.sort(this.utilsService.sortNumber);
  }

  nextStep(curStep) {
    this.currentStepIndex++;
  }

  beginSteps(event: boolean) {
    this.showIntro = false;
  }

  setFinish(set: boolean) {
    this.showResult = true;
  }

  setAnsweredQuestions(steps) {
    steps.map(step => {
      this.answeredQuestions[step.id] = new Object();
    });
  }

  setCurrentStep(cb, data) {
    let currentStepID = cb.bind(this)(data.teachingSpecialities);
    if (currentStepID) {
      let currentStep = this.stepsIndex.indexOf(currentStepID);
      if (currentStep === 0) {
        this.showIntro = !this.isStepBegined(currentStepID, data.teachingSpecialities);
      } else {
        this.showIntro = false;
      }
      return currentStep;
    } else if (data.commonComment) {
      this.showResult = true;
      return null;
    } else {
      this.showIntro = true;
      return 0;
    }
  }

  setCurrentStepID(steps) {
    return this.stepsIndex.find(id =>
      this.theme.questions.find(question => {
        if (steps[id][question.id] === undefined) return id;
      })
    )
  }

  isStepBegined(stepId: number, results: any): boolean {
    return this.theme.questions.some(question => results[stepId][question.id] !== undefined)
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getCurrentTime() {
    return new Date();
  }

  // getReport() {
  //   this.eduConfigService.getCurrentEdu().subscribe(
  //     (obj: any) => this.report = obj.report
  //   )
  // }


}
