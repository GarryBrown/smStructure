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

  constructor(private salaryService: SalaryService, private http: Http) { }

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
    let originSalaries = data[0];
    this.user = data[1];

    this.salaries = originSalaries.filter((salary) => {
      return this.user && this.user.id !== salary.staff.userId;
    })

    originSalaries.map(salary => {
      if (this.salaries && this.user && this.user.id === salary.staff.userId) {
        this.userSalary = salary;
        this.userSalary.sum = this.userSalary.salarySpecialities.reduce((sum, speciality) => {
          return sum + speciality.salary;
        }, 0);
      }
      salary.sum = salary.salarySpecialities.reduce((sum, speciality) => {
        return sum + speciality.salary;
      }, 0);
    })
  }
}
