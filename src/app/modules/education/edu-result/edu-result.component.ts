import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EduResultService } from './edu-result.service';

@Component({
  selector: 'app-edu-result',
  templateUrl: './edu-result.component.html',
  styleUrls: ['./edu-result.component.scss']
})
export class EduResultComponent implements OnInit, OnDestroy {
  results: any;
  subscription: Subscription;
  isLoading: boolean;
  eduResult: Array<any>;

  constructor(
    private eduResultService: EduResultService
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.subscription = this.eduResultService.getCurrentAnswer().subscribe(
      answer => this.onSucces(answer, this.onSuccessResult),
      err => console.error('Ouups')
    )
    
    this.subscription = this.eduResultService.getEduResult()
      .subscribe((data: any) => 
        this.eduResult = data.data,
      error => console.log("oops")
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSucces(data: any, cb: any) {
    this.isLoading = false;
    cb.bind(this)(data);
  }

  onSuccessResult(data) {
    console.log(data)
    this.results = data;
  }


}
