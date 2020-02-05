(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n    <title>Angles 5000</title>\n  </head>\n\n  <body>\n    <div class=\"header\">\n      <img id=\"logo\" src=\"../../assets/img/altlogo.png\" />\n      <div id=\"links\">\n        <button class=\"page-link\" (click)=\"goToDestination('services')\">\n          SERVICES + PRICING\n        </button>\n        <button class=\"page-link\" (click)=\"goToDestination('our_team')\">\n          STYLISTS\n        </button>\n        <button\n          class=\"page-link\"\n          dest=\"projects\"\n          (click)=\"goToDestination('images_work')\"\n        >\n          GALLERY\n        </button>\n        <button\n          class=\"page-link\"\n          dest=\"contact\"\n          (click)=\"goToDestination('contact_container')\"\n        >\n          CONTACT US\n        </button>\n      </div>\n      <div id=\"top_right\">\n        <p id=\"name\">Scotts Valley, CA</p>\n        <p id=\"number\">(831) 438-0431</p>\n      </div>\n    </div>\n    <div\n      id=\"carouselExampleSlidesOnly\"\n      class=\"carousel slide carousel-fade\"\n      data-ride=\"carousel\"\n    >\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\" data-interval=\"5000\">\n          <img src=\"../../assets/img/n5.png\" class=\"d-block w-100\" alt=\"...\" />\n        </div>\n        <div class=\"carousel-item\" data-interval=\"5000\">\n          <img src=\"../../assets/img/n1.png\" class=\"d-block w-100\" alt=\"...\" />\n        </div>\n        <div class=\"carousel-item\" data-interval=\"5000\">\n          <img src=\"../../assets/img/n4.png\" class=\"d-block w-100\" alt=\"...\" />\n        </div>\n        <div class=\"carousel-item\" data-interval=\"5000\">\n          <img src=\"../../assets/img/n6.png\" class=\"d-block w-100\" alt=\"...\" />\n        </div>\n      </div>\n    </div>\n    <div id=\"center_body\">\n      <div id=\"tagline_div\">\n        <h1 id=\"tagline\">\"Where casual beachy meets urban professional\"</h1>\n      </div>\n      <div class=\"block\"></div>\n      <div id=\"services\">\n        <h1 id=\"service_header\">SCOTTS VALLEY'S PREMIER HAIR SALON</h1>\n        <p class=\"services_p\">\n          We specialize in Women's and Men’s Hair Care & Cutting, Razor Cutting,\n          Hair Coloring, Hair Painting, Highlights, Balayage, Natural Bleach &\n          Tone, Blowdrys, Make-up on request, and a vast array of other Salon\n          Services.\n        </p>\n      </div>\n      <button id=\"view_services\" type=\"button\" [routerLink]=\"['/services']\" class=\"btn btn-outline-dark\">\n        View Services\n      </button>\n    </div>\n    <div id=\"our_location\">\n      <h1 id=\"our_location_h1\">OUR LOCATION</h1>\n      <div class=\"block\"></div>\n      <div id=\"location_images\">\n        <div class=\"image1\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop4.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image2\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop5.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop6.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image1\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop2.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image2\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop1.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/shop3.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n      </div>\n    </div>\n    <div id=\"images_work\">\n      <h1 id=\"our_work_h1\">OUR WORK</h1>\n      <div class=\"block\"></div>\n      <div id=\"location_images\">\n        <div class=\"image1\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair1.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image2\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair2.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair3.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair4.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair5.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair6.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair7.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair8.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair9.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair11.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair12.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair13.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n      </div>\n    </div>\n    <div id=\"our_team\">\n      <h1 id=\"our_team_h1\">MEET THE TEAM</h1>\n      <div class=\"block\"></div>\n      <p class=\"services_p\">\n        Get to know the people behind the scenes. We are a group of hard\n        working, experienced, and passionate professionals.\n      </p>\n      <div id=\"location_images\">\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s6.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Maggie  |  Stylist</p>\n          <p class=\"stylist2\">(831) 438-0431</p>\n        </div>\n      </div>\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s7.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Noelle  |  Stylist</p>\n          <p class=\"stylist2\">(831) 247-3467</p>\n        </div>\n      </div>\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s1.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Jo  |  Stylist</p>\n          <p class=\"stylist2\">(831) 438-1002</p>\n        </div>\n      </div>\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s3.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Lorelei  |  Stylist</p>\n          <p class=\"stylist2\">(831) 438-0504</p>\n        </div>\n      </div>\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s4.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Catrina  |  Stylist</p>\n          <p class=\"stylist2\">(831) 246-3576</p>\n        </div>\n      </div>\n      <div class=\"container\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s2.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Kimmie  |  Stylist</p>\n          <p class=\"stylist2\">(831) 252-0992</p>\n        </div>\n      </div>\n      <div class=\"container2\">\n        <img\n          class=\"shopimg\"\n          src=\"../../assets/img/s5.jpg\"\n          class=\"d-block w-100\"\n          alt=\"...\"\n        />\n        <div class=\"box\"></div>\n        <div class=\"box stack-top\" >\n          <p class=\"stylist\">Allyssa  |  Stylist</p>\n          <p class=\"stylist2\">(209) 613-1045</p>\n        </div>\n      </div>\n    </div>\n  </div>\n    <div id=\"contact_container\">\n      <h1 id=\"contact_headline\">GET IN TOUCH</h1>\n      <div class=\"contact_box\">\n        <h1 class=\"contact_title\">\n          BOOK WITH US\n        </h1>\n        <p class=\"contact_content\">\n          SCOTTS VALLEY, CA\n        </p>\n        <p class=\"contact_content\">(831) 438-0431</p>\n        <p class=\"contact_content\">maggieangles5000@gmail.com</p>\n      </div>\n      <div class=\"contact_box\">\n        <h1 class=\"contact_title\">\n          VISIT US\n        </h1>\n        <p class=\"contact_content\">\n          SCOTTS VALLEY\n        </p>\n        <p class=\"contact_content\">5000 SCOTTS VALLEY DR</p>\n        <p class=\"contact_content\">SCOTTS VALLEY, CA 95066</p>\n      </div>\n      <div class=\"contact_box\">\n        <h1 class=\"contact_title\">\n          SALON HOURS\n        </h1>\n        <p class=\"contact_content\">Monday | By Request</p>\n        <p class=\"contact_content\">Tuesday - Wednesday | 9am - 6pm</p>\n        <p class=\"contact_content\">Thursday | 9am - 7pm</p>\n        <p class=\"contact_content\">Friday | 9am - 7pm</p>\n        <p class=\"contact_content\">Saturday | 9am - 5pm</p>\n        <p class=\"contact_content\">Sunday | By Request</p>\n      </div>\n      <div id=\"iconss\">\n        <div class=\"wobble\">\n          <a href=\"mailto:maggieangles5000@gmail.com\" target=\"_blank\"\n            ><i id=\"icon4\" class=\"far fa-envelope\"></i\n          ></a>\n        </div>\n        <div class=\"wobble\">\n          <a\n            href=\"https://www.yelp.com/biz/angles-5000-salon-scotts-valley\"\n            target=\"_blank\"\n            ><i id=\"icon\" class=\"fab fa-yelp\"></i\n          ></a>\n        </div>\n        <div class=\"wobble\">\n          <a href=\"https://www.instagram.com/angles5000salon/\" target=\"_blank\"\n            ><i id=\"icon\" class=\"fab fa-instagram\"></i\n          ></a>\n        </div>\n      </div>\n      <div class=\"services_p2\">\n        WE REQUIRE 24 HOURS NOTICE TO CANCEL AN APPOINTMENT; IN THE CASE THAT 24\n        HOURS NOTICE IS NOT GIVEN FOR A CANCELLATION, THE RESERVED CREDIT CARD\n        WILL BE CHARGED 50% OF THE SERVICE THAT WAS MISSED. NO SHOWS ARE\n        INCLUDED UNDER THIS POLICY. PLEASE BE AWARE THAT IF YOU ARE MORE THAN 15\n        MINUTES LATE FOR YOUR APPOINTMENT, WE MAY NOT BE ABLE TO PROVIDE THE\n        SERVICE FOR WHICH YOU HAVE BEEN SCHEDULED AND A CANCELLATION FEE WILL\n        APPLY.\n      </div>\n    </div>\n  </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n    <title>SERVICES</title>\n  </head>\n  <body>\n    <div id=\"services\">\n      <a href=\"/\"\n        ><img id=\"logo\" src=\"../../assets/img/altlogo.png\" alt=\"Back Home\"\n      /></a>\n      <h1 id=\"service_header\">SERVICES + PRICING</h1>\n      <div class=\"block\"></div>\n      <div id=\"pricing\">\n        <p class=\"contact_content\">Women's Haircut</p>\n        <p class=\"contact_content\">Men's Haircut</p>\n        <p class=\"contact_content\">Shampoo & Blow Dry</p>\n        <p class=\"contact_content\">Single Process Color</p>\n        <p class=\"contact_content\">Highlighting/Hair Painting</p>\n        <p class=\"contact_content\">Glossing/Glaze</p>\n        <p class=\"contact_content\">Color Correction</p>\n      </div>\n      <div id=\"pricing2\">\n        <p class=\"contact_content1\">$50+</p>\n        <p class=\"contact_content1\">$30+</p>\n        <p class=\"contact_content1\">$40+</p>\n        <p class=\"contact_content1\">$70+</p>\n        <p class=\"contact_content1\">$95+</p>\n        <p class=\"contact_content1\">$30+</p>\n        <p class=\"contact_content2\">Determined during consulatiton</p>\n      </div>\n      <div id=\"location_images\">\n        <div class=\"image1\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair2.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image2\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair5.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair8.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair1.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair4.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n        <div class=\"image3\">\n          <img\n            class=\"shop\"\n            src=\"../../assets/img/hair14.jpg\"\n            class=\"d-block w-100\"\n            alt=\"...\"\n          />\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");





const routes = [{ path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #fff;\n  color: #737373;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n#contact_container {\n  background-color: #212121;\n  width: 100%;\n  margin-top: 15%;\n  padding-bottom: 2%;\n}\n\n.contact_box {\n  width: 30%;\n  margin-left: 2%;\n  margin-top: 4%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n#contact_headline {\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: white;\n  width: 100%;\n  padding: 5% 32% 0px 39%;\n}\n\n.contact_title {\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 1.2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: white;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 6%;\n}\n\n.contact_content {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  color: #999999;\n  font-size: 1vw;\n  line-height: 1.2em;\n  letter-spacing: 0em;\n  font-family: Open Sans;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 2.4em;\n  letter-spacing: 0.06em;\n  text-rendering: optimizeLegibility;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n}\n\n.page-link {\n  background-color: transparent;\n  padding: 1px 1px;\n  color: black;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-size: 1vw;\n  margin-top: 2%;\n  border-color: transparent;\n  display: inline-block;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.page-link:hover {\n  background-color: transparent;\n  color: #b6b45b;\n  border-color: transparent;\n}\n\n#center_body {\n  width: 80%;\n  height: 80%;\n  margin: 2% 15% 7% 10%;\n}\n\n.header {\n  height: 10%;\n}\n\n#logo {\n  width: 19%;\n  height: 10%;\n  margin: 2vh;\n  display: inline-block;\n  vertical-align: top;\n}\n\n#top_right {\n  display: inline-block;\n  margin-top: 1vh;\n  vertical-align: top;\n  position: absolute;\n  top: 1%;\n  right: 2%;\n}\n\n#name,\n#number {\n  font-size: 1vw;\n  margin: 0px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.page-link {\n  vertical-align: top;\n  display: inline-block;\n  margin-left: 8%;\n  font-size: 1vw;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n#links {\n  position: fixed;\n  left: 25%;\n  top: 2%;\n  display: inline-block;\n  width: 50%;\n  z-index: 1000;\n}\n\n#carouselExampleSlidesOnly {\n  width: 90%;\n  height: 80%;\n  margin: 2% 10% 2% 5%;\n}\n\n#tagline {\n  width: 100%;\n  padding-left: 10%;\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: italic;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: #222;\n  margin-top: 5%;\n}\n\n#tagline_div {\n  width: 100%;\n  margin-bottom: 6%;\n}\n\n.image_style {\n  width: 60%;\n}\n\n.stylist, .stylist2 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  font-size: 1.2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  font-family: Open Sans;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 2em;\n  letter-spacing: 0.069em;\n  text-rendering: optimizeLegibility;\n  color: white;\n  text-align: center;\n  background-color: #383838;\n  margin: 0px;\n  padding: 0px;\n}\n\n.stylist2 {\n  font-style: italic;\n  color: #868686;\n  font-size: 1.2vw;\n}\n\n.container, .container2 {\n  width: 30%;\n  height: 100%;\n  position: relative;\n  margin: 0% 10% 5% 7%;\n  display: inline-block;\n}\n\n.container2 {\n  margin-left: 31%;\n  width: 29%;\n}\n\n.box {\n  width: 50%;\n  height: 15%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.shopimg {\n  width: 100%;\n}\n\n.stack-top {\n  z-index: 9;\n  margin-top: 10%;\n  /* for demo purpose  */\n  margin-left: 80%;\n  height: 15%;\n  width: 50%;\n  background-color: #383838;\n}\n\n.block {\n  width: 20%;\n  height: 2%;\n  border-bottom: 1px solid black;\n  margin: 1% 40% 5% 40%;\n}\n\n.services_p,\n#service_header,\n.services_p2 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  font-size: 1vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  font-family: Open Sans;\n  font-weight: 300;\n  font-style: italic;\n  line-height: 2.4em;\n  letter-spacing: 0.065em;\n  text-rendering: optimizeLegibility;\n  width: 100%;\n  text-align: center;\n}\n\n#service_header {\n  display: inline-block;\n  font-size: 1vw;\n  font-style: italic;\n  display: inline-block;\n}\n\n#services {\n  width: 50%;\n  margin: 6% 25% 2% 25%;\n}\n\n#view_services {\n  margin: 0px 40% 0px 40%;\n  width: 20%;\n  display: inline-block;\n  font-size: 1vw;\n  font-style: italic;\n}\n\n#our_location {\n  width: 90%;\n  height: 100%;\n  margin: 2% 10% 2% 5%;\n}\n\n#our_location_h1 {\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: #222;\n  width: 100%;\n  padding: 0px 33% 0px 39%;\n}\n\n.image1,\n.image2,\n.image3 {\n  width: 30%;\n  margin-top: 2%;\n  margin-left: 2.5%;\n  height: 100%;\n  display: inline-block;\n}\n\n.shop {\n  height: 100%;\n  width: 100%;\n}\n\n#images_work {\n  width: 90%;\n  height: 100%;\n  margin: 8% 10% 2% 5%;\n}\n\n#our_work_h1 {\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: #222;\n  width: 100%;\n  padding: 0px 35% 0px 42%;\n}\n\n#our_team_h1 {\n  display: inline-block;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 2vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  text-transform: none;\n  font-family: brandon-grotesque;\n  font-weight: 700;\n  font-style: normal;\n  line-height: 1.4em;\n  letter-spacing: 0.25em;\n  color: #222;\n  width: 100%;\n  padding: 5% 32% 0px 39%;\n}\n\n.services_p2 {\n  margin: 5% 0px 0px 0px;\n  padding: 0px;\n  line-height: 1em;\n  font-size: 0.8vw;\n  padding: 0px 4% 0px 4%;\n}\n\n#contact {\n  background-color: #F5F6F8;\n  border-top: 1px solid black;\n}\n\n#icon {\n  font-size: 2vw;\n  text-decoration: none;\n  color: white;\n  margin: 0px;\n  padding: 0px;\n}\n\n#icon4 {\n  font-size: 2vw;\n  text-decoration: none;\n  color: white;\n  padding: 0px;\n}\n\n#iconss {\n  padding: 0px;\n  display: inline-block;\n  margin-left: 42%;\n}\n\na {\n  text-decoration: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.wobble {\n  width: 2%;\n}\n\n@-webkit-keyframes wobble {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes wobble {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.wobble {\n  display: inline-block;\n  margin-left: 5vh;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n\n.wobble:hover {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWxlbWNyZXlub2xkcy9EZXNrdG9wL2FuZ2xlcy9wdWJsaWMvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0hBQUE7QUNLRjs7QURGQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0FDT0Y7O0FETEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNTRjs7QURQQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0FDVUY7O0FEUkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBQ1dGOztBRFRBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1lGOztBRFZBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ2FGOztBRFhBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ2NGOztBRFpBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDZUY7O0FEWkE7RUFDSSxVQUFBO0FDZUo7O0FEYkE7RUFDSSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2dCSjs7QURiQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZ0JKOztBRGJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNnQko7O0FEZEE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNpQkY7O0FEZkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtBQ21CSjs7QURqQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUFpQixzQkFBQTtFQUNqQixnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNxQko7O0FEbEJBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDcUJGOztBRG5CQTs7O0VBR0UsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDc0JGOztBRHBCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FDd0JGOztBRHRCQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeUJGOztBRHZCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUMwQkY7O0FEeEJBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FDMkJGOztBRHhCQTs7O0VBR0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQzRCRjs7QUQxQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDNkJGOztBRDNCQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQzhCRjs7QUQ1QkE7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDZ0NGOztBRDVCQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUMrQko7O0FEN0JBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDaUNKOztBRDlCQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDaUNBOztBRC9CQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNrQ0o7O0FEaENBO0VBQ0UsU0FBQTtBQ21DRjs7QURqQ0E7RUFDSTtJQUNFLGtDQUFBO0lBQ0EsMEJBQUE7RUNvQ0o7RURsQ0U7SUFDRSxtQ0FBQTtJQUNBLDJCQUFBO0VDb0NKO0VEbENFO0lBQ0Usa0NBQUE7SUFDQSwwQkFBQTtFQ29DSjtFRGxDRTtJQUNFLG1DQUFBO0lBQ0EsMkJBQUE7RUNvQ0o7RURsQ0U7SUFDRSxrQ0FBQTtJQUNBLDBCQUFBO0VDb0NKO0VEbENFO0lBQ0UsZ0NBQUE7SUFDQSx3QkFBQTtFQ29DSjtBQUNGOztBRGpDRTtFQUNFO0lBQ0Usa0NBQUE7SUFFQSwwQkFBQTtFQ21DSjtFRGpDRTtJQUNFLG1DQUFBO0lBRUEsMkJBQUE7RUNtQ0o7RURqQ0U7SUFDRSxrQ0FBQTtJQUVBLDBCQUFBO0VDbUNKO0VEakNFO0lBQ0UsbUNBQUE7SUFFQSwyQkFBQTtFQ21DSjtFRGpDRTtJQUNFLGtDQUFBO0lBRUEsMEJBQUE7RUNtQ0o7RURqQ0U7SUFDRSxnQ0FBQTtJQUVBLHdCQUFBO0VDbUNKO0FBQ0Y7O0FEaENFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBRUEsd0JBQUE7RUFDQSxvQ0FBQTtBQ2tDSjs7QUQvQkU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDa0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM3MzczNzM7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiNjb250YWN0X2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIHBhZGRpbmctYm90dG9tOjIlO1xufVxuLmNvbnRhY3RfYm94IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuI2NvbnRhY3RfaGVhZGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JSAzMiUgMHB4IDM5JTtcbn1cbi5jb250YWN0X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuLmNvbnRhY3RfY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDF2dztcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjRlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxcHggMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5wYWdlLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYigxODIsIDE4MCwgOTEpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI2NlbnRlcl9ib2R5IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMiUgMTUlIDclIDEwJTtcbn1cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbn1cbiNsb2dvIHtcbiAgd2lkdGg6IDE5JTtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1hcmdpbjogMnZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4jdG9wX3JpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxJTtcbiAgcmlnaHQ6IDIlO1xufVxuI25hbWUsXG4jbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxdnc7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuLnBhZ2UtbGluayB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cbiNsaW5rcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMjUlO1xuICB0b3A6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4jY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IDIlIDEwJSAyJSA1JTtcbn1cbiN0YWdsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4jdGFnbGluZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5cbi5pbWFnZV9zdHlsZXtcbiAgICB3aWR0aDo2MCU7XG59XG4uc3R5bGlzdCwgLnN0eWxpc3Qye1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDY5ZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM4MzgzODtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIFxufVxuLnN0eWxpc3Qye1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjojODY4Njg2O1xuICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gICAgXG59XG4uY29udGFpbmVyLCAuY29udGFpbmVyMntcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAlIDEwJSA1JSA3JTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbi5jb250YWluZXIye1xuICBtYXJnaW4tbGVmdDozMSU7XG4gIHdpZHRoOjI5JTtcbn1cbi5ib3h7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDE1JTsgICAgICAgICAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG4uc2hvcGltZ3tcbiAgICB3aWR0aDoxMDAlO1xufVxuLnN0YWNrLXRvcHtcbiAgICB6LWluZGV4OiA5O1xuICAgIG1hcmdpbi10b3A6IDEwJTsgLyogZm9yIGRlbW8gcHVycG9zZSAgKi9cbiAgICBtYXJnaW4tbGVmdDo4MCU7XG4gICAgaGVpZ2h0OjE1JTtcbiAgICB3aWR0aDo1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzgzODM4O1xufVxuXG4uYmxvY2sge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMSUgNDAlIDUlIDQwJTtcbn1cbi5zZXJ2aWNlc19wLFxuI3NlcnZpY2VfaGVhZGVyLFxuLnNlcnZpY2VzX3AyIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDIuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjVlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzZXJ2aWNlX2hlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxdnc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3NlcnZpY2VzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA2JSAyNSUgMiUgMjUlO1xufVxuI3ZpZXdfc2VydmljZXMge1xuICBtYXJnaW46IDBweCA0MCUgMHB4IDQwJTtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI291cl9sb2NhdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyJSAxMCUgMiUgNSU7XG59XG4jb3VyX2xvY2F0aW9uX2gxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzMlIDBweCAzOSU7XG59XG5cbi5pbWFnZTEsXG4uaW1hZ2UyLFxuLmltYWdlMyB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2hvcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaW1hZ2VzX3dvcmsge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogOCUgMTAlIDIlIDUlO1xufVxuI291cl93b3JrX2gxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzUlIDBweCA0MiU7XG59XG4jb3VyX3RlYW1faDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogIzIyMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlIDMyJSAwcHggMzklO1xufVxuLnNlcnZpY2VzX3AyIHtcbiAgbWFyZ2luOiA1JSAwcHggMHB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXNpemU6IDAuOHZ3O1xuICBwYWRkaW5nOiAwcHggNCUgMHB4IDQlO1xuICBcbn1cblxuI2NvbnRhY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGODtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG59XG4jaWNvbntcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG59XG4jaWNvbjR7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjBweDtcblxufVxuI2ljb25zc3tcbnBhZGRpbmc6MHB4O1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG5tYXJnaW4tbGVmdDo0MiU7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xufVxuLndvYmJsZXtcbiAgd2lkdGg6MiU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlIHtcbiAgICAxNi42NSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICAgIH1cbiAgICAzMy4zJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICB9XG4gICAgNDkuOTUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICB9XG4gICAgNjYuNiUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHdvYmJsZSB7XG4gICAgMTYuNjUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgICB9XG4gICAgMzMuMyUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIH1cbiAgICA0OS45NSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgIH1cbiAgICA2Ni42JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICAgIDgzLjI1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuICBcbiAgLndvYmJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjV2aDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbiAgXG4gIC53b2JibGU6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcbiAgICBhbmltYXRpb24tbmFtZTogd29iYmxlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIH1cbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzczNzM3MztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jY29udGFjdF9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5jb250YWN0X2JveCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI2NvbnRhY3RfaGVhZGxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JSAzMiUgMHB4IDM5JTtcbn1cblxuLmNvbnRhY3RfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjJ2dztcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG59XG5cbi5jb250YWN0X2NvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMXB4IDFweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LXNpemU6IDF2dztcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFnZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjYjZiNDViO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jY2VudGVyX2JvZHkge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiAyJSAxNSUgNyUgMTAlO1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbiNsb2dvIHtcbiAgd2lkdGg6IDE5JTtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1hcmdpbjogMnZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiN0b3BfcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDElO1xuICByaWdodDogMiU7XG59XG5cbiNuYW1lLFxuI251bWJlciB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuI2xpbmtzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAyNSU7XG4gIHRvcDogMiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuI2Nhcm91c2VsRXhhbXBsZVNsaWRlc09ubHkge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiAyJSAxMCUgMiUgNSU7XG59XG5cbiN0YWdsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbiN0YWdsaW5lX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cblxuLmltYWdlX3N0eWxlIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnN0eWxpc3QsIC5zdHlsaXN0MiB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDY5ZW07XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3R5bGlzdDIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjODY4Njg2O1xuICBmb250LXNpemU6IDEuMnZ3O1xufVxuXG4uY29udGFpbmVyLCAuY29udGFpbmVyMiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAlIDEwJSA1JSA3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIHdpZHRoOiAyOSU7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zaG9waW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGFjay10b3Age1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIC8qIGZvciBkZW1vIHB1cnBvc2UgICovXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIGhlaWdodDogMTUlO1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xufVxuXG4uYmxvY2sge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMSUgNDAlIDUlIDQwJTtcbn1cblxuLnNlcnZpY2VzX3AsXG4jc2VydmljZV9oZWFkZXIsXG4uc2VydmljZXNfcDIge1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDF2dztcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMi40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2NWVtO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2VydmljZV9oZWFkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3NlcnZpY2VzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA2JSAyNSUgMiUgMjUlO1xufVxuXG4jdmlld19zZXJ2aWNlcyB7XG4gIG1hcmdpbjogMHB4IDQwJSAwcHggNDAlO1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiNvdXJfbG9jYXRpb24ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMiUgMTAlIDIlIDUlO1xufVxuXG4jb3VyX2xvY2F0aW9uX2gxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzMlIDBweCAzOSU7XG59XG5cbi5pbWFnZTEsXG4uaW1hZ2UyLFxuLmltYWdlMyB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaG9wIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2ltYWdlc193b3JrIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDglIDEwJSAyJSA1JTtcbn1cblxuI291cl93b3JrX2gxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzUlIDBweCA0MiU7XG59XG5cbiNvdXJfdGVhbV9oMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDJ2dztcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG4gIGNvbG9yOiAjMjIyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSUgMzIlIDBweCAzOSU7XG59XG5cbi5zZXJ2aWNlc19wMiB7XG4gIG1hcmdpbjogNSUgMHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAwLjh2dztcbiAgcGFkZGluZzogMHB4IDQlIDBweCA0JTtcbn1cblxuI2NvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNkY4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNpY29uIHtcbiAgZm9udC1zaXplOiAydnc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jaWNvbjQge1xuICBmb250LXNpemU6IDJ2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI2ljb25zcyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDIlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ud29iYmxlIHtcbiAgd2lkdGg6IDIlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlIHtcbiAgMTYuNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICB9XG4gIDMzLjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIH1cbiAgNDkuOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG4gIDY2LjYlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbiAgODMuMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3b2JibGUge1xuICAxNi42NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICB9XG4gIDMzLjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgfVxuICA0OS45NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICB9XG4gIDY2LjYlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxuICA4My4yNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4ud29iYmxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNXZoO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi53b2JibGU6aG92ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    goToDestination(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".services_p,\n#service_header,\n.services_p2 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  font-size: 1vw;\n  line-height: 1.25em;\n  letter-spacing: 0em;\n  font-family: Open Sans;\n  font-weight: 300;\n  font-style: italic;\n  line-height: 2.4em;\n  letter-spacing: 0.065em;\n  text-rendering: optimizeLegibility;\n  width: 100%;\n  text-align: center;\n}\n\n#logo {\n  width: 19%;\n  height: 10%;\n  margin-left: 40%;\n  margin-top: 1%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n#view_services {\n  margin: 0px 40% 0px 40%;\n  width: 20%;\n  display: inline-block;\n  font-size: 1vw;\n  font-style: italic;\n}\n\n.block {\n  width: 20%;\n  height: 2%;\n  border-bottom: 1px solid black;\n  margin: 4% 40% 1% 40%;\n}\n\n#service_header {\n  font-style: normal;\n  font-size: 2vw;\n  margin-top: 7%;\n}\n\n.image1,\n.image2,\n.image3 {\n  width: 30%;\n  margin-top: 2%;\n  margin-left: 2.5%;\n  height: 100%;\n  display: inline-block;\n  margin-bottom: 2.5%;\n}\n\n.shop {\n  height: 100%;\n  width: 100%;\n}\n\n.contact_content, .contact_content2, .contact_content1 {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 400;\n  color: #999999;\n  font-size: 1vw;\n  line-height: 1.2em;\n  letter-spacing: 0em;\n  font-family: Open Sans;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 2.4em;\n  letter-spacing: 0.06em;\n  text-rendering: optimizeLegibility;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  text-align: right;\n  display: inline-block;\n}\n\n.contact_content1 {\n  text-align: left;\n}\n\n.contact_content2 {\n  font-style: italic;\n  margin-bottom: 5%;\n  text-align: left;\n}\n\n#pricing, #pricing2 {\n  width: 20%;\n  margin-left: 1%;\n  margin-top: 4%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n#pricing {\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWxlbWNyZXlub2xkcy9EZXNrdG9wL2FuZ2xlcy9wdWJsaWMvc3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEREU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSU47O0FEREE7OztFQUdFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNJLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTUo7O0FESkU7RUFDSSxnQkFBQTtBQ09OOztBREpFO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDT047O0FETEU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkU7RUFDRSxnQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZXJ2aWNlc19wLFxuI3NlcnZpY2VfaGVhZGVyLFxuLnNlcnZpY2VzX3AyIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDIuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjVlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsb2dvIHtcbiAgICB3aWR0aDogMTklO1xuICAgIGhlaWdodDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OjQwJTtcbiAgICBtYXJnaW4tdG9wOjElO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gICN2aWV3X3NlcnZpY2VzIHtcbiAgICBtYXJnaW46IDBweCA0MCUgMHB4IDQwJTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLmJsb2NrIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMiU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogNCUgNDAlIDElIDQwJTtcbiAgfVxuICAjc2VydmljZV9oZWFkZXJ7XG4gICAgICBmb250LXN0eWxlOm5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMi4wdnc7XG4gICAgICBtYXJnaW4tdG9wOjclO1xuICAgICAgXG4gIH1cbi5pbWFnZTEsXG4uaW1hZ2UyLFxuLmltYWdlMyB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206Mi41JTtcbn1cbi5zaG9wIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0X2NvbnRlbnQsIC5jb250YWN0X2NvbnRlbnQyLCAuY29udGFjdF9jb250ZW50MSB7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDIuNGVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgfVxuICAuY29udGFjdF9jb250ZW50MXtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5jb250YWN0X2NvbnRlbnQye1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgbWFyZ2luLWJvdHRvbTo1JTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgI3ByaWNpbmcsICNwcmljaW5nMiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXRvcDogNCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgI3ByaWNpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfSIsIi5zZXJ2aWNlc19wLFxuI3NlcnZpY2VfaGVhZGVyLFxuLnNlcnZpY2VzX3AyIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDIuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjVlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogMTklO1xuICBoZWlnaHQ6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI3ZpZXdfc2VydmljZXMge1xuICBtYXJnaW46IDBweCA0MCUgMHB4IDQwJTtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uYmxvY2sge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogNCUgNDAlIDElIDQwJTtcbn1cblxuI3NlcnZpY2VfaGVhZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5pbWFnZTEsXG4uaW1hZ2UyLFxuLmltYWdlMyB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XG59XG5cbi5zaG9wIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhY3RfY29udGVudCwgLmNvbnRhY3RfY29udGVudDIsIC5jb250YWN0X2NvbnRlbnQxIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG4gIGxldHRlci1zcGFjaW5nOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuNGVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3RfY29udGVudDEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udGFjdF9jb250ZW50MiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNwcmljaW5nLCAjcHJpY2luZzIge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNwcmljaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kylemcreynolds/Desktop/angles/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map