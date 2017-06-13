import { TestBed, inject } from '@angular/core/testing';

import { ActivateByEmailService } from './activate-by-email.service';

describe('ActivateByEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateByEmailService]
    });
  });

  it('should ...', inject([ActivateByEmailService], (service: ActivateByEmailService) => {
    expect(service).toBeTruthy();
  }));
});
