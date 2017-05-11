import { Component, OnInit, OnDestroy, ViewContainerRef, Input, SimpleChanges, ElementRef } from '@angular/core';
import { Plan } from "app/models/plan.model";
import { CustomChartModule } from "app/components/customChart/custom-chart.module";

@Component({
  selector: 'plan-chart',
  templateUrl: './plan-chart.component.html',
  styleUrls: ['./plan-chart.component.scss'],
  providers: [CustomChartModule]
})
export class PlanChartComponent implements OnInit, OnDestroy {
   @Input() plan: Plan
    data: any[] = [];
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    unitsText = '';

    valueFormatting = (text) => {
      const percent = parseFloat((this.plan.fact / (this.plan.plan / 100)).toFixed(2)) + '%';
      return percent;
    }

    constructor() {
    }

    ngOnInit() {
      console.log(this.plan);
      this.data.push({name: this.plan.name, value: this.plan.fact});
      // this.unitsText = ' ('+this.plan.fact+')';
    }

    ngOnDestroy() {
    }

    
    onSelect(event) {
      console.log(event);
    }

}