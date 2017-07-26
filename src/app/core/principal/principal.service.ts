import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AccountService } from './account.service';
import { AuthJwtService } from '../auth/auth-jwt.service';
import { environment } from '../../app.constants';

@Injectable()
export class PrincipalService {

  private _identity: any;
  private authenticated: boolean = false;
  private authenticationState = new BehaviorSubject(false)
  userAuth$ = this.authenticationState.asObservable();
  private urlApi: string;

  constructor(
    private account: AccountService,
    private authJwt: AuthJwtService
  ) { }

  authenticate(_identity) {
    this._identity = _identity;
    this.authenticated = _identity !== null;
    this.authenticationState.next(this._identity);
  }

  getUserState() {
    return this.authenticationState.asObservable().filter(user => user !== false);
  }

  fakeUpdateProfile(user) {
    this._identity = user;
    return this._identity;
  }

  hasAnyAuthority(authorities) {
    if (!this.authenticated || !this._identity || !this._identity.authorities) {
      return false;
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this._identity.authorities.indexOf(authorities[i]) !== -1) {
        return true;
      }
    }

    return false;
  }

  hasAuthority(authority): Promise<any> {
    if (!this.authenticated) {
      return Promise.resolve(false);
    }

    return this.identity().then(id => {
      return id.authorities && id.authorities.indexOf(authority) !== -1;
    }, () => {
      return false;
    });
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this._identity = undefined;
      this.authenticationState.next(this._identity);
    }
    if (this._identity) {
      this.authenticationState.next(this._identity);
      return Promise.resolve(this._identity);
    }
    if (environment.production) {
      return this.account.get().toPromise().then(account => {
        account.imageUrl = '../../../assets//images/default-user-avatar.png';
        if (account) {
          this._identity = account;
          this.authenticated = true;
          this.urlApi = account.createdBy;
        } else {
          this._identity = undefined;
          this.authenticated = false;
          this.urlApi = undefined;
        }
        this.authenticationState.next(this._identity);
        return this._identity;
      }).catch(err => {
        this._identity = undefined;
        this.authenticated = false;
        this.urlApi = undefined;
        this.authenticationState.next(this._identity);
        return null;
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._identity = {
            login: 'ElonMusk1971',
            firstname: 'Elon',
            lastname: 'Musk',
            hobby: 'Murder',
            imageUrl: 'https://images.aif.ru/008/288/2d0942be5d439641128a81bca9855eb4.jpg'
          };
          this.authenticate(this._identity);
          resolve(this._identity);
        }, 500);
      });
    }
  }

  getUrl(): string {
    if (this.urlApi) {
      return this.urlApi;
    } else {
      this.identity().then(
        account => {
          return this.urlApi;
        }
      )
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }


  isIdentityResolved(): boolean {
    return this._identity !== undefined && this._identity !== null;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): String {
    return this.isIdentityResolved() ? this._identity.imageUrl : null;
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
