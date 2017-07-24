import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailRowComponent } from './plan-detail-row.component';

describe('PlanDetailRowComponent', () => {
  let component: PlanDetailRowComponent;
  let fixture: ComponentFixture<PlanDetailRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
