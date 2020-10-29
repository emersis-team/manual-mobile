webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proteccion_proteccion__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToProcedimientosCombate = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__proteccion_proteccion__["a" /* ProteccionPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\home\home.html"*/'<ion-content padding style="background-color: #831013;">\n\n  <div style="\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n  ">\n\n    <div style="flex: 1; align-self: center;">\n      <img src="./assets/imgs/diseno.png">\n    </div>\n\n    <div style="flex: 1; color: white; align-self: center;">\n      <h4 style="text-align: center;">LIBRETA <br> J SEC TAN</h4>\n    </div>\n\n    <div style="flex: 1; color: white; align-self: center; padding-left: 10%; padding-right: 10%;">\n      <P style="text-align: center;">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ipsum sed mauris imperdiet, id\n        suscipit velit porta. Phasellus sodales in mauris ut malesuada. Pellentesque tincidunt bibendum lorem, eu\n        iaculis nulla facilisis fermentum. Suspendisse fringilla dictum fermentum. Aliquam nec felis ullamcorper,\n        vehicula sem sit amet, congue metus. Nunc semper erat sem, nec consequat arcu efficitur id. Maecenas eget est\n        porttitor, vulputate enim et, vestibulum leo. Sed dignissim sagittis finibus. Nunc consequat rhoncus nisl, eu\n        consectetur est semper eget.\n      </P>\n    </div>\n\n    <div style="\n      flex: 1; \n      align-self: center; \n      width: 100%; \n      text-align: center;\n    ">\n\n      <button id="procedimientoCombate" (click)="goToProcedimientosCombate()">\n\n        Procedimiento de Combate\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proteccion_proteccion__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = navParams.get('videoUrl');
    }
    VideoPage.prototype.goToVideos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__proteccion_proteccion__["a" /* ProteccionPage */]);
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\video\video.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n\n\n    <div style="display: flex;">\n\n\n\n      <div style="flex: 1;">\n\n\n\n        <button ion-button style="background-color: transparent;" (click)="goToVideos()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n\n\n      </div>\n\n\n\n      <div style="flex: 1; text-align: center;">\n\n        <h5 style="\n\n            min-width: 240px;\n\n            color: white;\n\n          ">\n\n          Video\n\n        </h5>\n\n      </div>\n\n\n\n      <div style="flex: 1; text-align: right;">\n\n\n\n\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background-color: rgb(210, 217, 226);">\n\n\n\n  <video id="player" style="width: 100%; height: 100%;" controls>\n\n    <source src="{{value}}" type="video/mp4" />\n\n  </video>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\video\video.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimientosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MovimientosPage = /** @class */ (function () {
    function MovimientosPage() {
    }
    MovimientosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\movimientos\movimientos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Procedimiento para el movimiento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div style="display: flex; flex-flow: column; text-align: center;">\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Formaciones</h3>\n\n      <video width="100%" controls="controls" poster="./assets/imgs/diseno.png" preload="metadata" webkit-playsinline="webkit-playsinline"\n\n        class="videoPlayer">\n\n        <source src="./assets/imgs/video3.mp4" type="video/mp4" />\n\n      </video>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Tec(s) Mov</h3>\n\n      <video width="100%" controls="controls" preload="metadata" webkit-playsinline="webkit-playsinline"\n\n        class="videoPlayer">\n\n        <source src="./assets/imgs/video4.mp4" type="video/mp4" />\n\n      </video>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\movimientos\movimientos.html"*/
        })
    ], MovimientosPage);
    return MovimientosPage;
}());

//# sourceMappingURL=movimientos.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfensivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OfensivosPage = /** @class */ (function () {
    function OfensivosPage() {
    }
    OfensivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\ofensivos\ofensivos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Procedimientos Ofensivos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div style="display: flex; flex-flow: column; text-align: center;">\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Sec no detectada por el Eno</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Sec detectada por el Eno</h3>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\ofensivos\ofensivos.html"*/
        })
    ], OfensivosPage);
    return OfensivosPage;
}());

//# sourceMappingURL=ofensivos.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefensivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefensivosPage = /** @class */ (function () {
    function DefensivosPage() {
    }
    DefensivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\defensivos\defensivos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Procedimientos Defensivos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div style="display: flex; flex-flow: column; text-align: center;">\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Defensa desde Pos Lig(s)</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Defensa desde Pos Org(s)</h3>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\defensivos\defensivos.html"*/
        })
    ], DefensivosPage);
    return DefensivosPage;
}());

//# sourceMappingURL=defensivos.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OtrosPage = /** @class */ (function () {
    function OtrosPage() {
    }
    OtrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\otros\otros.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Otros Procedimientos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div style="display: flex; flex-flow: column; text-align: center;">\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Observación</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Expl por el Fgo</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Franqueo de Obst (Prot x Fgo)</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Franqueo de Obst Nat(s)</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Ocup Z Reun</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Ab L Distr</h3>\n\n    </div>\n\n\n\n    <div style="flex: 1;">\n\n      <h3>Dist de Unidad</h3>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\otros\otros.html"*/
        })
    ], OtrosPage);
    return OtrosPage;
}());

//# sourceMappingURL=otros.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_movimientos_movimientos__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ofensivos_ofensivos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_defensivos_defensivos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_otros_otros__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_proteccion_proteccion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_video_video__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_movimientos_movimientos__["a" /* MovimientosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_proteccion_proteccion__["a" /* ProteccionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ofensivos_ofensivos__["a" /* OfensivosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_defensivos_defensivos__["a" /* DefensivosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otros_otros__["a" /* OtrosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_video_video__["a" /* VideoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_movimientos_movimientos__["a" /* MovimientosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_proteccion_proteccion__["a" /* ProteccionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ofensivos_ofensivos__["a" /* OfensivosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_defensivos_defensivos__["a" /* DefensivosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_otros_otros__["a" /* OtrosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_video_video__["a" /* VideoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_proteccion_proteccion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movimientos_movimientos__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ofensivos_ofensivos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_defensivos_defensivos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_otros_otros__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Protección', component: __WEBPACK_IMPORTED_MODULE_5__pages_proteccion_proteccion__["a" /* ProteccionPage */] },
            { title: 'Movimiento', component: __WEBPACK_IMPORTED_MODULE_6__pages_movimientos_movimientos__["a" /* MovimientosPage */] },
            { title: 'Ofensivos', component: __WEBPACK_IMPORTED_MODULE_7__pages_ofensivos_ofensivos__["a" /* OfensivosPage */] },
            { title: 'Defensivos', component: __WEBPACK_IMPORTED_MODULE_8__pages_defensivos_defensivos__["a" /* DefensivosPage */] },
            { title: 'Otros', component: __WEBPACK_IMPORTED_MODULE_9__pages_otros_otros__["a" /* OtrosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Procedimientos de Combate</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProteccionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_video__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProteccionPage = /** @class */ (function () {
    function ProteccionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProteccionPage.prototype.goVideo = function (videoUrl) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__video_video__["a" /* VideoPage */], {
            videoUrl: videoUrl
        });
    };
    ProteccionPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // Initialize slider
    ProteccionPage.prototype.ionViewDidEnter = function () {
        this.slideChanged();
    };
    // On segment click
    ProteccionPage.prototype.selectedTab = function (index) {
        this.slider.slideTo(index);
    };
    // On slide changed
    ProteccionPage.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        var slides_count = this.segments.nativeElement.childElementCount;
        this.page = currentIndex.toString();
        if (this.page >= slides_count)
            this.page = (slides_count - 1).toString();
        this.centerScroll();
    };
    // Center current scroll
    ProteccionPage.prototype.centerScroll = function () {
        if (!this.segments || !this.segments.nativeElement)
            return;
        var sizeLeft = this.sizeLeft();
        var sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
        var result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);
        result = (result > 0) ? result : 0;
        this.smoothScrollTo(result);
    };
    ProteccionPage.prototype.isInViewport = function (element) {
        var rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    // Get size start to current
    ProteccionPage.prototype.sizeLeft = function () {
        var size = 0;
        for (var i = 0; i < this.page; i++) {
            size += this.segments.nativeElement.children[i].clientWidth;
        }
        return size;
    };
    // Easing function
    ProteccionPage.prototype.easeInOutQuart = function (time, from, distance, duration) {
        if ((time /= duration / 2) < 1)
            return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
    // Animate scroll
    ProteccionPage.prototype.smoothScrollTo = function (endX) {
        var _this = this;
        console.log(endX);
        var startTime = new Date().getTime();
        var startX = this.segments.nativeElement.scrollLeft;
        var distanceX = endX - startX;
        var duration = 400;
        var timer = setInterval(function () {
            var time = new Date().getTime() - startTime;
            var newX = _this.easeInOutQuart(time, startX, distanceX, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            _this.segments.nativeElement.scrollLeft = newX;
            //console.log(this.isInViewport(this.segments.nativeElement.children[0]), this.page);
        }, 1000 / 60); // 60 fps
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], ProteccionPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("segments"),
        __metadata("design:type", Object)
    ], ProteccionPage.prototype, "segments", void 0);
    ProteccionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\proteccion\proteccion.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n\n\n    <div style="display: flex;">\n\n\n\n      <div style="flex: 1;">\n\n\n\n        <button ion-button style="background-color: transparent;" (click)="goToHome()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n\n\n      </div>\n\n\n\n      <div style="flex: 1; text-align: center;">\n\n        <h5 style="\n\n            min-width: 240px;\n\n            color: white;\n\n          ">\n\n          Procedimientos de combate\n\n        </h5>\n\n      </div>\n\n\n\n      <div style="flex: 1; text-align: right;">\n\n\n\n        <button ion-button style="background-color: transparent;">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar style="padding-top: 10px !important; padding-bottom: 10px !important;" mode="md" color="primary">\n\n\n\n    <ion-segment #segments mode="md" [(ngModel)]="page" color="light">\n\n\n\n      <ion-segment-button value="0" (click)="selectedTab(0)">\n\n        Proteccion\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="1" (click)="selectedTab(1)">\n\n        Movimientos\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="2" (click)="selectedTab(2)">\n\n        Ofensivos\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="3" (click)="selectedTab(3)">\n\n        Defensivos\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="4" (click)="selectedTab(4)">\n\n        Otros\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background-color: rgb(210, 217, 226);">\n\n\n\n  <video id="player" hidden controls></video>\n\n\n\n  <ion-slides #slider (ionSlideDidChange)="slideChanged()">\n\n\n\n    <ion-slide>\n\n\n\n      <ion-list lines="none">\n\n\n\n        <ion-item lines="none"\n\n          style="background-color: rgb(210, 217, 226); padding-left: 0 !important; padding-right: 0 !important"\n\n          *ngFor="let dummy of \' \'.repeat(5).split(\'\'), let i = index">\n\n\n\n          <ion-card>\n\n\n\n            <ion-card-content\n\n              style="padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important;">\n\n\n\n              <div style="\n\n                height: 100%;\n\n                padding: 0;\n\n                margin: 0;\n\n                display: -webkit-box;\n\n                display: -moz-box;\n\n                display: -ms-flexbox;\n\n                display: -webkit-flex;\n\n                display: flex;\n\n                align-items: center;\n\n                justify-content: center;">\n\n\n\n                <div style="\n\n                  flex: 1; \n\n                  text-align: center;">\n\n\n\n                  <div style="\n\n                      background-color: rgb(110, 1, 7);\n\n                      border-radius: 13%;\n\n                      margin: 11%;">\n\n\n\n                    <img style="display: inline;" src="./assets/imgs/videoButton.jpg"\n\n                      (click)="goVideo(\'./assets/imgs/video3.mp4\');" />\n\n\n\n                  </div>\n\n\n\n                </div>\n\n\n\n                <div style="\n\n                  flex: 3; \n\n                  text-align: left;">\n\n\n\n                  <h2 style="\n\n                    Color: rgb(110, 1, 7);">\n\n                    Video {{i + 1}}\n\n                  </h2>\n\n\n\n                  <p style="white-space: pre-wrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\n\n\n                </div>\n\n\n\n              </div>\n\n\n\n            </ion-card-content>\n\n\n\n          </ion-card>\n\n\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n\n\n      <ion-list lines="none">\n\n\n\n        <ion-item lines="none"\n\n          style="background-color: rgb(210, 217, 226); padding-left: 0 !important; padding-right: 0 !important"\n\n          *ngFor="let dummy of \' \'.repeat(2).split(\'\'), let i = index">\n\n\n\n          <ion-card>\n\n\n\n            <ion-card-content\n\n              style="padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important;">\n\n\n\n              <div style="\n\n                height: 100%;\n\n                padding: 0;\n\n                margin: 0;\n\n                display: -webkit-box;\n\n                display: -moz-box;\n\n                display: -ms-flexbox;\n\n                display: -webkit-flex;\n\n                display: flex;\n\n                align-items: center;\n\n                justify-content: center;">\n\n\n\n                <div style="\n\n                  flex: 1; \n\n                  text-align: center;">\n\n\n\n                  <div style="\n\n                      background-color: rgb(110, 1, 7);\n\n                      border-radius: 13%;\n\n                      margin: 11%;">\n\n\n\n                    <img style="display: inline;" src="./assets/imgs/videoButton.jpg"\n\n                      (click)="goVideo(\'./assets/imgs/video2.mp4\');" />\n\n\n\n                  </div>\n\n\n\n                </div>\n\n\n\n                <div style="\n\n                  flex: 3; \n\n                  text-align: left;">\n\n\n\n                  <h2 style="\n\n                    Color: rgb(110, 1, 7);">\n\n                    Video {{i + 1}}\n\n                  </h2>\n\n\n\n                  <p style="white-space: pre-wrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\n\n\n                </div>\n\n\n\n              </div>\n\n\n\n            </ion-card-content>\n\n\n\n          </ion-card>\n\n\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n\n\n      <h1>Tab 3</h1>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n\n\n      <h1>Tab 4</h1>\n\n\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n\n\n      <h1>Tab 5</h1>\n\n\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mati\Documents\Proyectos\Cideso\react-web\manual-web-mobile\src\pages\proteccion\proteccion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProteccionPage);
    return ProteccionPage;
}());

//# sourceMappingURL=proteccion.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map