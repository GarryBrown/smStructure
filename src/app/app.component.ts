import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { PrincipalService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrincipalService],
})
export class AppComponent implements OnInit {
  mode: string;
  opened: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private principal: PrincipalService) {
    this.setInitMode();
    Observable.fromEvent(window, 'resize')
      .debounceTime(200).map((e: Event) => e.target)
      .subscribe(
      (w: Window) => {
        console.log(w.innerWidth);
        this.mode = this.updateMode(w.innerWidth);
      }
      );
  }

  ngOnInit() {
    this.principal.getUserState().subscribe(
      (user) => {
        this.checkUser(user);
        this.user = user;
      }
    );
  }

  // swipe(action = this.SWIPE_ACTION.RIGHT) {
  //   console.log('swipe');
  //   console.log(this.user);
  //   console.log(action);
  //   if (this.user && action === 'swipeleft') {
  //     this.opened = false;
  //   }
  //   if (this.user && action === 'swiperight') {
  //     this.opened = true;
  //   }
  // }

  getUser() {
    this.principal.identity()
      .then(user => {
        this.checkUser(user);
        this.user = user;
      }, error => {
        this.opened = null;
      });
  }

  checkUser(user) {
    if (user) {
      this.opened = true;
    } else {
      this.hideNav();
    }
  }

  hideNav() {
    this.opened = false;
  }

  toggleNav(opened) {
    console.log(opened);
    this.opened = opened;
  }
  setInitMode() {
    this.mode = this.updateMode(window.innerWidth);
  }

  updateMode(width: number) {
    if (width >= 888) {
      return 'side';
    }
    return 'over';
  }

  closeSideNav() {
    this.opened = false;
    
  }
}
