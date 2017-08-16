import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-journal',
  templateUrl: './item-journal.component.html',
  styleUrls: ['./item-journal.component.scss']
})
export class ItemJournalComponent implements OnInit {
  @Input() journal: any;
  constructor() { }

  ngOnInit() {
  }

}
