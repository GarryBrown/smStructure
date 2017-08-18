import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  myMap: any;


  constructor() {
  }

  ngOnInit() {
    ymaps.ready(this.init.bind(this))
  }


  init() {
    this.myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 7
    });

  }

  addPlacemark() {
    let placemark = new ymaps.Placemark([55.76, 37.64], {
      hintContent: 'Москва!',
      balloonContent: 'Столица России'
    });
    console.log(this.myMap)
    this.myMap.geoObjects.add(placemark);
  }

}
