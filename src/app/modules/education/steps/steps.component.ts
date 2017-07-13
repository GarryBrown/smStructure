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

  subscription: Subscription;
  theme: any;
  stepsIndex: Array<number> = [];
  currentStepIndex: number;
  showIntro: boolean;
  answeredQuestions: any;
  report: Report;

  constructor(
    private route: ActivatedRoute,
    private stepsService: StepsService,
    private utilsService: UtilsService,
    private eduConfigService: EduConfigService
  ) {
    this.currentStepIndex = 0;
    this.showIntro = true;
    this.answeredQuestions = new Object();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
    this.getReport();
    this.getLocation();
  }

  load(id) {
    this.stepsService.find(id).subscribe((data: any) => {
      console.log(data.data);
      this.theme = data.data;
      this.theme.steps = this.sortStep(this.theme.steps);
      this.stepsIndex = this.setSteps(this.theme.steps);
      this.setAnsweredQuestions(this.theme.steps);
      console.log(this.stepsIndex);
      console.log(this.theme.steps);
    });
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
    console.log('beginSteps');
    this.showIntro = false;
  }

  setAnsweredQuestions(steps) {
    steps.map(step => {
      this.answeredQuestions[step.id] = new Object();
    });
    console.log(this.answeredQuestions);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getCurrentTime() {
    return new Date();
  }

  getReport() {
    this.eduConfigService.getCurrentEdu().subscribe(
      (obj: any) => this.report = obj.report
    )
  }


}
