"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('../../services/http.service');
var DescriptionProfComponent = (function () {
    function DescriptionProfComponent(_httpService) {
        this._httpService = _httpService;
        this.text = 'http://ip.jsontest.com/';
    }
    DescriptionProfComponent.prototype.onTestGet = function () {
        var _this = this;
        this._httpService.getDate(this.text)
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    DescriptionProfComponent = __decorate([
        core_1.Component({
            selector: 'descriptionProf',
            templateUrl: '../../../app/components/descriptionProf/descriptionProf.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], DescriptionProfComponent);
    return DescriptionProfComponent;
}());
exports.DescriptionProfComponent = DescriptionProfComponent;
//# sourceMappingURL=descriptionProf.component.js.map