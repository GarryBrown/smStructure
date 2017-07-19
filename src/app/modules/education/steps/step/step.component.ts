import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { EduResultService } from '../../edu-result/edu-result.service';
import { EduConfigService } from '../../edu-config/edu-config.service';
import { UtilsService } from '../../../../shared';
import { Report } from '../../../../models';

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnChanges {
    @Input() theme: any;
    @Input() step: any;
    @Input() answeredQuestions: any;
    @Input() report: Report;
    @Output() nextStep: EventEmitter<any> = new EventEmitter();
    @Output() toFinish: EventEmitter<any> = new EventEmitter();
    isFinish: boolean;
    listDP: Array<any>;
    deliveryPoint: any;
    prevStepsId: Array<number>;
    getSelected: any;

    constructor(
        private eduConfigService: EduConfigService,
        private utilsService: UtilsService,
        private router: Router,
        private eduResultService: EduResultService
    ) {
        this.isFinish = false;
        this.listDP = [];
        this.getSelected = this.utilsService.getSelectedSingle;
    }

    ngOnInit() { }

    ngOnChanges() {
        this.prevStepsId = this.setPrevSteps(this.theme.steps);
        this.setDP();

        this.isFinish = this.setIsFinish();
        if (this.step && this.step.typeOfTeachingStep.isNeedSelectDP && this.listDP.length === 0) {
            this.eduConfigService.getDelivetyPoints().subscribe(
                (data: any) => this.listDP = data.data,
                (error) => console.log(error)
            )
        }

    }

    setIsFinish(): boolean {
        let stepsIndexes = this.theme.steps.map(step => step.orderBy).sort(this.utilsService.sortNumber);
        return this.step.orderBy === stepsIndexes[stepsIndexes.length - 1];
    }

    next() {
        if (!this.answeredQuestions[this.step.id].deliveryPoint) {
            this.changeDelivetyPoint(this.deliveryPoint);
        }
        this.nextStep.emit(this.step);
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

    changeDelivetyPoint(dp) {
        this.answeredQuestions[this.step.id].deliveryPoint = dp;
    }

    setDP() {
        if (this.prevStepsId && this.prevStepsId.length !== 0) {
            if (this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint) {
                this.deliveryPoint = this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint;
            }
        }
        if (this.deliveryPoint === undefined &&
            this.answeredQuestions &&
            this.answeredQuestions[this.step.id] &&
            this.answeredQuestions[this.step.id].deliveryPoint) {
            this.deliveryPoint = this.answeredQuestions[this.step.id].deliveryPoint;
        }
    }

    goToResult() {
        this.eduResultService.setCurrentAnswer(this.answeredQuestions);
        this.toFinish.emit(true);
    }

    disableNext(): boolean {
        return false
    }



}
