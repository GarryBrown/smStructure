import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Agent } from "app/models/agent.model";
import { KPIService } from "app/modules/kpi/kpi.service";
import { FilterbarComponent } from "app/modules/kpi/filterbar/filterbar.component";
@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailTOComponent implements OnInit {
  agents: Array<any>;
  selectedAgents: Array<any>;
  headerColumns: Array<string> = ["Маршрут", "Цель", "Факт", "%", "Прогноз", "Прогноз %", "GAP", "План на день"];

  constructor(
    private kpiService: KPIService
  ) { }

  ngOnInit() {
    this.kpiService.loadPlanDetails()
    .map(response => response.json().data)
    .subscribe(data => {
      this.agents = data;
      console.log(this.agents);
    }, error => console.log(error))
  }

}
