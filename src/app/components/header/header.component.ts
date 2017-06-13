import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { SidebarService } from '../sidebar/sidebar.service';
import { SidebarToggleService } from '../../core/utils/sidebar-toggle.service';
import { PrincipalService } from '../../core';

import { GetHelpComponent } from '../get-help/get-help.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './media.header.component.scss'],
  providers: [SidebarService]
})
export class HeaderComponent implements OnInit {
  show: boolean;
  user: any;

  constructor(
    private router: Router,
    private account: SidebarService,
    private sidebartoggle: SidebarToggleService,
    private principal: PrincipalService,
    public dialog: MdDialog

  ) {
    principal.userAuth$.subscribe(user => this.user = user);
    sidebartoggle.userAuth$.subscribe(user => {
      console.log(user);
      this.user = user;
      this.resetToggle();
    });
    sidebartoggle.missionConfirmed$.subscribe(show => this.show = show);
  }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    this.sidebartoggle.sidebarToggle(this.show);
  }


  resetToggle() {
    this.show = this.user ? true : false;
    this.sidebartoggle.sidebarToggle(this.show);
  }


  openHelp() {
    let dialogRef = this.dialog.open(GetHelpComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
