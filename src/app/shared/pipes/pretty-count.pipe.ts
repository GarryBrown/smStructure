import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyCount'
})
export class PrettyCountPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    let numb = String(value).split('.');

    let int = numb[0], flt = numb[1];// целое/дробное

    if (flt === undefined ) {
      return numb[0] + '.' + '00';// 99 => 99.00
    }

    /* округление */
    if (flt.length > 3) {
      flt = [flt.slice(0,2),'.', flt.slice(2)].join('');
      let roundedFlt = Math.round(Number(flt));

      if (roundedFlt > 99) {
        let tempInt = parseInt(int);
        tempInt++;
        int = tempInt.toString();
        flt = '00';// 99.99 => 100.00
      } else {
        flt = roundedFlt.toString();
      }
    } else if (flt.length == 1) {
      flt = flt + '0'; // 23.2 => 23.20
    }

    /* деление на разряды */
    if (int.length > 3){
      int = this.splitNumberWithSpaces(int);// 1200 => 1 200
    }

    return int + '.' + flt;
  }

  splitNumberWithSpaces ( str : string ) {
    return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1 ');
  }


}
