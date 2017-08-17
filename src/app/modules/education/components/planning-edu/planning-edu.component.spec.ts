import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningEduComponent } from './planning-edu.component';

describe('PlanningEduComponent', () => {
  let component: PlanningEduComponent;
  let fixture: ComponentFixture<PlanningEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
