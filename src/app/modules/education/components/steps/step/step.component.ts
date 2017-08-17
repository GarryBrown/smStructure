import { Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { EduResultService, EduConfigService, StepsService } from '../../../services';
import { UtilsService, AlertBarComponent } from '../../../../../shared';
import { Report } from '../../../../../models';

@Component({
    selector: 'app-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnChanges, OnDestroy {
    @Input() theme: any; // typeOfTeaching
    @Input() step: any;
    @Input() route: any;
    @Input() answeredQuestions: any; // teachingSpecialities
    @Input() report: Report;
    @Input() deliveryPoints: Array<any>;
    @Output() nextStep: EventEmitter<any> = new EventEmitter();
    @Output() toFinish: EventEmitter<any> = new EventEmitter();

    isFinish: boolean;
    isShowListQuestions: boolean;
    deliveryPoint: any;
    prevStepsId: Array<number>;
    getSelected: any;
    disabled: boolean = true;
    teachingSubscription: Subscription;
    visitDay: any;
    deliveryPointOnRoute: any;
    isOnRoute: boolean;
    isBegin: boolean;

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
        this.visitDay = this.utilsService.dateToString(new Date());
        this.isOnRoute = true;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.teachingSubscription) {
            this.teachingSubscription.unsubscribe();
        }
    }

    ngOnChanges() {
        this.prevStepsId = this.setPrevSteps(this.theme.steps);
        this.isFinish = this.setIsFinish();

        if (this.route && this.deliveryPoint === undefined) {
            this.eduConfigService.getDeliveryPoints(this.route.id, this.visitDay).subscribe(
                (data: any) => this.deliveryPoints = data,
                (error) => console.log(error)
            )
        }
    }

    sendAnswer(answer) {
        answer.deliveryPointId = this.deliveryPoint.id;
        this.teachingSubscription = this.eduConfigService.getCurrentTeaching().subscribe(
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
                )
            },
            (err) => this.alert.open("Не удалось получить данные :(")
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

    goToResult() {
        if (!this.answeredQuestions.steps[this.step.id].deliveryPoint) {
            this.changeDelivetyPoint(this.deliveryPoint);
        }
        this.eduResultService.setCurrentAnswer(this.answeredQuestions);
        this.toFinish.emit(true);
    }

    disableNext(): boolean {
        return this.theme.questions.some((question) =>
            this.answeredQuestions.steps[this.step.id].questions[question.id] === null)
    }

    showListQuestions() {
        if (this.deliveryPoint) {
            this.isShowListQuestions = true;
            this.isBegin = true;
        }
        // this.set_localstorage();

    }

    set_localstorage() {
        let a: Date = new Date();
        localStorage.setItem("a", JSON.stringify(a));
    }

    onRoute(event) {
        this.deliveryPoint = null;
        if (event.checked === true) {
            this.eduConfigService.getDeliveryPoints(this.route.id, this.visitDay).subscribe(
                (data: any) => this.deliveryPoints = data,
                (error) => console.log(error)
            )

        } else {
            this.eduConfigService.getDeliveryPoints(this.route.id).subscribe(
                (data: any) => this.deliveryPoints = data,
                (error) => console.log(error)
            )
        }
    }
}
