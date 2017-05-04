import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DaDataService } from '../../../shared/services/da-data.service';

@Component({
  selector: 'app-autocomplite-address',
  templateUrl: './autocomplite-address.component.html',
  styleUrls: ['./autocomplite-address.component.scss'],
})
export class AutocompliteAddressComponent implements OnInit {
  @Input('placeholder') placeholder: string;
  @Output() selectSug = new EventEmitter();
  daDataList: any;
  value: any;


  constructor(
    private daData: DaDataService,
  ) { }

  ngOnInit() {

  }

  search(e) {
     console.log(e);
     if (typeof e === 'string' && e.length >= 4) {
        this.daData.queryAddress({
          query: e
        }).subscribe(
          data => {
            this.daDataList = data.suggestions;
            console.log(this.daDataList);
          },
          error => console.log(error)
        );
     }
   }


  onSelect(sug) {
    console.log(sug);
    this.value = sug.value;
    this.daDataList = [];
    this.selectSug.emit(sug);
  }

  isArray(val) {
    return Array.isArray(val);
  }

}
