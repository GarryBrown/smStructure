import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnChanges {
  @Input() theme: any;
  @Input() step: any;
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  isFinish: boolean;
  constructor() { 
    this.isFinish = false;
  }

  ngOnInit(
  ) {

  }

  ngOnChanges() {
    console.log(this.step);
    this.isFinish = this.setIsFinish();

  }


  setIsFinish(): boolean {
    let stepsIndexes = this.theme.steps.map (step => step.orderBy).sort();
    return this.step.orderBy === stepsIndexes[stepsIndexes.length - 1];
  }

  next() {
    this.nextStep.emit(this.step);
  }

}
