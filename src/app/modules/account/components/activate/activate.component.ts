import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';

import { PrincipalService } from '../../../../core';
import { AuthJwtService } from '../../../../core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
  providers: [CookieService]
})
export class ActivateComponent implements OnInit {

  constructor(
    private principal: PrincipalService,
    private cookieService: CookieService,
    private router: Router,
    private authServerProvider: AuthJwtService) { 

    this.checkUser();
  }

  ngOnInit() {
  }


  checkCookie() {
        console.log('cookie === ');
        let cookie = this.cookieService.get('jwt');
        let rememberMe = this.cookieService.get('rememberMe');
        if (this.cookieService.check('jwt')) {
          this.loginWithJwt(cookie, rememberMe);
        }  else {
          console.log('user none and cookie empty');
        }     
  }


  loginWithJwt (jwt, rememberMe, callback?) {
    let cb = callback || function() {};
    
    this.authServerProvider.loginWithToken(jwt, rememberMe).then(jwt => {
        this.principal.identity(true).then(account => {
          if (account) {
            this.redirect(account);
          } else {
            console.log('account empty');
          }
        });
        return cb();
      }, err => {
        console.log('some error of promise auth!');
        return cb(err);
      });
  }

  redirect(account) {
    if (this.principal.isAdmin(account.authorities)) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['orders']);
    }
  }

  checkUser() {
    console.log('checkUser');

    this.principal.identity().then(
      account => this.redirect(account),
      err => this.checkCookie()
      );
  }


}
