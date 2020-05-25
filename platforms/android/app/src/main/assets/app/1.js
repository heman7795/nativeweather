(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/search/search-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search.component.ts");



var routes = [
    { path: "default", component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar {\n    background-color: black;\n    color: white;\n  }\n\n  Image {\n    margin-bottom: 20;\n    height: 70;\n  }\n  Button, TextField {\n    margin-bottom: 10;\n  }\n  .btn-primary {\n    background-color: #CB1D00;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  TextField {\n    placeholder-color: #C4AFB4;\n    color: black;\n  }\n\n  /* FlexboxLayout {\n    justify-content: center;\n    align-items: center;\n    background-size: cover;\n    background-image: url(\"~/images/background.jpg\");\n  }\n  StackLayout {\n    width: 300;\n    padding: 10 16;\n    background-color: #f0f0f0;\n  } */"

/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <Label text=\"Search\"></Label>\r\n</ActionBar>\r\n\r\n    <StackLayout class=\"form\">\r\n        <Image src=\"~/images/logo.png\"></Image>\r\n\r\n        <!-- <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n            autocorrect=\"false\" autocapitalizationType=\"none\"\r\n            [(ngModel)]=\"user.email\" class=\"input input-border\"></TextField> -->\r\n        <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"searchvalue\"\r\n            class=\"input input-border\"></TextField>\r\n\r\n        <!-- <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\"\r\n            class=\"btn btn-primary\" (tap)=\"submit()\"></Button>\r\n        <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\"\r\n            (tap)=\"signUp()\"></Button> -->\r\n            <!-- <Button text=\"Button\" class=\"btn btn-primary\" (tap)=\"onButtonTap()\"></Button> -->\r\n            <SearchBar hint=\"Search hint\" [text]=\"searchPhrase\"\r\n    (submit)=\"onSearchSubmit($event)\"></SearchBar>\r\n    </StackLayout>\r\n<!-- <GridLayout class=\"page__content\"> -->\r\n    <!-- <Label class=\"page__content-icon fas\" text=\"&#xf002;\"></Label> -->\r\n    <!-- <Label class=\"page__content-placeholder\" text=\"Search page content goes here\"></Label> -->\r\n<!-- </GridLayout> -->\r\n<!-- <FlexboxLayout>\r\n    <StackLayout>\r\n      <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\r\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\r\n  \r\n      <Button text=\"Sign in\"></Button>\r\n      <Button text=\"Sign up for Groceries\"></Button>\r\n    </StackLayout>\r\n  </FlexboxLayout> -->"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        // Use the constructor to inject services.
    }
    SearchComponent.prototype.ngOnInit = function () {
        // Use the "ngOnInit" handler to initialize data for the view.
    };
    SearchComponent.prototype.search = function () {
        console.log("haii");
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __webpack_require__("./app/search/search.component.html"),
            styles: [__webpack_require__("./app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/search/search-routing.module.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/search/search.component.ts");




var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
            ],
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VhcmNoL3NlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFbEI7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpRUFBZSxFQUFFO0NBQ2xELENBQUM7QUFNRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBSi9CLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2RoQyw2QkFBNkIsOEJBQThCLG1CQUFtQixLQUFLLGFBQWEsd0JBQXdCLGlCQUFpQixLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyxrQkFBa0IsZ0NBQWdDLHFCQUFxQixzQkFBc0IsS0FBSyxlQUFlLGlDQUFpQyxtQkFBbUIsS0FBSyx3QkFBd0IsOEJBQThCLDBCQUEwQiw2QkFBNkIseURBQXlELEtBQUssaUJBQWlCLGlCQUFpQixxQkFBcUIsZ0NBQWdDLEtBQUssSTs7Ozs7OztBQ0FubkIsdXFDQUF1cUMsaWpCOzs7Ozs7OztBQ0F2cUM7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFRbEQ7SUFFSTtRQUNJLDBDQUEwQztJQUM5QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLDhEQUE4RDtJQUNsRSxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25CLENBQUM7SUFYUSxlQUFlO1FBTjNCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUVsQixtRUFBc0M7O1NBRXpDLENBQUM7O09BQ1csZUFBZSxDQVkzQjtJQUFELHNCQUFDO0NBQUE7QUFaMkI7Ozs7Ozs7OztBQ1I1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFFVDtBQUNUO0FBY3JEO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBWnhCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QiwwRUFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaUVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFjdGlvbkJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBJbWFnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbiAgICBoZWlnaHQ6IDcwO1xcbiAgfVxcbiAgQnV0dG9uLCBUZXh0RmllbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gIH1cXG4gIC5idG4tcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQjFEMDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICBUZXh0RmllbGQge1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI0M0QUZCNDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLyogRmxleGJveExheW91dCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICB9XFxuICBTdGFja0xheW91dCB7XFxuICAgIHdpZHRoOiAzMDA7XFxuICAgIHBhZGRpbmc6IDEwIDE2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgfSAqL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWFyY2hcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxyXFxuICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS0gPFRleHRGaWVsZCBoaW50PVxcXCJFbWFpbCBBZGRyZXNzXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXHJcXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+IC0tPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VhcmNodmFsdWVcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuXFxyXFxuICAgICAgICA8IS0tIDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1xcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXFxcIlxcclxcbiAgICAgICAgICAgICh0YXApPVxcXCJzaWduVXAoKVxcXCI+PC9CdXR0b24+IC0tPlxcclxcbiAgICAgICAgICAgIDwhLS0gPEJ1dHRvbiB0ZXh0PVxcXCJCdXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJvbkJ1dHRvblRhcCgpXFxcIj48L0J1dHRvbj4gLS0+XFxyXFxuICAgICAgICAgICAgPFNlYXJjaEJhciBoaW50PVxcXCJTZWFyY2ggaGludFxcXCIgW3RleHRdPVxcXCJzZWFyY2hQaHJhc2VcXFwiXFxyXFxuICAgIChzdWJtaXQpPVxcXCJvblNlYXJjaFN1Ym1pdCgkZXZlbnQpXFxcIj48L1NlYXJjaEJhcj5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48IS0tIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIj4gLS0+XFxyXFxuICAgIDwhLS0gPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMDAyO1xcXCI+PC9MYWJlbD4gLS0+XFxyXFxuICAgIDwhLS0gPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCJTZWFyY2ggcGFnZSBjb250ZW50IGdvZXMgaGVyZVxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuPCEtLSA8L0dyaWRMYXlvdXQ+IC0tPlxcclxcbjwhLS0gPEZsZXhib3hMYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVtYWlsIEFkZHJlc3NcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxyXFxuICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICBcXHJcXG4gICAgICA8QnV0dG9uIHRleHQ9XFxcIlNpZ24gaW5cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2lnbiB1cCBmb3IgR3JvY2VyaWVzXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG4gIDwvRmxleGJveExheW91dD4gLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NlYXJjaC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIlxyXG4gICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VhcmNodmFsdWU6YW55XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICB9XHJcbiAgICBzZWFyY2goKXtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFpaVwiKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgU2VhcmNoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3NlYXJjaC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2guY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTZWFyY2hSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2VhcmNoQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==