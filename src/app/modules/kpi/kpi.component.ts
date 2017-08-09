import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from "rxjs/Subscription";
import { } from '@types/googlemaps';

import { KPIService } from './services/kpi.service';
import { Plan } from "app/models/plan.model";
import { Agent } from "app/models/agent.model";

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
  providers: [KPIService]
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
  obj = document.getElementById('example');
  @ViewChild('example') example;
  map;
  googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCYFMTJ_5Be9n1PNTmzJskZqRWusvEngaM';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public kpiService: KPIService,
  ) { }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  addMap() {
    document.body.appendChild(Object.assign(document.createElement('script'), {
      type: 'text/javascript',
      src: this.googleMapsUrl,
      onload: () => this.initMap()
    }))
  }

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
  }

  ngOnInit() {
    this.loadData();
    this.addMap();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
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



