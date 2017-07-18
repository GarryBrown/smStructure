import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResultService } from './result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input() theme: any;
  @Input() answeredQuestions: any;

  qualities;
  lastStep;
  subscription;

  getSelected: any;
  developmentZones: Array<any>;
  strengths: Array<any>;
  listQuality: Array<any> = [];

  constructor(private resultService: ResultService) {
    this.getSelected = resultService.getSelected;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.theme) {
      this.lastStep = this.theme.steps[this.theme.steps.length - 1];
      console.log(this.lastStep);
    }

  }


  ngOnDestroy() {
    // this.subscription.unsubscrube();
  }






}
