import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { StepsService } from './steps.service';

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

  constructor(
    private route: ActivatedRoute,
    private stepsService: StepsService
  ) {
    this.currentStepIndex = 0;
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
  }

  load(id) {
    this.stepsService.find(id).subscribe((data: any) => {
      console.log(data.data);
      this.theme = data.data;
      this.stepsIndex = this.setSteps(this.theme.steps);
      console.log(this.stepsIndex);
    });
  }

  setSteps(steps) {
    return steps.map(step => step.orderBy).sort();
  }


  nextStep(curStep) {
    this.currentStepIndex++;
  }


}
