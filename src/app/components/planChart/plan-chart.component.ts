import { Component, OnInit, OnDestroy, ViewContainerRef, Input, SimpleChanges, ElementRef } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Plan } from "app/models/plan.model";

@Component({
  selector: 'plan-chart',
  templateUrl: './plan-chart.component.html',
  styleUrls: ['./plan-chart.component.scss'],
  providers: [NgxChartsModule]
})
export class PlanChartComponent implements OnInit, OnDestroy {
    data: any[] = [];
    view = undefined;
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    unitsText = '';
    valueFormatting: Function = (text) => {
      return this.plan.name
    }

    @Input() plan: Plan

    constructor() {
    }

    ngOnInit() {
      console.log(this.plan);
      this.data.push({name: this.plan.name, value: this.plan.fact});
    }

    ngOnDestroy() {
    }

    
  onSelect(event) {
    console.log(event);
  }

}