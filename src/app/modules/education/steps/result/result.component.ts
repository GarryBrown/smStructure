import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ResultService } from './result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {

  qualities;
  subscription;

  getSelected: any;
  developmentZones: Array<any>;
  strengths: Array<any>;
  listQuality: Array<any> = [];

  constructor(private resultService: ResultService) {
    this.getSelected = resultService.getSelected;
  }

  ngOnInit() {

    // this.resultService.getQualities() // note, removed this.countries = 
    // .subscribe(
    //     (data:any) => this.qualities = data,
    //     error => console.error()
    // );
    this.subscription = this.resultService.getQualities()
      .subscribe(
      (data: any) => {
        this.qualities = data.data,

          console.log(this.qualities)

      },
      error => console.log("oops")
      )

    console.log("-------------------------------");


  }

  ngOnChanges() {
    if (this.strengths) {

    }

  }


  ngOnDestroy() {
    this.subscription.unsubscrube();
  }

  check(currentList) {
      this.developmentZones = this.strengths;
      console.log("eeee");
  }

  copyObj(quality) {
    let copyQualities = [];
    quality.map(indicator => copyQualities.push(Object.assign({}, quality)));
    return copyQualities;
  }
 



}
