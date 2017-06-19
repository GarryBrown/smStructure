import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {TranslateService} from '@ngx-translate/core';

import { SidebarService } from './sidebar.service';
import { SidebarToggleService } from '../../core/utils/sidebar-toggle.service';
import { PrincipalService } from '../../core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  show: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private sidebartoggle: SidebarToggleService,
    // private translate: TranslateService,
    private principal: PrincipalService
  ) {
    sidebartoggle.missionConfirmed$.subscribe(show => this.show = show);

    principal.userAuth$.subscribe(user => {
      this.user = user
      this.resetToggle();
    }, error => {
      this.user = null;
    });
    this.getUser();
  }

  toggle() {
    console.log(this.user);
    this.show = !this.show;
    this.sidebartoggle.sidebarToggle(this.show);
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    if (this.user && action === 'swipeleft') {
      this.toggle();
    }
  }

  ngOnInit() {
  }

  logout() {
    this.sidebarService.logout().subscribe(
      s => console.log(s),
      er => console.log(er),
      () => {
        this.principal.authenticate(null);
        this.resetToggle();
        this.router.navigate(['/login']).then(
          s => console.log(s),
          er => console.log(er)
        );
      }
    );
  }

  resetToggle() {
    this.show = this.user ? true : false;
    this.sidebartoggle.sidebarToggle(this.show);
  }

  getUser() {
    this.sidebarService.getAccount()
      .then(user => {
        this.user = user;
        this.resetToggle();
      }, error => {
        this.user = null;
      });
  }
}
