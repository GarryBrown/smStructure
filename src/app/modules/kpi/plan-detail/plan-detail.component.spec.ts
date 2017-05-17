import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailTOComponent } from './plan-detail.component';

describe('PlanDetailComponent', () => {
  let component: PlanDetailTOComponent;
  let fixture: ComponentFixture<PlanDetailTOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailTOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
