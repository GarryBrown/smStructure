import { Injectable } from '@angular/core';
//import { DatePipe } from '@angular/common';

@Injectable()
export class DateUtilService {

  private pattern = 'yyyy-MM-dd';

  constructor (
    //private datePipe: DatePipe
  ) {}

  /**
   * Method to convert the date time from server into JS date object
   */
  convertDateTimeFromServer (date: any) {
    if (date) {
      return new Date(date);
    } else {
      return null;
    }
  }

  /**
   * Method to convert the date from server into JS date object
   */
  convertLocalDateFromServer (date: any) {
    if (date) {
      let dateString = date.split('-');
      return new Date(dateString[0], dateString[1] - 1, dateString[2]);
    }
    return null;
  }

  /**
   * Method to convert the JS date object into specified date pattern
   */
 /* convertLocalDateToServer (date: any, pattern = this.pattern) {
    if (date) {
      let newDate = new Date(date.year, date.month - 1, date.day);
      return this.datePipe.transform(newDate, pattern);
    } else {
      return null;
    }
  }*/

  /**
   * Method to get the default date pattern
   */
  dateformat () {
    return this.pattern;
  }

  // TODO Change this method when moving from datetime-local input to NgbDatePicker
  toDate(date: any): Date {
    if (date === undefined || date === null) {
      return null;
    }
    let dateParts = date.split(/\D+/);
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
  }
}
