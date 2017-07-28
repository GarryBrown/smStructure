import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


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
  subscription: Subscription;

  constructor(
    private eduConfigService: EduConfigService,
    private alertService: AlertBarComponent,
    private router:Router
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
    this.subscription.unsubscribe();
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

  redirect() {
    this.router.navigate(['/edu']);
  }
}
