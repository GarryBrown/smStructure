import { Injectable } from '@angular/core';

import { PrincipalService } from '../../../core';
import { AuthJwtService } from '../../../core';

@Injectable()
export class SigninService {

  constructor (
    private principal: PrincipalService,
    private authServerProvider: AuthJwtService
  ) {}

  login (credentials, callback?) {
    let cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(data => {
        this.principal.identity(true).then(account => {
          console.log(account);
          if (account !== null) {

          }
          resolve(account);
        });
        return cb();
      }, err => {
        this.logout();
        reject(err);
        return cb(err);
      });
    });
  }

  logout () {
    this.authServerProvider.logout().subscribe();
    this.principal.authenticate(null);
  }
}
