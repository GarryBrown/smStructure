import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { EduConfigService } from '../../../services';
import { AlertBarComponent } from '../../../../../shared';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input() teaching: any;
  lastStep: any;
  subscription;

  constructor(
    private eduConfigService: EduConfigService,
    private alertService: AlertBarComponent
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.teaching) {
      console.log('set teaching')
      this.lastStep = this.teaching.typeOfTeaching.steps[this.teaching.typeOfTeaching.steps.length - 1];
      console.log(this.lastStep)
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscrube();
  }

  save() {
    this.subscription = this.eduConfigService.partiallyUpdate(this.teaching).subscribe(
      (success) => this.alertService.open('Обучение успешно завершено!'),
      (error) => this.alertService.open('Ошибка при сохранении обучения!')
    )
  }

  disableSave(): boolean {
    if (!this.teaching.strongSuit || !this.teaching.zoneOfGrowth || !this.teaching.ability || !this.teaching.kpi) {
      return true;
    }
    return false;
  }
}
