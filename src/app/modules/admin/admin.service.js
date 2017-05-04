"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DashboardService = (function () {
    function DashboardService(http, dateUtils) {
        this.http = http;
        this.dateUtils = dateUtils;
        this.resourceUrl = 'api/orders';
    }
    DashboardService.prototype.create = function (order) {
        var copy = Object.assign({}, order);
        copy.dateOfCreate = this.dateUtils.toDate(order.dateOfCreate);
        copy.dateOfDocument = this.dateUtils.toDate(order.dateOfDocument);
        copy.dateOfDelivery = this.dateUtils.toDate(order.dateOfDelivery);
        copy.dateOfPayment = this.dateUtils.toDate(order.dateOfPayment);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    DashboardService.prototype.update = function (order) {
        var copy = Object.assign({}, order);
        copy.dateOfCreate = this.dateUtils.toDate(order.dateOfCreate);
        copy.dateOfDocument = this.dateUtils.toDate(order.dateOfDocument);
        copy.dateOfDelivery = this.dateUtils.toDate(order.dateOfDelivery);
        copy.dateOfPayment = this.dateUtils.toDate(order.dateOfPayment);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            return res.json();
        });
    };
    DashboardService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            jsonResponse.dateOfCreate = _this.dateUtils
                .convertDateTimeFromServer(jsonResponse.dateOfCreate);
            jsonResponse.dateOfDocument = _this.dateUtils
                .convertDateTimeFromServer(jsonResponse.dateOfDocument);
            jsonResponse.dateOfDelivery = _this.dateUtils
                .convertDateTimeFromServer(jsonResponse.dateOfDelivery);
            jsonResponse.dateOfPayment = _this.dateUtils
                .convertDateTimeFromServer(jsonResponse.dateOfPayment);
            return jsonResponse;
        });
    };
    DashboardService.prototype.query = function (req) {
        var _this = this;
        var options = this.createRequestOption(req);
        //return this.http.get(this.resourceUrl).map(res => res);
        return this.http.get(this.resourceUrl) // i remove options, need add it
            .map(function (res) { return _this.convertResponse(res); });
        //.map( (res: any) => this.computing(res));
    };
    DashboardService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    DashboardService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        for (var i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].dateOfCreate = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].dateOfCreate);
            jsonResponse[i].dateOfDocument = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].dateOfDocument);
            jsonResponse[i].dateOfDelivery = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].dateOfDelivery);
            jsonResponse[i].dateOfPayment = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].dateOfPayment);
        }
        res._body = jsonResponse;
        return res;
    };
    DashboardService.prototype.createRequestOption = function (req) {
        var options = new http_1.BaseRequestOptions();
        if (req) {
            var params = new http_1.URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);
            options.search = params;
        }
        return options;
    };
    DashboardService.prototype.computing = function (data) {
        data.forEach(function (item) {
            item.orderQuantityAmount = 0;
            item.saleQuantityAmount = 0;
            item.orderSpecialities.forEach(function (itemSpec) {
                if (itemSpec.orderQuantity > 0)
                    item.orderQuantityAmount++;
                if (itemSpec.saleQuantity > 0)
                    item.saleQuantityAmount++;
            });
        });
        return data;
    };
    DashboardService = __decorate([
        core_1.Injectable()
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
