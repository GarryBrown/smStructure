import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEncapsulation, OnDestroy } from '@angular/core';
import { SalaryService } from "app/modules/salary/salary.service";
import { Http } from "@angular/http";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})

export class SalaryComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  salaries: any;
  user: any;
  userSalary: any;
  details: boolean;
  originSalaries: any;

  constructor(
    private salaryService: SalaryService,
    private http: Http) { }

  ngOnInit() {
    this.subscription = this.salaryService.getSalariesAndUserSalary()
      .subscribe(data => {
        this.onSuccess(data)
      }, err => console.log(err)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSuccess(data) {
    this.originSalaries = data[0];
    this.user = data[1];

    this.salaries = this.originSalaries.filter((salary) => {
      console.log(salary.salarySpecialities.length)
      return this.user && this.user.id !== salary.staff.userId;
    })


    this.originSalaries.map(salary => {
      if (this.salaries && this.user && this.user.id === salary.staff.userId) {
        this.userSalary = salary;
        this.userSalary.sum = this.userSalary.salarySpecialities.reduce((sum, speciality) => {
          return sum + speciality.salary;
        }, 0);
      }
      this.sumSalary();
      this.avarageIndex();
    })
  }

  sumSalary() {
    this.originSalaries.map(salary => {
      salary.sumSalary = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.salary;
      }, 0);

      salary.sumPrediction = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.prediction;
      }, 0);
    })

  }

  avarageIndex() {
    this.originSalaries.map(salary => {
      salary.averageMinIndex = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.minIndex;
      }, 0);

      salary.averagePredictionIndex = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.predictionIndex;
      }, 0);

      salary.averageSalaryIndex = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.salaryIndex;
      }, 0);
    })
  }

  toggleInfo() {
    this.details = !this.details;
  }
}
