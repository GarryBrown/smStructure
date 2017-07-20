import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EduResultService } from './edu-result.service';
import { DatepickerModule } from 'angular2-material-datepicker'

@Component({
  selector: 'app-edu-result',
  templateUrl: './edu-result.component.html',
  styleUrls: ['./edu-result.component.scss']
})
export class EduResultComponent implements OnInit, OnDestroy {
  @Input() testRangeDate: Date;
  results: any;
  subscription: Subscription;
  isLoading: boolean;
  eduResult: Array<any>;
  model;
  date: Date;
  disabled: boolean;
  categories: Array<any>;
  routes: Array<any>;
  themes: Array<any>;
  eduResultTheme;
  itog: Array<any> = [];
  sum: number = 0;
  constructor(
    private eduResultService: EduResultService,
  ) {
    this.isLoading = true;
    this.testRangeDate = new Date();
  }

  ngOnInit() {

    this.subscription = this.eduResultService.getCurrentAnswer().subscribe(
      answer => this.onSucces(answer, this.onSuccessResult),
      err => console.error('Ouups')
    )

    this.subscription = this.eduResultService.getEduResult()
      .subscribe((data: any) => {
        this.onSuccessResult(data)
      },
      error => console.log("oops")
      )

    this.subscription = this.eduResultService.getCategories()
      .subscribe((data: any) => {
        this.categories = data.data,
          console.log(this.categories);
      });

    this.subscription = this.eduResultService.getRoutes()
      .subscribe((data: any) => {
        this.routes = data.data,
          console.log(this.categories);
      });

    this.subscription = this.eduResultService.getThemes()
      .subscribe((data: any) => {
        this.themes = data.data,
          console.log(this.categories);
      });

  }
  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSelect(date: Date) {
    console.log("onSelect: ", date);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSucces(data: any, cb: any) {
    this.isLoading = false;
    cb.bind(this)(data);
  }

  onSuccessResult(data) {
    this.eduResult = data.data;
    this.eduResult.map(theme => {
      theme.themes.map(value =>
        this.sum = this.sum + value.value);
    });
  }
}
