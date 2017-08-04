import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EduResultService, resultFilter } from '../../services';
import { DatepickerModule } from 'angular2-material-datepicker'
import { AlertBarComponent } from "app/shared";


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
    private alert: AlertBarComponent
  ) {
    this.isLoading = true;
    this.resultFilter = this.setFilter();
  }

  ngOnInit() {
    this.subscription = this.eduResultService.getEduResult()
      .subscribe(
      (data: any) => this.onSuccessResult(data),
      error => this.alert.open("Не удалось получить данные :("))
    // console.log("oops"))
    // this.subscriptionCategories = this.eduResultService.getCategories()
    //   .subscribe((data: any) => this.categories = data.data);
    // this.subscriptionRoutes = this.eduResultService.getRoutes()
    //   .subscribe((data: any) => this.routes = data.data, );
    // this.subscriptionThemes = this.eduResultService.getThemes()
    //   .subscribe((data: any) => this.themes = data.data);



  }

  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSucces(data: any, cb: any) {
    this.isLoading = false;
    cb.bind(this)(data);
  }

  onSuccessResult(data) {
    this.eduResult = data;
    this.eduResult.map(date => {


      console.log(date.staff)
      var date1 = new Date(date.staff.startDate);
      var date2 = new Date();
      var milliseconds = date2.getTime() - date1.getTime();

      var days = date2.getDate() - date1.getDate();
      if (days < 0) {
        days += new Date(date2.getFullYear(), date2.getMonth() - 1, 0).getDate() + 1;
        date2.setMonth(date2.getMonth() - 1);
      }

      var months = date2.getMonth() - date1.getMonth();
      if (months < 0) {
        months += 12;
        date2.setFullYear(date2.getFullYear() - 1);
      }


      var years = date2.getFullYear() - date1.getFullYear();
      if (years === 0) {
        date.staff.workTime = months + " мес.";
      } else {
        date.staff.workTime = years + " г. " + months + " мес.";
      }
      if (months === 0) {
        date.staff.workTime = years + " г. ";
      }

      console.log(date.staff.workTime);


    })
    console.log("----------")
    console.log(data);
    // this.eduResult.map(theme => {
    //   theme.themes.map(value =>
    //     this.sum = this.sum + value.value);
    // });


  }

  loadData() {
    this.eduResultService.getEduResultData(this.resultFilter).subscribe(
      (data: any) => console.log(data.data),
      error => this.alert.open("не удалось получить данные :(")
      // console.error(error)
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      // this.subscriptionThemes.unsubscribe();
      // this.subscriptionRoutes.unsubscribe();
      // this.subscriptionCategories.unsubscribe();
    }

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


