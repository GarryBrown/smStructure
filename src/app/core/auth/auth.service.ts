import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../principal/principal.service';

@Injectable()
export class AuthService {
  constructor(
    private principal: PrincipalService,
    private router: Router
  ) {}

  authorize (force) {

    let authReturn = this.principal.identity(force).then(authThen.bind(this));

    return authReturn;

    function authThen () {
      //console.log(this.principal.getAccount());
      let canActivate = this.principal.isAuthenticated();
      if (!canActivate) {
        this.router.navigate(['/login']);
      }

      return canActivate;
    }
  }
}
