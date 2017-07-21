import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  getSelected(selectedVals: Array<any>, option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }

  getSelectedSingle(selectedVals: any, option: any) {
    if (selectedVals) {
      if (option.id === selectedVals.id) {
        return selectedVals;
      }
    }
    return option;
  }

  getSelectedAnswer(selectedVals: any, option: any) {
    if (selectedVals && selectedVals.hasOwnProperty('typeOfAnswer')) {
      if (option.typeOfAnswer.id === selectedVals.typeOfAnswer.id) {
        return selectedVals;
      }
    }
    return option;
  }

  rangeArray(n: number) {
    return Array.apply(null, { length: n }).map(Number.call, Number);
  }


  sortNumber(a, b) {
    return a - b;
  }

  sortByOrderBy(a, b) {
    if (a.orderBy < b.orderBy)
      return -1;
    if (a.orderBy > b.orderBy)
      return 1;
    return 0;
  }

}