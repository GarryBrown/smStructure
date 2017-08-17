import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortQuotes'
})

export class SortQuotes {
  transform(array: Array<string>, args: string): Array<string> {
    if (array) {
      array.sort((a: any, b: any) => {
        return a[args].localeCompare(b[args], undefined, { ignorePunctuation: true });
      })
      return array;
    }
  }
}
