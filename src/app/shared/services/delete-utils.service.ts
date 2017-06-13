import { Injectable } from '@angular/core';

@Injectable()
export class DeleteUtilsService {

  constructor() { }

  isExistInList(selectedList: any[], id: string) {
    return selectedList.some(store => store.id === id);
  }


  removeById(selectedList, id): Promise<any> {
    return new Promise((resolve, reject) => {
      selectedList.forEach(
        (store, i) => {
          if (store.id === id) {
            selectedList.splice(i, 1);
            resolve(selectedList);
          }
        });
      reject(false);
    });
  }


}
