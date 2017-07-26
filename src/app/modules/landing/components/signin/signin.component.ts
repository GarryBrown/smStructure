import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SigninService } from '../../services/signin.service';
import { PrincipalService } from '../../../../core';
import { User } from '../../../../models';


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
  ) {
    this.credentials = {};
    this.rememberMe = true;
    this.loading = true;
  }

  ngOnInit() {
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
      this.principal.authenticate(account);
      if (this.principal.isAdmin(account.authorities)) {
        this.router.navigate(['kpi']);
      } else {
        this.router.navigate(['kpi']);
      }
    }).catch(() => {
      this.authenticationError = true;
    });
  }


  redirect() {
    this.router.navigate(['/kpi']);
  }

}
