import { TestBed, inject } from '@angular/core/testing';

import { EduResultService } from './edu-result.service';

describe('EduResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EduResultService]
    });
  });

  it('should ...', inject([EduResultService], (service: EduResultService) => {
    expect(service).toBeTruthy();
  }));
});
