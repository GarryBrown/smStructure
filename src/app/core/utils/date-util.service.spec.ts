/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateUtilService } from './date-util.service';

describe('DateUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilService]
    });
  });

  it('should ...', inject([DateUtilService], (service: DateUtilService) => {
    expect(service).toBeTruthy();
  }));
});
