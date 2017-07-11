import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() step: any;
  @Input() steps: Array<any>;
  @Input() answeredQuestions: any;

  answer: any = new Object();
  prevStepsId: Array<number>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.answeredQuestions);
    this.prevStepsId = this.setPrevSteps(this.steps);
  }

  getAnswer(answer) {
    console.log(answer);
    this.answer = answer;
    this.answeredQuestions[this.step.id][this.question.id] = answer;
  }

  setPrevSteps(steps) {
    let stepsIds = [];
    steps.map(step => stepsIds.push(step.id));
    console.log(stepsIds);
    let index: number = stepsIds.indexOf(this.step.id);
    if (index > 0) {
      console.log(stepsIds.indexOf(this.step.id))
      stepsIds = stepsIds.slice(0, stepsIds.indexOf(this.step.id));
    } else {
      stepsIds = [];
    }

    return stepsIds;
  }

}
