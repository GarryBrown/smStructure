/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthJwtService } from './auth-jwt.service';

describe('AuthJwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthJwtService]
    });
  });

  it('should ...', inject([AuthJwtService], (service: AuthJwtService) => {
    expect(service).toBeTruthy();
  }));
});
