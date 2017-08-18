import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRowComponent } from './salary-row.component';

describe('SalaryRowComponent', () => {
  let component: SalaryRowComponent;
  let fixture: ComponentFixture<SalaryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
