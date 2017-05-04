import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  btn_back: boolean;
  constructor(private route: Router) {
  /*  console.log(route.url);
    if (route.url? '/signup' || route.url? '/login') {
      this.btn_back = true;
    }
    console.log(this.btn_back);*/
  }

  ngOnInit() {
  }

}
