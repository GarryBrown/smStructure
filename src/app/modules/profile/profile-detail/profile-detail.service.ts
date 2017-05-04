import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { PrincipalService } from '../../../core/principal/principal.service';

@Injectable()
export class ProfileDetailService {

    private resourceUrl = 'api/profile';

    constructor(
        private http: Http,
        private principal: PrincipalService
    ) {  }

    getProfile() {
        return this.principal.identity();
    }

    updateProfile(user) {
        return this.principal.fakeUpdateProfile(user);
    }
}
