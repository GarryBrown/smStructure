import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomChartComponent} from './custom-chart.component';
import {RoundProgressService} from './custom-chart.service';
import {RoundProgressEase} from './custom-chart.ease';
import {RoundProgressConfig} from './custom-chart.config';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomChartComponent],
  exports: [CustomChartComponent],
  providers: [RoundProgressService, RoundProgressEase, RoundProgressConfig]
})
export class CustomChartModule {};

export * from './custom-chart.component';
export * from './custom-chart.service';
export * from './custom-chart.ease';
export * from './custom-chart.config';