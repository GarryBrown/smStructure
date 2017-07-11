import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";


import { EducationService } from './education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public educationService: EducationService,
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe;
  }

  loadData() {
    // this.subscription = this.educationService.loadPlans().subscribe(
    //   (res: Response) => {
    //     this.agents = res.json().data;
    //   },
    //   (res: Response) => console.log(res.json)
    // )
  }

}



