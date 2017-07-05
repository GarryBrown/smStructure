import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { StepsService } from './steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  subscription: Subscription;
  theme: any;

  constructor(
    private route: ActivatedRoute,
    private stepsService: StepsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
  }

  load(id) {
    this.stepsService.find(id).subscribe((data: any) => {
      console.log(data.data);
      this.theme = data.data;
    });
  }

}
