import { Component, OnInit, Output, EventEmitter, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, OnChanges {
  @Input() allList;
  @Input() currentList;
  @Output() allListChange = new EventEmitter();
  @Output() onCheckChange = new EventEmitter<any>();
  vm: any;
  checkModel: any;
  checkValues = [false, true, null];
  index = 0;
  len = this.checkValues.length;
  copyCurList: Array<any> = [];

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.allList && this.currentList && this.allList.length) {
        this.changeViewByCurValue();
    }
    if (this.currentList.length !== 0 && this.currentList.length !== this.allList.length) {
        this.copyCurList = this.currentList.slice();
    }
  }

  changeViewByCurValue() {
    
    // this.checkModel = this.checkValues[++this.index % this.len];

    if (this.allList.length === this.currentList.length) {
      this.checkModel = true;
      this.index = 1;
    } else if (this.currentList.length === 0) {
      this.checkModel = false;
      this.index = 0;
    } else {
      this.checkModel = null;
      this.index = 2;
    }
  }

  // changeCurValueByView() {
  //   // console.log(this.copyCurList);
  //   this.checkModel = this.checkValues[++this.index % this.len];
  //   if (this.checkModel === true) {
  //     this.onCheckChange.emit(this.allList)
  //   } else if (this.checkModel === false) {
  //     this.onCheckChange.emit([])
  //   } else {
  //     this.onCheckChange.emit(this.copyCurList)
  //   }
  // }

   changeCurValueByView() {
    this.checkModel = this.checkValues[++this.index % this.len];
    if (this.checkModel === true) {
      this.onCheckChange.emit(this.allList)
    } else  {
      this.onCheckChange.emit([])
    }
  }
  onChangeAllList(allList) {
    this.allListChange.emit(allList);
  }

}
