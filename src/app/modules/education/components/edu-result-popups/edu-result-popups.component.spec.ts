import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduResultPopupsComponent } from './edu-result-popups.component';

describe('EduResultPopupsComponent', () => {
  let component: EduResultPopupsComponent;
  let fixture: ComponentFixture<EduResultPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduResultPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduResultPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
