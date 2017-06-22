import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SigninService } from './signin.service';
import { SidebarToggleService, PrincipalService } from '../../../core';
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
  loading: boolean;

  constructor(
    private principal: PrincipalService,
    private loginService: SigninService,
    private router: Router,
    private sidebartoggle: SidebarToggleService
  ) {
    this.credentials = {};
    this.rememberMe = true;
    this.loading = true;


  }

  ngOnInit() {
    console.log(` isAuthenticated on da SIGNIN ${this.principal.isAuthenticated()}`);
    this.principal.identity().then(
      account => {
        if (account) this.redirect();
        this.loading = false;
      },
      rej => {
        this.loading = false;
      }
    );
  }

  login() {
    this.loginService.login({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    }).then((account: User) => {
      this.authenticationError = false;
      console.log('=====AUTH PRINCIPAL NEXT');
      this.principal.authenticate(account);
      console.log("=====AUTH SIDEBAR NEXT");
      this.sidebartoggle.auth(account);
      if (this.principal.isAdmin(account.authorities)) {
        this.router.navigate(['kpi']);
      } else {
        this.router.navigate(['kpi']);
      }
    }).catch(() => {
      console.log('some error of promise auth!');
      this.authenticationError = true;
    });
  }


  redirect() {
    this.router.navigate(['/kpi']);
  }

}
