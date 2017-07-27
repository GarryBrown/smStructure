import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UtilsService } from '../../../../../../shared';
import { StepsService } from '../../../../services/steps.service'

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
  @Output() sendAnswer: EventEmitter<any> = new EventEmitter();

  answer: any = new Object();
  comment: string;
  getSelected: any;

  constructor(
    private stepsService: StepsService,
    private utilsService: UtilsService,
  ) {
    this.comment = '';
    this.getSelected = this.utilsService.getSelectedAnswer;
  }

  ngOnInit() {
  }

  ngOnChanges() {

    if (!this.onlyLast && this.prevStepsId.length !== 0 &&
      this.question && this.answeredQuestions &&
      this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].questions[this.question.id].answer.comment) {
      this.comment = this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].questions[this.question.id].answer.comment;
    }

    if (this.question && this.answeredQuestions && this.answeredQuestions.steps[this.step.id].questions[this.question.id] &&
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer) {
      this.answer = this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer;
      if (this.comment === '' && this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment !== null) {
        this.comment = this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment;
      }
    }
  }

  getAnswer(answer) {
    let isNew = false;
    let answerId;
    this.answer = answer;
    if (!this.answeredQuestions.steps[this.step.id].questions[this.question.id]) {
      isNew = true;
      this.answeredQuestions.steps[this.step.id].questions[this.question.id] = new Object();
    }
    answerId = isNew ? null : this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.id;
    this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer = answer;
    this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment = this.comment;

    this.sendChanges(answerId, this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer)
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
    let isNew = false;
    let answerId;
    let comment = event.target.value;
    this.comment = comment;
    if (!this.answeredQuestions.steps[this.step.id].questions[this.question.id]) {
      isNew = true;
      this.answeredQuestions.steps[this.step.id].questions[this.question.id] = new Object();
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer = new Object();
    }
    answerId = isNew ? null : this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.id;

    this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment = comment;

    this.sendChanges(answerId, this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer)
  }


  sendChanges(answerId, answer) {

    let teachingSpecialities = {
      id: answerId,
      typeOfTeachingStepId: this.step.typeOfTeachingStep.id,
      typeOfTeachingQuestionId: this.question.id,
      typeOfTeachingAnswerId: answer.typeOfAnswer.id,
      result: answer.value,
      comment: this.comment
    }

    this.sendAnswer.emit(teachingSpecialities)
  }


}
