import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SigninService } from './signin.service';
import { SidebarToggleService } from '../../../core/utils/sidebar-toggle.service';
import { User } from '../../../models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  constructor(
    private loginService: SigninService,
    private router: Router,
    private sidebartoggle: SidebarToggleService
  ) {
    this.credentials = {};
    this.rememberMe = true;
  }

  ngOnInit() {
  }


  login () {
    this.loginService.login({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    }).then((account: User) => {
      this.authenticationError = false;
      this.sidebartoggle.auth(account);
      if (this.isAdmin(account.authorities)) {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['orders']);
      }
    }).catch(() => {
      console.log('some error of promise!');
      this.authenticationError = true;
    });
  }

  isAdmin(authorities: Array<string>): boolean {
    let isAdmin = false;
    authorities.forEach(
      el => {
        if (el === 'ROLE_ADMIN') {
          isAdmin = true;
        }
      }
    );
    return isAdmin;
  }


}
