/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountsService } from './account.service';

describe('AccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountsService]
    });
  });

  it('should ...', inject([AccountsService], (service: AccountsService) => {
    expect(service).toBeTruthy();
  }));
});
