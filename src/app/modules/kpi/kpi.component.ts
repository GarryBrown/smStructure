import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KPIService } from './kpi.service';
import { Subscription } from "rxjs/Subscription";
import { Plan } from "app/models/plan.model";
import { Agent } from "app/models/agent.model";

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
  providers: [KPIService, NgxChartsModule]
})
export class KPIComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  agents: Array<Agent> = [];
  // plans: Array<Plan> = [];
  plansss: Array<Array<Plan>> = [];
  selectedAgents: Array<Agent> = [];
  selectedPeriod: string;
  predictionEnabled: boolean = false;
  planTypes: Array<number> = [];
  periods = [
    'День',
    'Месяц'
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kpiService: KPIService,
  ) { }
  
  predictionChange(event) {
    this.predictionEnabled = event.checked;
  }

  selectedAgentsChange() {
    this.planTypes = [];
    this.plansss = [];
    this.selectedAgents[0].plans.forEach((plan) => {
      if (!this.planTypes.includes(plan.typeplanid)) {
        this.planTypes.push(plan.typeplanid);
      }
    });
    this.planTypes.forEach((typeId) => {
      var planByType: Array<Plan> = [];
      this.selectedAgents.forEach((agent) => {
        agent.plans.forEach((plan) => {
          if (plan.typeplanid === typeId) {
            planByType.push(plan);
          }
        });
      });
      this.plansss.push(planByType);
    });
    console.log(this.plansss);
  }



  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  loadData() {
    this.subscription = this.kpiService.loadPlans().subscribe(
      (res: Response) => {
        this.agents = res.json().data;
      },
      (res: Response) => console.log(res.json)
    )
  }

}



