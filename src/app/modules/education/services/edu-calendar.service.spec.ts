import { TestBed, inject } from '@angular/core/testing';

import { EduCalendarService } from './edu-calendar.service';

describe('EduCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EduCalendarService]
    });
  });

  it('should ...', inject([EduCalendarService], (service: EduCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
