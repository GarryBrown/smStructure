import { Component, OnInit, Input, OnChanges } from '@angular/core';

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

  answer: any = new Object();
  comment: string;

  constructor() { 
    this.comment = '';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.answeredQuestions);
    console.log(this.prevStepsId.length - 1);
    if (this.prevStepsId.length !== 0) {
      if (this.question && this.answeredQuestions && this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]][this.question.id].answer.comment) {
        this.comment = this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]][this.question.id].answer.comment;
      }
    }
  }

  getAnswer(answer) {
    console.log(answer);
    this.answer = answer;
    if (!this.answeredQuestions[this.step.id][this.question.id]) {
      this.answeredQuestions[this.step.id][this.question.id] = new Object();
    }
    this.answeredQuestions[this.step.id][this.question.id].answer = answer;
    this.answeredQuestions[this.step.id][this.question.id].answer.comment = this.comment;
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

  changeComment(event) {
    let comment = event.target.value;
    this.comment = comment;
    if (!this.answeredQuestions[this.step.id][this.question.id]) {
      this.answeredQuestions[this.step.id][this.question.id] = new Object();
      this.answeredQuestions[this.step.id][this.question.id].answer = new Object();
    }
    this.answeredQuestions[this.step.id][this.question.id].answer.comment = comment;
  }

  setComment() {

  }

}
