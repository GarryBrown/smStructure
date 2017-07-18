import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { UtilsService } from '../../../../../shared';

@Component({
  selector: '[app-question]',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() step: any;
  @Input() steps: Array<any>;
  @Input() answeredQuestions: any;
  @Input() prevStepsId: Array<number>;
  @Input() onlyLast: boolean;

  answer: any = new Object();
  comment: string;
  getSelected: any;

  constructor(
    private utilsService: UtilsService,
  ) {
    this.comment = '';
    this.getSelected = this.utilsService.getSelectedSingle;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    
    if (!this.onlyLast && this.prevStepsId.length !== 0 && 
      this.question && this.answeredQuestions &&
      this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]][this.question.id].answer.comment) {
      this.comment = this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]][this.question.id].answer.comment;
    }

    if (this.question && this.answeredQuestions && this.answeredQuestions[this.step.id][this.question.id] &&
      this.answeredQuestions[this.step.id][this.question.id].answer) {
      this.answer = this.answeredQuestions[this.step.id][this.question.id].answer;
      if (this.comment === '' && this.answeredQuestions[this.step.id][this.question.id].answer.comment !== undefined) {
        this.comment = this.answeredQuestions[this.step.id][this.question.id].answer.comment;
      }
    }
  }

  getAnswer(answer) {
    this.answer = answer;
    if (!this.answeredQuestions[this.step.id][this.question.id]) {
      this.answeredQuestions[this.step.id][this.question.id] = new Object();
    }
    this.answeredQuestions[this.step.id][this.question.id].answer = answer;
    this.answeredQuestions[this.step.id][this.question.id].answer.comment = this.comment;
    console.log(this.answeredQuestions);
  }

  setPrevSteps(steps) {
    let stepsIds = [];
    steps.map(step => stepsIds.push(step.id));
    let index: number = stepsIds.indexOf(this.step.id);
    if (index > 0) {
      stepsIds = stepsIds.slice(0, stepsIds.indexOf(this.step.id));
    } else {
      stepsIds = [];
    }
    return stepsIds;
  }

  changeComment(event) {
    let comment = event.target.value;
    this.comment = comment;
    if (!this.answeredQuestions[this.step.id][this.question.id]) {
      this.answeredQuestions[this.step.id][this.question.id] = new Object();
      this.answeredQuestions[this.step.id][this.question.id].answer = new Object();
    }
    this.answeredQuestions[this.step.id][this.question.id].answer.comment = comment;
  }


}
