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
var dashboard_service_1 = require('./dashboard.service');
var DashboardComponent = (function() {
    function DashboardComponent(router, activatedRoute, dashService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dashService = dashService;
        this.foods = [
            { value: 'steak-0', viewValue: 'P&G' },
            { value: 'pizza-1', viewValue: 'Food' },
            { value: 'tacos-2', viewValue: 'Tacko' }
        ];
        this.dateFromPlaceholder = "С";
        this.dateToPlaceholder = "По";
        this.routeData = this.activatedRoute.data.subscribe(function(data) {
            _this.previousPage = data['pagingParams'].page;
            _this.page = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    DashboardComponent.prototype.ngOnInit = function() {
        console.log("on init page: " + this.page);
        this.loadData();
    };
    DashboardComponent.prototype.ngOnDestroy = function() {
        this.routeData.unsubscribe();
    };
    DashboardComponent.prototype.wow = function(e) {
        console.log(e);
    };
    DashboardComponent.prototype.transition = function() {
        this.router.navigate(['/dashboard'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadData();
    };
    DashboardComponent.prototype.loadData = function() {
        var _this = this;
        console.log("loading page: " + this.page + " \n with sort: " + this.sort() + "\n    ");
        this.dashService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function(res) { return _this.onSuccess(res.json(), res.headers); }, function(res) { return _this.onError(res.json()); });
    };
    DashboardComponent.prototype.sort = function() {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    DashboardComponent.prototype.loadPage = function(page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    DashboardComponent.prototype.onSuccess = function(data, headers) {
        //this.queryCount = this.totalItems;
        console.log('_success_');
        //console.log(data.data);
        this.orders = this.dashService.computing(data.data);
    };
    DashboardComponent.prototype.onError = function(error) {
        console.log('On error things');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
            providers: [dashboard_service_1.DashboardService]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;