import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { SidebarService } from './sidebar.service';
import { SidebarToggleService } from '../../core/utils/sidebar-toggle.service';
import { PrincipalService } from '../../core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  mode: string;
  show: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private sidebartoggle: SidebarToggleService,
    private principal: PrincipalService
  ) {
    this.getUser();
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

  setInitMode() {
    this.mode = this.updateMode(window.innerWidth);
  }

  updateMode(width: number) {
    if (width >= 888) {
      return 'side';
    }
    return 'over';
  }
}
