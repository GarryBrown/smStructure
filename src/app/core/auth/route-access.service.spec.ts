/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteAccessService } from './route-access.service';

describe('RouteAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteAccessService]
    });
  });

  it('should ...', inject([RouteAccessService], (service: RouteAccessService) => {
    expect(service).toBeTruthy();
  }));
});
