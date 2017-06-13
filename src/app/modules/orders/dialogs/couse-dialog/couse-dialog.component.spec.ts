import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouseDialogComponent } from './couse-dialog.component';

describe('CouseDialogComponent', () => {
  let component: CouseDialogComponent;
  let fixture: ComponentFixture<CouseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
