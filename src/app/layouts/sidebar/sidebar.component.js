"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SidebarComponent = (function() {
    function SidebarComponent(router, account) {
        this.router = router;
        this.account = account;
        this.user = account.getAccount();
        this.show = this.user ? false : true;
    }
    SidebarComponent.prototype.toggle = function() {
        this.show = !this.show;
    };
    SidebarComponent.prototype.ngOnInit = function() {};
    SidebarComponent.prototype.logout = function() {
        this.account.logout();
        this.user = this.account.getAccount();
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;