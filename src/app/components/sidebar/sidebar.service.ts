import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';

import { AuthJwtService } from '../../core/auth/auth-jwt.service';
import { PrincipalService } from '../../core/principal/principal.service';

@Injectable()
export class SidebarService {

  constructor(
    private http: Http,
    private auth: AuthJwtService,
    private principal: PrincipalService) { }

  logout (): Observable<any> {
    return this.auth.logout();
  }

  getAccount(): any {
    if (this.principal.isAuthenticated()) {
      return this.principal.identity();
    } else {
      return Promise.reject(new Error("401"));
    }
  }



}
