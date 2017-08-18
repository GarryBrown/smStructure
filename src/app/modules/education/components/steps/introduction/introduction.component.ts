import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EduConfigService } from "../../../services";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  providers: [EduConfigService]
})
export class IntroductionComponent implements OnInit {
  @Input() theme;
  @Output() beginSteps: EventEmitter<any> = new EventEmitter();
  coordinates: any;
  coords: any = new Object();

  constructor(private eduConfig: EduConfigService) { }

  ngOnInit() {

  }

  begin() {
    this.beginSteps.emit(true);
    this.setLocalStorage();
  }

  setLocalStorage() {
    this.eduConfig.getLocation()
      .then(
      coords => {
        this.coordinates = coords,
          // console.log(this.coordinates.coords.latitude),
          // console.log(this.coordinates.coords.longitude),
          this.coords.longitude = this.coordinates.coords.longitude,
          this.coords.latitude = this.coordinates.coords.longitude,
          localStorage.setItem("coords", JSON.stringify(this.coords))
      },
      error => console.error(error)
      )
  }
}
