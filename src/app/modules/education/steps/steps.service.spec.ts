import { TestBed, inject } from '@angular/core/testing';

import { StepsService } from './steps.service';

describe('StepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepsService]
    });
  });

  it('should ...', inject([StepsService], (service: StepsService) => {
    expect(service).toBeTruthy();
  }));
});
