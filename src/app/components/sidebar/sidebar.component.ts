import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


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
    private account: SidebarService,
    private sidebartoggle: SidebarToggleService,
    private translate: TranslateService,
    private principal: PrincipalService
  ) {
    translate.use('ru');
    console.log("=====SIDEBAR CONSTRUECTOR");
    // sidebartoggle.userAuth$.subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    //   this.resetToggle();
    // });
    sidebartoggle.missionConfirmed$.subscribe( show => this.show = show );

    principal.userAuth$.subscribe(user => {
      console.log(user);
      this.user = user
      this.resetToggle();
      } , error => {
      console.log('user is undefined');
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
    console.log("=====SIDEBAR ONINIT");
  }

  logout() {
    this.account.logout();
    this.principal.authenticate(null); // user logout emit
    this.resetToggle();
    this.router.navigate(['/login']);
  }


  resetToggle() {
    this.show = this.user ? true : false;
    this.sidebartoggle.sidebarToggle(this.show);
  }

  getUser() {
    this.account.getAccount()
      .then(user => {
        console.log(user);
        this.user = user;
        this.resetToggle();
      }, error => {
        console.log('user is undefined');
        this.user = null;
      });
  }
}
