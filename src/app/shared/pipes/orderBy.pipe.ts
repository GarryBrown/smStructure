import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderBy {
  transform(array: Array<string>, args: string): Array<string> {
    if (array) {
      array.sort((a: any, b: any) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return array;
    }

    return array;
  }

}