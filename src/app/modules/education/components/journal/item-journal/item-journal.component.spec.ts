import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemJournalComponent } from './item-journal.component';

describe('ItemJournalComponent', () => {
  let component: ItemJournalComponent;
  let fixture: ComponentFixture<ItemJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
