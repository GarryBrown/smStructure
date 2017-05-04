/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoresDialogComponent } from './stores-dialog.component';

describe('StoresDialogComponent', () => {
  let component: StoresDialogComponent;
  let fixture: ComponentFixture<StoresDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
