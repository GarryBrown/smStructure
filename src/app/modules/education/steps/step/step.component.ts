import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { EduConfigService } from '../../edu-config/edu-config.service';
import { UtilsService } from '../../../../shared';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnChanges {
  @Input() theme: any;
  @Input() step: any;
  @Input() answeredQuestions: any;
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  isFinish: boolean;
  listDP: Array<any>;
  getRange: any;

  constructor(
    private eduConfigService: EduConfigService,
    private utilsService: UtilsService
  ) { 
    this.isFinish = false;
    this.listDP = [];
    this.getRange = this.utilsService.rangeArray;
  }

  ngOnInit(
  ) {

  }

  ngOnChanges() {
    console.log(this.step);
    this.isFinish = this.setIsFinish();
    if (this.step && this.step.typeOfTeachingStep.isNeedSelectDP && this.listDP.length === 0) {
      this.eduConfigService.getRoutes().subscribe(
        (data: any) => this.listDP = data.data,
        (error) => console.log(error)
      )
    }


  }


  setIsFinish(): boolean {
    let stepsIndexes = this.theme.steps.map (step => step.orderBy).sort(this.utilsService.sortNumber);
    return this.step.orderBy === stepsIndexes[stepsIndexes.length - 1];
  }

  next() {
    this.nextStep.emit(this.step);
  }

}
