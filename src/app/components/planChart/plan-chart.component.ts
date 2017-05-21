import { Component, OnInit, OnDestroy, ViewContainerRef, Input, SimpleChanges, ElementRef, OnChanges } from '@angular/core';
import { Plan } from "app/models/plan.model";
import { CustomChartModule } from "app/components/customChart/custom-chart.module";
import { Router } from "@angular/router";

@Component({
  selector: 'plan-chart',
  templateUrl: './plan-chart.component.html',
  styleUrls: ['./plan-chart.component.scss'],
  providers: [CustomChartModule]
})
export class PlanChartComponent implements OnInit, OnDestroy, OnChanges {
  // @Input() plan: Plan
  @Input() plans: Array<Plan> = [];
  sumPlan: number;
  sumFact: number;
  name: string;
  unitsText = '';

  valueFormatting = (text) => {
    const percent = parseFloat((this.sumFact / (this.sumPlan / 100)).toFixed(2)) + '%';
    return percent;
  }

  constructor(private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sumPlan = this.plans.reduce((sum, plan) => {
      return sum + plan.plan
    }, 0);
    this.sumFact = this.plans.reduce((sum, plan) => {
      return sum + plan.fact
    }, 0);
    this.name = this.plans[0].name;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onClickPlan(event) {
    this.router.navigate(['kpi/detail/' + this.plans[0].id]);
  }

}