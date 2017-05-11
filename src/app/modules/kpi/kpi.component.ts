import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KPIService } from './kpi.service';
import { Subscription } from "rxjs/Subscription";
import { Plan } from "app/models/plan.model";

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
  providers: [KPIService, NgxChartsModule]
})
export class KPIComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  plans: Plan[];
  selectedValue: any[];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public  kpiService: KPIService,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  loadData(){
    this.subscription = this.kpiService.loadPlans().subscribe(
        (res: Response) => this.plans = res.json().data,
        (res: Response) => console.log(res.json)
      )
  }

}



