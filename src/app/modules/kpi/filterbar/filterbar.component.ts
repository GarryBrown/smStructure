import { Component, OnInit, Input } from '@angular/core';

import { Report } from '../../../models';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {
  @Input() indicators: Array<any>;
  @Input() currentIndicators: Array<any>;
  @Input() currentReport: Report;
  constructor() { }

  ngOnInit() {
    console.log(this.indicators);
    console.log(this.currentIndicators);
  }

}
