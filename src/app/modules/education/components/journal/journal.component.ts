import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EduConfigService, JournalService } from '../../services';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  providers: [JournalService]
})
export class JournalComponent implements OnInit {
  list: Array<any>;

  constructor(
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.loadData();
  }


  onFilter() {

  }


  loadData() {
    console.log(this.journalService.getJournal())
    this.journalService.getJournal().subscribe(
      (data: any) => {
        console.log(data)
        this.list = data
      },
      (err) => console.error(err))
  }

}
