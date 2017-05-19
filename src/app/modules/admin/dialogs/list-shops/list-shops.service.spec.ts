import { TestBed, inject } from '@angular/core/testing';

import { ListShopsService } from './list-shops.service';

describe('ListShopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListShopsService]
    });
  });

  it('should ...', inject([ListShopsService], (service: ListShopsService) => {
    expect(service).toBeTruthy();
  }));
});
