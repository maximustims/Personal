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
var login_component_1 = __webpack_require__("./src/app/web/modules/login/login.component.ts");
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
                error404_component_1.Error404Component,
                login_component_1.LoginComponent
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
var login_component_1 = __webpack_require__("./src/app/web/modules/login/login.component.ts");
var index_component_1 = __webpack_require__("./src/app/web/modules/index/index.component.ts");
var error404_component_1 = __webpack_require__("./src/app/web/modules/error404/error404.component.ts");
exports.WebLayoutRoutes = [
    {
        path: '',
        component: index_component_1.IndexComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '**',
        component: error404_component_1.Error404Component
    }
];


/***/ }),

/***/ "./src/app/web/modules/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error404 works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  index works!\r\n  <button mat-button class=\"btn btn-success\">Success</button>\r\n</p>\r\n"

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


/***/ }),

/***/ "./src/app/web/modules/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-page\" class=\"fake-bg d-flex align-items-center\">\n    <div class=\"background-fake\"></div>\n    <form action=\"\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card card-login\">\n                    <div class=\"card-header text-center\">\n                        <h4 class=\"card-title\">Login</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">face</i>\n                            </span>\n                            <div class=\"form-group label-floating is-empty\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput type=\"text\" placeholder=\"Username / Email\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">lock_outline</i>\n                            </span>\n                            <div class=\"form-group label-floating is-empty\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput type=\"password\" placeholder=\"Password\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <button mat-button class=\"btn btn-default\" type=\"submit\">Login</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/web/modules/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "#login-page {\n  width: 100%;\n  height: 100vh;\n  background-image: url(\"/dist/assets/img/login.jpeg\"); }\n  #login-page form {\n    max-width: 390px;\n    margin: 0 auto;\n    width: 100%;\n    padding: 0 15px;\n    z-index: 3; }\n  #login-page .background-fake {\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n  #login-page .input-group {\n    padding: 0 15px;\n    position: relative; }\n  #login-page .input-group .input-group-addon {\n      border: 0;\n      background: transparent;\n      padding: 20px 15px 20px 0;\n      position: absolute;\n      top: 0;\n      left: 15px; }\n  #login-page .card {\n    margin: 0; }\n  #login-page .card-header {\n    background: linear-gradient(60deg, #ec407a, #d81b60);\n    -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n    color: white;\n    margin: -20px 15px 20px;\n    padding: 15px; }\n  #login-page .card-header h4 {\n      font-weight: 700;\n      color: white; }\n  #login-page .form-group {\n    width: 100%;\n    padding-left: 45px; }\n  #login-page .footer .btn {\n    margin: 0 auto;\n    background: linear-gradient(60deg, #ec407a, #d81b60); }\n"

/***/ }),

/***/ "./src/app/web/modules/login/login.component.ts":
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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/web/modules/login/login.component.html"),
            styles: [__webpack_require__("./src/app/web/modules/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ })

});
//# sourceMappingURL=web-layout.module.chunk.js.map