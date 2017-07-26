import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EduResultService, resultFilter } from './edu-result.service';
import { DatepickerModule } from 'angular2-material-datepicker'

@Component({
  selector: 'app-edu-result',
  templateUrl: './edu-result.component.html',
  styleUrls: ['./edu-result.component.scss']
})
export class EduResultComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  resultFilter: resultFilter;
  /* list select */
  categories: Array<any>;
  routes: Array<any>;
  themes: Array<any>;
  /* result value*/
  eduResult: Array<any>;
  sum: number = 0;
  /* subscriptions */
  subscription: Subscription;
  subscriptionThemes: Subscription;
  subscriptionRoutes: Subscription;
  subscriptionCategories: Subscription;

  constructor(
    private eduResultService: EduResultService,
  ) {
    this.isLoading = true;
    this.resultFilter = this.setFilter();
  }

  ngOnInit() {
    this.subscription = this.eduResultService.getEduResult()
      .subscribe(
      (data: any) => this.onSuccessResult(data),
      error => console.log("oops"))
    this.subscriptionCategories = this.eduResultService.getCategories()
      .subscribe((data: any) => this.categories = data.data);
    this.subscriptionRoutes = this.eduResultService.getRoutes()
      .subscribe((data: any) => this.routes = data.data, );
    this.subscriptionThemes = this.eduResultService.getThemes()
      .subscribe((data: any) => this.themes = data.data);

  }

  formatDate(date: Date): string {
    return date.toLocaleString();
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

  loadData() {
    this.eduResultService.getEduResultData(this.resultFilter).subscribe(
      (data: any) => console.log(data.data),
      error => console.error(error)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionThemes.unsubscribe();
    this.subscriptionRoutes.unsubscribe();
    this.subscriptionCategories.unsubscribe();
  }

  setFilter() {
    return {
      dateFrom: null,
      dateTo: null,
      themes: [],
      routes: [],
      category: null
    }
  }

}


