import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDayEventsComponent } from './list-day-events.component';

describe('ListDayEventsComponent', () => {
  let component: ListDayEventsComponent;
  let fixture: ComponentFixture<ListDayEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDayEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
