import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from './core/utils/sidebar-toggle.service';
import { PrincipalService } from './core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrincipalService],
})
export class AppComponent implements OnInit {
  show: boolean;
  user: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private sidebartoggle: SidebarToggleService,
    private principal: PrincipalService) {
  }


  ngOnInit() {
    this.principal.identity(false).then(
      user => this.user = user
    );
    // this.principal.userAuth$.subscribe(user => {
    //   console.log(user);
    //   this.user = user
    // },
    //   error => {
    //     console.log('user is undefined');
    //     this.user = null;
    //   });
    // this.sidebartoggle.userAuth$.subscribe(user => {
    //   console.log(user);
    //   this.user = user;
    // });

    this.sidebartoggle.missionConfirmed$.subscribe(show => { this.show = show; });
  }

  // swipe(action = this.SWIPE_ACTION.RIGHT) {
  //   console.log('swipe');
  //   console.log(this.user);
  //   console.log(action);
  //   if (this.user && action === 'swipeleft') {
  //     this.show = false;
  //     this.sidebartoggle.sidebarToggle(this.show);
  //   }
  //   if (this.user && action === 'swiperight') {
  //     this.show = true;
  //     this.sidebartoggle.sidebarToggle(this.show);
  //   }
  // }


}
