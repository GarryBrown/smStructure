import { Component, OnInit, OnDestroy, ViewContainerRef, ElementRef } from '@angular/core';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public  kpiService: KPIService,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef
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



