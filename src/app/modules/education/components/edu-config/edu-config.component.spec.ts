import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduConfigComponent } from './edu-config.component';

describe('EduConfigComponent', () => {
  let component: EduConfigComponent;
  let fixture: ComponentFixture<EduConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
