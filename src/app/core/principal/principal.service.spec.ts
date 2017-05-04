/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrincipalService } from './principal.service';

describe('PrincipalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrincipalService]
    });
  });

  it('should ...', inject([PrincipalService], (service: PrincipalService) => {
    expect(service).toBeTruthy();
  }));
});
