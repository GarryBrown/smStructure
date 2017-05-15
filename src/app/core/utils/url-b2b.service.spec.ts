import { TestBed, inject } from '@angular/core/testing';

import { UrlB2bService } from './url-b2b.service';

describe('UrlB2bService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlB2bService]
    });
  });

  it('should ...', inject([UrlB2bService], (service: UrlB2bService) => {
    expect(service).toBeTruthy();
  }));
});
