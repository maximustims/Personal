webpackJsonp(["web-layout.module"],{

/***/ "./src/app/layouts/web-layout/web-layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var error404_component_1 = __webpack_require__("./src/app/web/modules/error404/error404.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var web_layout_routing_1 = __webpack_require__("./src/app/layouts/web-layout/web-layout.routing.ts");
var index_component_1 = __webpack_require__("./src/app/web/modules/index/index.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var WebLayoutModule = (function () {
    function WebLayoutModule() {
    }
    WebLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(web_layout_routing_1.WebLayoutRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatButtonModule,
                material_1.MatRippleModule,
                material_1.MatInputModule,
                material_1.MatTabsModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatSelectModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                material_1.MatSnackBarModule,
            ],
            declarations: [
                index_component_1.IndexComponent,
                error404_component_1.Error404Component
            ]
        })
    ], WebLayoutModule);
    return WebLayoutModule;
}());
exports.WebLayoutModule = WebLayoutModule;


/***/ }),

/***/ "./src/app/layouts/web-layout/web-layout.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_component_1 = __webpack_require__("./src/app/web/modules/index/index.component.ts");
var error404_component_1 = __webpack_require__("./src/app/web/modules/error404/error404.component.ts");
exports.WebLayoutRoutes = [
    {
        path: '',
        component: index_component_1.IndexComponent
    },
    {
        path: '**',
        component: error404_component_1.Error404Component
    }
];


/***/ }),

/***/ "./src/app/web/modules/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  error404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/web/modules/error404/error404.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/modules/error404/error404.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        core_1.Component({
            selector: 'app-error404',
            template: __webpack_require__("./src/app/web/modules/error404/error404.component.html"),
            styles: [__webpack_require__("./src/app/web/modules/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());
exports.Error404Component = Error404Component;


/***/ }),

/***/ "./src/app/web/modules/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  index works!\n  <button mat-button class=\"btn btn-success\">Success</button>\n</p>\n"

/***/ }),

/***/ "./src/app/web/modules/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web/modules/index/index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            template: __webpack_require__("./src/app/web/modules/index/index.component.html"),
            styles: [__webpack_require__("./src/app/web/modules/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;


/***/ })

});
//# sourceMappingURL=web-layout.module.chunk.js.map