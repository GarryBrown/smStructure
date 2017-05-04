"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { DatePipe } from '@angular/common';
var DateUtilService = (function () {
    function DateUtilService() {
        this.pattern = 'yyyy-MM-dd';
    }
    /**
     * Method to convert the date time from server into JS date object
     */
    DateUtilService.prototype.convertDateTimeFromServer = function (date) {
        if (date) {
            return new Date(date);
        }
        else {
            return null;
        }
    };
    /**
     * Method to convert the date from server into JS date object
     */
    DateUtilService.prototype.convertLocalDateFromServer = function (date) {
        if (date) {
            var dateString = date.split('-');
            return new Date(dateString[0], dateString[1] - 1, dateString[2]);
        }
        return null;
    };
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
    DateUtilService.prototype.dateformat = function () {
        return this.pattern;
    };
    // TODO Change this method when moving from datetime-local input to NgbDatePicker
    DateUtilService.prototype.toDate = function (date) {
        if (date === undefined || date === null) {
            return null;
        }
        var dateParts = date.split(/\D+/);
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
    };
    DateUtilService = __decorate([
        core_1.Injectable()
    ], DateUtilService);
    return DateUtilService;
}());
exports.DateUtilService = DateUtilService;
