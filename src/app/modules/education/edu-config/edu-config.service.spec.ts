import { TestBed, inject } from '@angular/core/testing';

import { EduConfigService } from './edu-config.service';

describe('EduConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EduConfigService]
    });
  });

  it('should ...', inject([EduConfigService], (service: EduConfigService) => {
    expect(service).toBeTruthy();
  }));
});
