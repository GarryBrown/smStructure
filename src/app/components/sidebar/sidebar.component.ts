import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarService } from './sidebar.service';
import { PrincipalService } from '../../core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter();
  mode: string;
  show: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private principal: PrincipalService
  ) {
    this.getUser();

  }

  ngOnInit() {

    this.principal.getUserState().subscribe(
      (user) => {
        this.user = user;
      }, error => {
        this.user = null;
      });

  }

  logout() {
    this.sidebarService.logout().subscribe(
      s => console.log(s),
      er => console.log(er),
      () => {
        this.principal.authenticate(null);
        this.router.navigate(['/login']).then(
          s => console.log(s),
          er => console.log(er)
        );
      }
    );
  }

  getUser() {
    this.principal.identity()
      .then(user => {
        this.user = user;
      }, error => {
        this.user = null;
      });
  }

  // swipe(action = this.SWIPE_ACTION.RIGHT) {
  //   if (this.user && action === 'swipeleft') {
  //     this.toggle();
  //   }
  // }

  hideSideNav() {
    if (window.innerWidth <= 888) {
      this.hideSidebar.emit(false);
    }
  }
}
