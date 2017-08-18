import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduResultComponent } from './edu-result.component';

describe('EduResultComponent', () => {
  let component: EduResultComponent;
  let fixture: ComponentFixture<EduResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
