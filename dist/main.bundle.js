webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".window-box {\n  position: absolute;\n  width: 350px;\n  left: 50%;\n  top: 50%;\n  margin-left: -175px;\n  margin-top: -75px;\n  background-color: #f2f3f4;\n  border-radius: 8px;\n  border: 1px solid #666666;\n  box-shadow: 0 0 8px 0px gray;\n}\n.box-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 25px;\n  background-color: #666666;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  color: white;\n  padding-left: 10px;\n  padding-top: 8px;\n}\n.infoblock {\n  display: block;\n  box-sizing: border-box;\n  background-color: white;\n  border-radius: 5px;\n  height: 120px;\n  border: 1px solid #d6d6d6;\n  padding: 10px;\n  text-align: center;\n  margin: 10px;\n}\n.progress-wrapper {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.progress-money {\n  display: block;\n  box-sizing: border-box;\n  background-color: #bcbcbc;\n  width: 120px;\n  height: 14px;\n  text-align: left;\n}\n.progress {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  background-color: #0090ea;\n  height: 14px;\n  width: 0;\n  border: 3px solid #bcbcbc;\n  border-right: none;\n  transition: 0.6s;\n}\n.pointer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  -webkit-transform: translateY(135%);\n          transform: translateY(135%);\n}\n.target {\n  font-size: 0.7em;\n}\n.target-value {\n  width: 60px;\n  height: 50px;\n  background-color: #666666;\n  border-radius: 3px;\n  border: 1px solid #666666;\n  color: white;\n  font-size: 1.4em;\n}\n.money-need {\n  margin-top: 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.money-need i {\n  color: #3e6c91;\n  font-size: 1.4em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div class=\"window-box\">\n  <div class=\"box-head\">{{nameBoxHead}}</div>\n  <div class=\"infoblock\">\n    <div class=\"progress-wrapper\">\n      <div class=\"progress-label\">Reached: &nbsp;&nbsp;</div>\n      <div class=\"progress-money\">\n        <div class=\"progress\" [style.width]=\"progressTotal\">\n          <div class=\"pointer\">${{curentValue}}</div>\n        </div>\n      </div>\n      <div class=\"target-value\" [style.background]=\"targetBg\">\n        <div class=\"target\">Target</div>\n        ${{targetValue}}\n      </div>\n    </div>\n    <div class=\"money-need\">\n      <i class=\"mdi mdi-information\"></i>\n      <div>&nbsp;You need ${{moneyNeed}} more to reach your target.</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.nameBoxHead = 'Target Indicator Demo';
        this.moneyNeed = 0;
        this.curentValue = 0;
        this.targetValue = 15;
        this.counterInterval = {};
        this.progressTotal = '0%';
        this.targetBg = 'linear-gradient(to top, #666666, #8e8e8e)';
        this.initValue();
    }
    AppComponent.prototype.counter = function () {
        var _this = this;
        var intervalInit = false;
        this.counterInterval = setInterval(function () {
            if (!intervalInit) {
                intervalInit = true;
                return;
            }
            _this.curentValue = Math.round((_this.curentValue + 0.2) * 10) / 10;
            _this.progressTotal = Math.round(100 * (_this.curentValue / _this.targetValue)) + '%';
            _this.moneyNeed = Math.round((_this.targetValue - _this.curentValue) * 10) / 10;
            if (_this.curentValue >= _this.targetValue) {
                clearInterval(_this.counterInterval);
                _this.targetBg = 'linear-gradient(to top, #00A910, #16dd2a)';
            }
        }, 2000);
    };
    AppComponent.prototype.initValue = function () {
        this.curentValue = Math.round((this.curentValue) * 10) / 10;
        this.progressTotal = Math.round(100 * (this.curentValue / this.targetValue)) + '%';
        this.moneyNeed = Math.round((this.targetValue - this.curentValue) * 10) / 10;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window['fetch']('http://alex.devel.softservice.org/testapi/')
            .then(function (response) {
            return response.json();
        }).then(function (json) {
            _this.curentValue = json.balance_usd;
            _this.initValue();
            _this.counter();
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map