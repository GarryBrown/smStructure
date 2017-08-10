import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


import { EduConfigService } from '../../../services';
import { AlertBarComponent } from '../../../../../shared';
import { Report } from "../../../../../models";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input() teaching: any;
  @Input() report: Report;
  @Input() deliveryPoints: Array<any>;
  lastStep: any;
  subscription: Subscription;
  deliveryPoint: any;
  constructor(
    private eduConfigService: EduConfigService,
    private alertService: AlertBarComponent,
    private router: Router
  ) {
  }

  ngOnInit() {
    // console.log(this.teaching.teachingSpecialities.steps);
  }

  ngOnChanges() {
    if (this.teaching) {
      this.deliveryPoint = this.applyDeliveryPoint(this.teaching);
      this.lastStep = this.applyLastStep(this.teaching);
    }
  }

  applyLastStep(teaching) {
    return teaching.typeOfTeaching.steps[teaching.typeOfTeaching.steps.length - 1]
  }

  applyDeliveryPoint(teaching) {
    // console.log(teaching.teachingSpecialities.steps)
    // console.log(teaching.typeOfTeaching.steps[teaching.typeOfTeaching.steps.length - 1].id)
    return teaching.teachingSpecialities.steps[teaching.typeOfTeaching.steps[teaching.typeOfTeaching.steps.length - 1].id].deliveryPoint
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  save() {
    let vm = this;
    this.subscription = this.eduConfigService.partiallyUpdate(this.teaching).subscribe(
      (success) => {
        this.alertService.open('Обучение успешно завершено!');
        setTimeout(() => {
          this.redirect()
        }, 1500);
      },
      (error) => this.alertService.open('Ошибка при сохранении обучения!')
    )
  }

  disableSave(): boolean {
    if (!this.teaching.strongSuit || !this.teaching.zoneOfGrowth || !this.teaching.ability || !this.teaching.kpi) {
      return true;
    }
    return false;
  }

  redirect() {
    this.router.navigate(['/edu-result']);
  }
}
