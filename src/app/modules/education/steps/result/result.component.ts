import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StepsService } from '../steps.service';
import { AlertBarComponent } from '../../../../shared';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input() teaching: any;
  lastStep;
  subscription;

  constructor(
    private stepsService: StepsService,
    private alertService: AlertBarComponent
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.teaching) {
      this.lastStep = this.teaching.typeOfTeaching.steps[this.teaching.typeOfTeaching.steps.length - 1];
    }
  }

  ngOnDestroy() {
    // this.subscription.unsubscrube();
  }

  save() {
    this.stepsService.update(this.teaching).subscribe(
      (success) => this.alertService.open('Обучение успешно завершено!'),
      (error) => this.alertService.open('Ошибка при сохранении обучения!')
    )

  }
}
