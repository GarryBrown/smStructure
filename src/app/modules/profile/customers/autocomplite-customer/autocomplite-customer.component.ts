import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DaDataService } from '../../../../shared/services/da-data.service';

@Component({
  selector: 'app-autocomplite-customer',
  templateUrl: './autocomplite-customer.component.html',
  styleUrls: ['./autocomplite-customer.component.scss'],
})
export class AutocompliteCustomerComponent implements OnInit {
  @Input('placeholder') placeholder: string;
  @Output() selectSug = new EventEmitter();
  daDataList: any;
  value: string;


  constructor(
    private daData: DaDataService,
  ) { }

  ngOnInit() {

  }

  search(e) {
     if (typeof e === 'string' && e.length >= 4) {
        this.daData.queryCustomers({
          query: e
        }).subscribe(
          data => {
            this.daDataList = data.suggestions;
          },
          error => console.log(error)
        );
     }
   }


  onSelect(sug) {
    this.daDataList = [];
    this.selectSug.emit(sug);
    this.value = sug.value;
  }

  isArray(val) {
    return Array.isArray(val);
  }

}
