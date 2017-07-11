import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Input() step: any;
  @Input() answeredQuestions: any;
  answer: any = new Object();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.answeredQuestions);
    
  }

  getAnswer(answer) {
    console.log(answer);
    this.answer = answer;
    this.answeredQuestions[this.step.id][this.question.id] = answer;
  }

}
