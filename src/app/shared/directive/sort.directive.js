"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SortDirective = (function () {
    function SortDirective(el, renderer) {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.predicateChange = new core_1.EventEmitter();
        this.ascendingChange = new core_1.EventEmitter();
        this.element = el.nativeElement;
    }
    SortDirective.prototype.sort = function (field) {
        this.resetClasses();
        if (field !== this.predicate) {
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    };
    SortDirective.prototype.resetClasses = function () {
        var _this = this;
        var allThIcons = this.element.querySelectorAll(this.sortIconSelector);
        allThIcons.forEach(function (value) {
            value.classList.remove(_this.sortAscIcon);
            value.classList.remove(_this.sortDescIcon);
            value.classList.add(_this.sortIcon);
        });
    };
    ;
    __decorate([
        core_1.Input()
    ], SortDirective.prototype, "predicate", void 0);
    __decorate([
        core_1.Input()
    ], SortDirective.prototype, "ascending", void 0);
    __decorate([
        core_1.Input()
    ], SortDirective.prototype, "callback", void 0);
    __decorate([
        core_1.Output()
    ], SortDirective.prototype, "predicateChange", void 0);
    __decorate([
        core_1.Output()
    ], SortDirective.prototype, "ascendingChange", void 0);
    SortDirective = __decorate([
        core_1.Directive({
            selector: '[appSort]'
        })
    ], SortDirective);
    return SortDirective;
}());
exports.SortDirective = SortDirective;
