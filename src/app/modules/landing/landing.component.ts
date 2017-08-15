import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  btn_back: boolean;
  backgroundImageStyle: SafeStyle

  constructor(private route: Router,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.backgroundImageStyle = this.getBackgroundImageStyle();

  }

  private getBackgroundImageStyle() {
    let backgroundImage = '../../../assets/images/technology-man-laptop-analytics-data-ss-1920.jpg';

    // sanitize the style expression
    const style = `background-image: url(${backgroundImage})`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
