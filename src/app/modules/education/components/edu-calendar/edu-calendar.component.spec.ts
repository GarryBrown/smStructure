import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCalendarComponent } from './edu-calendar.component';

describe('EduCalendarComponent', () => {
  let component: EduCalendarComponent;
  let fixture: ComponentFixture<EduCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
