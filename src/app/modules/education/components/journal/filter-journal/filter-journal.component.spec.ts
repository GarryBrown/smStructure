import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterJournalComponent } from './filter-journal.component';

describe('FilterJournalComponent', () => {
  let component: FilterJournalComponent;
  let fixture: ComponentFixture<FilterJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
