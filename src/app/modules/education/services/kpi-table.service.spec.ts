import { TestBed, inject } from '@angular/core/testing';

import { KpiTableService } from './kpi-table.service';

describe('KpiTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpiTableService]
    });
  });

  it('should ...', inject([KpiTableService], (service: KpiTableService) => {
    expect(service).toBeTruthy();
  }));
});
