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

}