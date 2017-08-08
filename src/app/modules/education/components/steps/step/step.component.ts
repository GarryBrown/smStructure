import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { EduResultService, EduConfigService, StepsService } from '../../../services';
import { UtilsService } from '../../../../../shared';
import { Report } from '../../../../../models';
import { AlertBarComponent } from "app/shared/components/alert-bar/alert-bar.component";

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnChanges {
    @Input() theme: any; // typeOfTeaching
    @Input() step: any;
    @Input() answeredQuestions: any; // teachingSpecialities
    @Input() report: Report;
    @Input() deliveryPoints: Array<any>;
    @Output() nextStep: EventEmitter<any> = new EventEmitter();
    @Output() toFinish: EventEmitter<any> = new EventEmitter();
    isFinish: boolean;

    deliveryPoint: any;
    prevStepsId: Array<number>;
    getSelected: any;
    disabled: boolean = false;

    constructor(
        private eduConfigService: EduConfigService,
        private utilsService: UtilsService,
        private stepsService: StepsService,
        private router: Router,
        private eduResultService: EduResultService,
        private alert: AlertBarComponent
    ) {
        this.isFinish = false;
        this.getSelected = this.utilsService.getSelectedSingle;
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.prevStepsId = this.setPrevSteps(this.theme.steps);
        this.setDP();
        this.isFinish = this.setIsFinish();
    }

    sendAnswer(answer) {
        answer.deliveryPointId = this.deliveryPoint.id;
        this.eduConfigService.getCurrentTeaching().subscribe(
            (teaching) => {
                answer.teachingId = teaching.id;
                this.stepsService.sendAnswer(answer).subscribe(
                    answer => {
                        this.answeredQuestions.steps[this.step.id].questions[answer.typeOfTeachingQuestionId].answer.id = answer.id
                    },
                    err => {
                        this.alert.open("Произошла ошибка. Ответ не сохранен")
                        console.error(` sendAnswer ${err}`)
                    }
                    //подключи алерт сервис ('Произошла ошибка. Ответ не сохранен')
                )
            },
            (err) => console.error(err)
        )
    }

    setIsFinish(): boolean {
        let stepsIndexes = this.theme.steps.map(step => step.orderBy).sort(this.utilsService.sortNumber);
        return this.step.orderBy === stepsIndexes[stepsIndexes.length - 1];
    }

    next() {
        if (!this.answeredQuestions.steps[this.step.id].deliveryPoint) {
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
        this.answeredQuestions.steps[this.step.id].deliveryPoint = dp;
    }

    setDP() {
        if (this.prevStepsId && this.prevStepsId.length !== 0) {
            if (this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint) {
                this.deliveryPoint = this.answeredQuestions.steps[this.prevStepsId[this.prevStepsId.length - 1]].deliveryPoint;
            }
        }
        if ((this.deliveryPoint === null || this.deliveryPoint === undefined) &&
            this.answeredQuestions &&
            this.answeredQuestions.steps[this.step.id] &&
            this.answeredQuestions.steps[this.step.id].deliveryPoint) {
            this.deliveryPoint = this.answeredQuestions.steps[this.step.id].deliveryPoint;
        }
    }

    goToResult() {
        this.eduResultService.setCurrentAnswer(this.answeredQuestions);
        this.toFinish.emit(true);
    }

    disableNext(): boolean {
        return this.theme.questions.some((question) =>
            this.answeredQuestions.steps[this.step.id].questions[question.id] === null)
    }

}
