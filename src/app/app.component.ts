import { Component, OnInit } from '@angular/core';

import { PrincipalService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrincipalService],
})
export class AppComponent implements OnInit {
  opened: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private principal: PrincipalService) {

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


}
