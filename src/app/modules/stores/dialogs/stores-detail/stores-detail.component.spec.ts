/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoresDetailComponent } from './stores-detail.component';

describe('StoresDetailComponent', () => {
  let component: StoresDetailComponent;
  let fixture: ComponentFixture<StoresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
