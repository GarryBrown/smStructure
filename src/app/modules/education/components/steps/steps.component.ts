import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { StepsService } from '../../services';
import { EduConfigService } from '../../services'
import { UtilsService } from '../../../../shared';
import { Report } from '../../../../models';
import { AlertBarComponent } from "../../../../shared";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})

export class StepsComponent implements OnInit {
  subscription: any;
  subscriptionServer: Subscription;
  subscriptionRoute: Subscription;
  subscriptionService: Subscription;

  teaching: any;
  stepsIndex: Array<number> = [];
  currentStepIndex: number;
  showIntro: boolean;
  showResult: boolean;
  answeredQuestions: any;
  deliveryPoints: Array<any>
  report: Report;

  constructor(
    private route: ActivatedRoute,
    private stepsService: StepsService,
    private utilsService: UtilsService,
    private eduConfigService: EduConfigService,
    private alert: AlertBarComponent
  ) {
    this.currentStepIndex = 0;
    this.showIntro = false;
    this.showResult = false;
    this.answeredQuestions = new Object();
  }

  ngOnInit() {
    this.getTeaching();
  }

  /* Загрузить объект из сервиса *
  **     if (undefined)          *
  **       загрузить с сервера   *
  **     Отсортировать           *
  **     Определить текущий      */
  getTeaching() {
    this.subscriptionService = this.eduConfigService.getCurrentTeaching().subscribe(
      (teaching: any) => {
        if (teaching !== undefined) {
          this.onSuccess(teaching);
        } else {
          this.loadFromRouteParam();
        }
      },
      err => this.alert.open("Не удалось получить данные :(")
    );
  }

  loadFromRouteParam() {
    this.subscriptionRoute = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
  }


  load(id) {
    this.stepsService.find(id).subscribe((teaching: any) => {
      this.eduConfigService.setCurrentTeaching(teaching);
      this.onSuccess(teaching);

    });
  }

  onSuccess(teaching) {
    console.log(teaching);
    console.log(teaching.teachingSpecialities.steps);
    this.teaching = teaching;
    this.getDeliveryPoints(teaching.route.id);
    if (teaching.planReport.id) this.getReport(teaching.planReport.id);
    this.teaching.typeOfTeaching.steps = this.sortStep(this.teaching.typeOfTeaching.steps);
    this.teaching.typeOfTeaching.questions = this.sortQuestion(this.teaching.typeOfTeaching.questions);
    this.stepsIndex = this.setSteps(this.teaching.typeOfTeaching.steps);
    this.currentStepIndex = this.setCurrentStep(this.setCurrentStepID, this.teaching);
    this.setAnsweredQuestions(this.teaching.typeOfTeaching.steps);
  }

  sortStep(steps) {
    console.info(steps)
    return steps.sort(this.utilsService.sortByOrderBy);
  }

  sortQuestion(questions) {
    questions.map(question => {
      question.answers = this.sortAnswers(question.answers);
      return question;
    });
    return questions.sort(this.utilsService.sortByOrderBy);
  }

  sortAnswers(answers) {
    return answers.sort(this.utilsService.sortByOrderBy);
  }

  setSteps(steps) {
    return steps.map(step => step.id);
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
    } else {
      this.showResult = true;
      return 0;
    }
  }

  setCurrentStepID(steps) {
    return this.stepsIndex.find(id =>
      this.teaching.typeOfTeaching.questions.find((question: any) => {
        if (steps.steps[id].questions[question.id] === null) return id;
      })
    )
  }

  isStepBegined(stepId: number, results: any): boolean {
    return this.teaching.typeOfTeaching.questions.some(question => results.steps[stepId].questions[question.id] !== null)
  }

  getCurrentTime() {
    return new Date();
  }

  getReport(id) {
    this.subscription = this.eduConfigService.findReport(id)
      .subscribe((data: any) => {
        this.report = data;
      },
      error => this.alert.open("Не удалось получить данные :(")
      // console.error("oops getReport")
      )
  }

  getDeliveryPoints(id) {
    this.eduConfigService.getDelivetyPoints(id).subscribe(
      (data: any) => this.deliveryPoints = data,
      (error) => this.alert.open("Не удалось получить данные :(")
      // console.error(error)
    )
  }
}


interface teaching {
  id: number,
  typeOfTeaching: {
    id: number,
    description: string,
    textBody: string,
    questions: Array<any>,
    steps: Array<any>
  },
  teachingSpecialities: {
    steps: any;
  }

}
