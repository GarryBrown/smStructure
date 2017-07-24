import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, ElementRef } from '@angular/core';

@Component({
  selector: 'app-kpi-chart',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.scss']
})
export class KpiChartComponent implements OnInit, AfterViewInit, OnChanges {
  context: CanvasRenderingContext2D;
  color = "red";

  cur = 250;
  max = 500;
  procent: number;
  procentR: number;

  @ViewChild("chart") chart: ElementRef;
  constructor() {
    this.procent = this.cur * 100 / this.max;
    this.procentR = Math.PI * this.procent / 100;
    this.procentR = (this.cur / this.max * Math.PI) - Math.PI;

    console.log(`this.procent : ${this.procent}`);
    console.log(`this.procentR : ${this.procentR}`);

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.chart);
    let width = this.chart.nativeElement.width - 50;
    this.context = this.chart.nativeElement.getContext('2d');

    this.drawArc(this.context, width, 2* Math.PI, 'pink');
    this.drawArc(this.context, width, this.procentR, 'yellow');

  }

  drawArc(canvas, width, radPersent, color) {
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.lineWidth = 10;
    canvas.shadowOffsetX = 3;
    canvas.shadowOffsetY = 3;
    canvas.shadowBlur = 10;
    canvas.shadowColor = 'gray';
    canvas.arc(width / 2 + 25, width / 2 + 25, width / 2, Math.PI, radPersent, false);
    canvas.stroke();
  }

  onMouseover(e) {
    console.log(e);
    // this.context.lineTo();
  }

  ngOnChanges() {

  }

}
