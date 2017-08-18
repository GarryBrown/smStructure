import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UtilsService } from '../../../../../../shared';
import { StepsService } from '../../../../services'

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
  showAnswer: boolean;

  constructor(
    private stepsService: StepsService,
    private utilsService: UtilsService,
  ) {
    this.comment = '';
    this.getSelected = this.utilsService.getSelectedAnswer;
  }

  ngOnInit() {
    // var a = ["12", "2", "3", "1", "2", "6", "5", "9", "11", "67"]
    // var b = this.question.description.sort();
    // console.log(b);
    // // this.question.sortQuestion(this.question.description);
    // console.log(this.question.description);
  }

  ngOnChanges() {
    // миграция комментов
    if (!this.onlyLast && this.prevStepsId.length !== 0 &&
      this.question && this.answeredQuestions &&
      this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].questions[this.question.id].answer.comment) {
      this.comment = this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].questions[this.question.id].answer.comment;
    }
    // выдераем ответ и присваиваем локальной переменной и с комментом тоже самое
    if (this.question && this.answeredQuestions && this.answeredQuestions.steps[this.step.id].questions[this.question.id] &&
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer) {
      this.answer = this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer;
      if (this.comment === '' && this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment !== null) {
        this.comment = this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment;
      }
    }
    // прячем ответы вопросы на шаге показать
    if (this.step) {
      this.showAnswer = this.step.typeOfTeachingStep.isNeedAnswer;
    }
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

  getAnswer(answer) {
    let isNew = false;
    let answerId;
    this.answer = answer;
    if (!this.answeredQuestions.steps[this.step.id].questions[this.question.id]) {
      isNew = true;
      this.answeredQuestions.steps[this.step.id].questions[this.question.id] = new Object();
    }
    if (this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer === undefined ||
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.typeOfAnswer.id !== answer.typeOfAnswer.id) {
      // console.warn('SEND NEW OR UNIQUE ANSWER')
      answerId = isNew ? null : this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.id;
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer = answer;
      this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer.comment = this.comment;

      this.sendChanges(answerId, this.answeredQuestions.steps[this.step.id].questions[this.question.id].answer)
    }
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
    // console.warn('changeComment sendAnswer')
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
