import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDayCalendarComponent } from './edu-day-calendar.component';

describe('EduDayCalendarComponent', () => {
  let component: EduDayCalendarComponent;
  let fixture: ComponentFixture<EduDayCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduDayCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduDayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
