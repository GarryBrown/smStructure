"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var SortByDirective = (function () {
    function SortByDirective(sort, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sort = sort;
    }
    SortByDirective.prototype.onClick = function () {
        if (this.sort.predicate && this.sort.predicate !== '_score') {
            this.sort.sort(this.appSortBy);
            this.applyClass();
        }
    };
    SortByDirective.prototype.applyClass = function () {
        var childSpan = this.el.nativeElement.children[1];
        var add = this.sortAscIcon;
        if (!this.sort.ascending) {
            add = this.sortDescIcon;
        }
        this.renderer.setElementClass(childSpan, add, true);
    };
    ;
    __decorate([
        core_1.Input()
    ], SortByDirective.prototype, "appSortBy", void 0);
    __decorate([
        core_1.HostListener('click')
    ], SortByDirective.prototype, "onClick", null);
    SortByDirective = __decorate([
        core_1.Directive({
            selector: '[appSortBy]'
        }),
        __param(0, core_1.Host())
    ], SortByDirective);
    return SortByDirective;
}());
exports.SortByDirective = SortByDirective;
