import { TestBed, inject } from '@angular/core/testing';

import { ResultPopupService } from './result-popup.service';

describe('ResultPopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultPopupService]
    });
  });

  it('should be created', inject([ResultPopupService], (service: ResultPopupService) => {
    expect(service).toBeTruthy();
  }));
});
