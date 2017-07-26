import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateByEmailComponent } from './activate-by-email.component';

describe('ActivateByEmailComponent', () => {
  let component: ActivateByEmailComponent;
  let fixture: ComponentFixture<ActivateByEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateByEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
