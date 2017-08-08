import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @Input() theme;
  @Output() beginSteps: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  begin() {
    this.beginSteps.emit(true);
  }
}
