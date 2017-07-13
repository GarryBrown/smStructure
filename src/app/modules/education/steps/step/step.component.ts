import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { EduResultService } from '../../edu-result/edu-result.service';
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
    deliveryPoint: any;
    getRange: any;
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
        this.getRange = this.utilsService.rangeArray;
        this.getSelected = this.utilsService.getSelectedSingle;
    }

    ngOnInit(
    ) {

    }

    ngOnChanges() {
        console.log(this.step);
        this.prevStepsId = this.setPrevSteps(this.theme.steps);
        this.setDP();
        this.isFinish = this.setIsFinish();
        if (this.step && this.step.typeOfTeachingStep.isNeedSelectDP && this.listDP.length === 0) {
            this.eduConfigService.getRoutes().subscribe(
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
        this.nextStep.emit(this.step);
        if (!this.answeredQuestions[this.step.id].deliveryPoint) {
            this.changeDelivetyPoint(this.deliveryPoint);
        }
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

    goToResult() {
        console.log(this.answeredQuestions);
        this.eduResultService.setCurrentAnswer(this.answeredQuestions);
        this.router.navigate(['edu/result']);
    }

    changeDelivetyPoint(dp) {
        console.log(this.answeredQuestions[this.step.id]);
        this.answeredQuestions[this.step.id].deliveryPoint = dp;
        console.log(this.answeredQuestions[this.step.id]);
    }


    setDP() {
        console.log('setDP');
        console.log(this.answeredQuestions);
        if (this.prevStepsId && this.prevStepsId.length !== 0) {
            console.log('first if');
            console.log(this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]]);
            if (this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint) {
                console.log('i set the');
                console.log(this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint);
                this.deliveryPoint = this.answeredQuestions[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint;
            }
        }


    }



}
