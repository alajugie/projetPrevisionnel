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
var VueGlobalComponent = (function () {
    function VueGlobalComponent() {
    }
    VueGlobalComponent = __decorate([
        core_1.Component({
            selector: 'vue_globale',
            template: "<vue-globale></vue-globale>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], VueGlobalComponent);
    return VueGlobalComponent;
}());
exports.VueGlobalComponent = VueGlobalComponent; // € Exportation du component sous la forme du nom de class 
//# sourceMappingURL=vueGlobale.js.map