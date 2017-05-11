import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AccountService } from './account.service';

import { AuthJwtService } from '../auth/auth-jwt.service';

@Injectable()
export class PrincipalService {
    private _identity: any;
    private authenticated: boolean = false;
    private authenticationState = new Subject<any>();
    userAuth$ = this.authenticationState.asObservable();
    private urlApi: string;

    constructor(
        private account: AccountService,
        private authJwt: AuthJwtService
    ) {}

    authenticate (_identity) {
      this._identity = _identity;
      this.authenticated = _identity !== null;
    }

    fakeUpdateProfile(user) {
      this._identity = user;
      return this._identity;
    }

    hasAnyAuthority (authorities) {
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

    hasAuthority (authority): Promise<any> {
        if (!this.authenticated) {
           return Promise.resolve(false);
        }

        return this.identity().then(id => {
            return id.authorities && id.authorities.indexOf(authority) !== -1;
        }, () => {
            return false;
        });
    }

    identity (force?: boolean): Promise<any> {
      if (force === true) {
        this._identity = undefined;
        this.authenticationState.next(this._identity);
      }

      console.log('===PRINCIPAL===');

      if (this._identity) {
        this.authenticationState.next(this._identity);
        return Promise.resolve(this._identity);
      }

    return new Promise((resolve, reject) => {
       setTimeout(() => {
         this._identity = {
           firstname:'Elon',
           lastname: 'Musk',
           hobby: 'Murder',
           imageUrl: 'http://images.aif.ru/008/288/2d0942be5d439641128a81bca9855eb4.jpg',
         };
         this.authenticated = true;
         resolve(this._identity);
       }, 500);
     });

    //   return this.account.get().toPromise().then(account => {

    //     account.imageUrl = 'http://images.aif.ru/008/288/2d0942be5d439641128a81bca9855eb4.jpg';

    //     if (account) {
    //       this._identity = account;
    //       this.authenticated = true;
    //       this.urlApi = account.createdBy;
    //     } else {
    //       this._identity = null;
    //       this.authenticated = false;
    //       this.urlApi = null;
    //     }
    //     this.authenticationState.next(this._identity);
    //     return this._identity;
    //   }).catch(err => {
    //     this._identity = null;
    //     this.authenticated = false;
    //     this.urlApi = null;
    //     return null;
    //   });
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

    isAuthenticated (): boolean {
      return this.authenticated;
    }


    isIdentityResolved (): boolean {
        return this._identity !== undefined;
    }

    getAuthenticationState(): Observable<any> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): String {
        return this.isIdentityResolved () ? this._identity.imageUrl : null;
    }


}
