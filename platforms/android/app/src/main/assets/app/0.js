(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");




var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "item", component: _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: #fff;\n    color: #4d4d4d;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n    font-style: italic;\n}\n\nbutton{\n    margin-bottom: 80%;\n}\n.page__content{\n    margin-top: 20%;\n}\n.page__content.card{\n    background-color: cornflowerblue;\n}\n\n\n\n\n.far {\n    font-family: \"Font Awesome 5 Free\", \"fa-regular-400\";\n}\n\n.fab {\n    font-family: \"Font Awesome 5 Brands\", \"fa-brands-400\";\n}\n\n.fas {\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n}\n\n.ico {\n    font-family: \"IcoMoon-Free\";\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <Label text=\"Weather app\"></Label>\r\n</ActionBar>\r\n<FlexboxLayout class=\"page\" *ngIf=\"search==true\">\r\n    <GridLayout class=\"page__content\" *ngIf=\"search==true\" (tap)=\"displayPromptDialog()\">\r\n        <Label class=\"page__content-icon fas\" text=\"&#xf002;\" ></Label>\r\n        <Label class=\"page__content-placeholder\" text=\"Search Here\"></Label>\r\n    </GridLayout>\r\n \r\n</FlexboxLayout>\r\n<ActivityIndicator color=\"green\" [busy]=\"processing\" rowSpan=\"3\"></ActivityIndicator>\r\n\r\n<GridLayout class=\"page__content\" *ngIf=\"search==false\" >\r\n        <StackLayout (tap)=\"displayEditDialog(datas.name)\">  \r\n            <CardView  class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\" (tap)=\"displayEditDialog(datas.name)\">\r\n                <StackLayout class=\"card-layout\" style=\"background-color: aquamarine;\">\r\n                    <Label class=\"h2\" [text]=\"datas.name\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"weather\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"temp\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"visiblity\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"windspeed\"></Label>\r\n                </StackLayout>\r\n            </CardView>\r\n        </StackLayout>\r\n</GridLayout>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/data.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_itemService, routerExtensions) {
        this._itemService = _itemService;
        this.routerExtensions = routerExtensions;
        this.search = true;
        this.data = [];
        this.processing = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.items = this._itemService.getItems();
        console.log("hello world");
    };
    HomeComponent.prototype.onButtonTap = function () {
        this.routerExtensions.navigate(["/item"], { clearHistory: true });
    };
    HomeComponent.prototype.displayPromptDialog = function () {
        var _this = this;
        var options = {
            title: "Weather Forecast",
            defaultText: " Chennai ",
            // message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral",
            cancelable: true,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["inputType"].text,
            capitalizationType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["capitalizationType"].sentences // all. none, sentences or words
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["prompt"])(options).then(function (result) {
            if (result.result == true) {
                _this.getweather(result.text);
            }
            else {
                console.log('else nothing');
                return;
            }
        });
    };
    HomeComponent.prototype.displayEditDialog = function (city) {
        var _this = this;
        var options = {
            title: "Edit Weather Forecast",
            defaultText: city,
            // message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral",
            cancelable: true,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["inputType"].text,
            capitalizationType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["capitalizationType"].sentences // all. none, sentences or words
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["prompt"])(options).then(function (result) {
            if (result.result == true) {
                _this.getweather(result.text);
            }
            else {
                console.log('else nothing');
                return;
            }
        });
    };
    HomeComponent.prototype.getweather = function (city) {
        var _this = this;
        this.processing = true;
        this._itemService.getweather(city).subscribe(function (data) {
            if (data) {
                _this.processing = false;
                _this.search = false;
                _this.datas = data;
                _this.weather = _this.datas.weather;
                _this.weather = "Weather:" + " " + _this.weather[0].description;
                _this.temp = "Temprature:" + " " + _this.datas.main.temp;
                _this.visiblity = "Visibility:" + " " + _this.datas.visibility;
                _this.windspeed = "Wind speed:" + " " + _this.datas.wind.speed;
            }
        }, function (error) {
            // console.log("error occurence"+error)
            _this.processing = false;
            alert("Wrong city name");
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/home/item-detail/item-detail.component.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_4__["ItemDetailComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./app/home/item-detail/item-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: #fff;\n    color: #4d4d4d;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n    font-style: italic;\n}\n"

/***/ }),

/***/ "./app/home/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <NavigationButton (tap)=\"onBackTap()\" android.systemIcon=\"ic_menu_back\"></NavigationButton>\r\n    <Label [text]=\"item.name\"></Label>\r\n</ActionBar>\r\n\r\n<GridLayout>\r\n    <Label class=\"m-10 h3\" verticalAlignment=\"top\" [text]=\"item.description\"></Label>\r\n</GridLayout>\r\n\r\n\r\n\r\n\r\n<ActionBar>\r\n    <Label text=\"Weather\"></Label>\r\n</ActionBar>\r\n\r\n\r\n<!-- <GridLayout>\r\n    <ListView [hrweather]=\"items\">\r\n        <ng-template let-item=\"item\">\r\n            <StackLayout>\r\n                <Label [nsRouterLink]=\"['../item', item.id]\" [text]=\"item.name\"></Label>\r\n                <Label  [text]=\"item.name\"></Label>\r\n            </StackLayout>\r\n        </ng-template>\r\n    </ListView>\r\n</GridLayout> -->\r\n\r\n\r\n<GridLayout class=\"page__content\" *ngIf=\"search==true\" (tap)=\"displayPromptDialog()\">\r\n    <Label class=\"page__content-icon fas\" text=\"&#xf002;\" ></Label>\r\n    <Label class=\"page__content-placeholder\" text=\"Search Here\"></Label>\r\n</GridLayout>\r\n\r\n<GridLayout  >\r\n\t<!-- <ScrollView class=\"page\"> -->\r\n\t\t<StackLayout>\r\n\t\t\r\n\t\t\t<!-- <CardView *ngFor=\"let item of data\" class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\r\n\t\t\t\t<StackLayout class=\"card-layout\">\r\n\t\t\t\t\t<Label class=\"h2\" [text]=\"item.heading\"></Label>\r\n\t\t\t\t\t<Label class=\"body\" textWrap=\"true\" [text]=\"item.content\"></Label>\r\n\t\t\t\t</StackLayout>\r\n            </CardView> -->\r\n            \r\n            <CardView  class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\r\n\t\t\t\t<StackLayout class=\"card-layout\">\r\n\t\t\t\t\t<Label class=\"h2\" text=\"Hemanth\"></Label>\r\n\t\t\t\t\t<Label class=\"body\" textWrap=\"true\" text=\"  I love Hemanth\"></Label>\r\n\t\t\t\t</StackLayout>\r\n\t\t\t</CardView>\r\n\t\t</StackLayout>\r\n\t<!-- </ScrollView> -->\r\n</GridLayout>\r\n<!-- <StackLayout class=\"p-15\" sdkExampleTitle sdkToggleNavButton>\r\n    <Button class=\"btn btn-primary btn-active\" text=\"Display Prompt Dialog\" (tap)=\"displayPromptDialog()\"></Button>\r\n</StackLayout> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./app/home/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/data.service.ts");





var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(_data, _route, _routerExtensions) {
        this._data = _data;
        this._route = _route;
        this._routerExtensions = _routerExtensions;
        this.search = true;
        this.data = [];
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        // const id = +this._route.snapshot.params.id;
        // this.item = this._data.getItem(id);
        console.log("hello world");
        this.data.push({ heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
        this.data.push({ heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
        this.data.push({ heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
        this.data.push({ heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
        this.data.push({ heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });
        this.data.push({ heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." });
        this.data.push({ heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." });
        this.data.push({ heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." });
        this.data.push({ heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." });
    };
    ItemDetailComponent.prototype.onBackTap = function () {
        this._routerExtensions.back();
    };
    ItemDetailComponent.prototype.displayPromptDialog = function () {
        var _this = this;
        // >> prompt-dialog-code
        /*
        import {
            prompt,
            PromptResult,
            PromptOptions,
            inputType,
            capitalizationType
        } from "tns-core-modules/ui/dialogs";
        */
        var options = {
            title: "Weather Forecast",
            defaultText: " Chennai ",
            // message: "How you doin'",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Neutral",
            cancelable: true,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["inputType"].text,
            capitalizationType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["capitalizationType"].sentences // all. none, sentences or words
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["prompt"])(options).then(function (result) {
            if (result.result == true) {
                _this._data.getweather(result.text).subscribe(function (data) {
                    _this.search = false;
                    _this.datas = data;
                    _this.weather = _this.datas.weather;
                    _this.weather = _this.weather[0].description;
                    _this.temp = _this.datas.main;
                    console.log(_this.weather[0].description);
                });
            }
            else {
                console.log('else nothing');
                return;
            }
        });
        // << prompt-dialog-code
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ItemDetail",
            template: __webpack_require__("./app/home/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("./app/home/item-detail/item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.items = new Array({
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        }, {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2"
        }, {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3"
        }, {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4"
        }, {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5"
        }, {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        }, {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        }, {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        }, {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        }, {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        }, {
            id: 11,
            name: "Item 11",
            description: "Description for Item 11"
        }, {
            id: 12,
            name: "Item 12",
            description: "Description for Item 12"
        }, {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        }, {
            id: 14,
            name: "Item 14",
            description: "Description for Item 14"
        }, {
            id: 15,
            name: "Item 15",
            description: "Description for Item 15"
        }, {
            id: 16,
            name: "Item 16",
            description: "Description for Item 16"
        }, {
            id: 17,
            name: "Item 17",
            description: "Description for Item 17"
        }, {
            id: 18,
            name: "Item 18",
            description: "Description for Item 18"
        }, {
            id: 19,
            name: "Item 19",
            description: "Description for Item 19"
        }, {
            id: 20,
            name: "Item 20",
            description: "Description for Item 20"
        });
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    DataService.prototype.getweather = function (city) {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=400b1dd6092bf5989d9b1b8c0252d67c');
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDeUI7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQ3RDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsc0ZBQW1CLEVBQUU7Q0FDbkQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5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SUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVc7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsR0FBQyxJQUFJLEdBQUMseUNBQXlDLENBQUM7SUFDOUgsQ0FBQzs7Z0JBYm9CLCtEQUFVOztJQXhHdEIsV0FBVztRQUh2QixnRUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0F5R3VCLCtEQUFVO09BeEd0QixXQUFXLENBc0h2QjtJQUFELGtCQUFDO0NBQUE7QUF0SHVCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJpdGVtXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxufVxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5idXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDgwJTtcXG59XFxuLnBhZ2VfX2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG59XFxuLnBhZ2VfX2NvbnRlbnQuY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblxcblxcblxcblxcbi5mYXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtcmVndWxhci00MDBcXFwiO1xcbn1cXG5cXG4uZmFiIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcXFwiLCBcXFwiZmEtYnJhbmRzLTQwMFxcXCI7XFxufVxcblxcbi5mYXMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIjtcXG59XFxuXFxuLmljbyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSWNvTW9vbi1GcmVlXFxcIjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIldlYXRoZXIgYXBwXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAqbmdJZj1cXFwic2VhcmNoPT10cnVlXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PXRydWVcXFwiICh0YXApPVxcXCJkaXNwbGF5UHJvbXB0RGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMDAyO1xcXCIgPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcIlNlYXJjaCBIZXJlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuIFxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgY29sb3I9XFxcImdyZWVuXFxcIiBbYnVzeV09XFxcInByb2Nlc3NpbmdcXFwiIHJvd1NwYW49XFxcIjNcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PWZhbHNlXFxcIiA+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgKHRhcCk9XFxcImRpc3BsYXlFZGl0RGlhbG9nKGRhdGFzLm5hbWUpXFxcIj4gIFxcclxcbiAgICAgICAgICAgIDxDYXJkVmlldyAgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiICh0YXApPVxcXCJkaXNwbGF5RWRpdERpYWxvZyhkYXRhcy5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcImRhdGFzLm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIndlYXRoZXJcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcInRlbXBcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcInZpc2libGl0eVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwid2luZHNwZWVkXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcHJvbXB0LCBQcm9tcHRSZXN1bHQsIFByb21wdE9wdGlvbnMsIGlucHV0VHlwZSwgY2FwaXRhbGl6YXRpb25UeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxEYXRhSXRlbT47XHJcbiAgICB3ZWF0aGVyOiBhbnk7XHJcbiAgICBocndlYXRoZXI6YW55XHJcbiAgICBkYXRhczogYW55O1xyXG4gICAgdGVtcDogYW55O1xyXG4gICAgc2VhcmNoOmJvb2xlYW4gPSB0cnVlXHJcbiAgICBkYXRhID0gW107XHJcbiAgICB2aXNpYmxpdHk6IGFueTtcclxuICAgIHdpbmRzcGVlZDogYW55O1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pdGVtU2VydmljZTogRGF0YVNlcnZpY2UscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy5faXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uVGFwKCl7XHJcbiAgICAgXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGVtXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvbXB0RGlhbG9nKCkge1xyXG4gIFxyXG4gICAgICAgIGxldCBvcHRpb25zOiBQcm9tcHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJXZWF0aGVyIEZvcmVjYXN0XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIiBDaGVubmFpIFwiLFxyXG4gICAgICAgICAgICAvLyBtZXNzYWdlOiBcIkhvdyB5b3UgZG9pbidcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWxcIixcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBpbnB1dFR5cGUudGV4dCwgLy8gZW1haWwsIG51bWJlciwgdGV4dCwgcGFzc3dvcmQsIG9yIGVtYWlsXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uVHlwZTogY2FwaXRhbGl6YXRpb25UeXBlLnNlbnRlbmNlcyAvLyBhbGwuIG5vbmUsIHNlbnRlbmNlcyBvciB3b3Jkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb21wdChvcHRpb25zKS50aGVuKChyZXN1bHQ6IFByb21wdFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQucmVzdWx0ID09IHRydWUpe1xyXG4gICAgICAgICAgIHRoaXMuZ2V0d2VhdGhlcihyZXN1bHQudGV4dClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSBub3RoaW5nJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUVkaXREaWFsb2coY2l0eTpzdHJpbmcpe1xyXG5cclxuICAgICAgICAgbGV0IG9wdGlvbnM6IFByb21wdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVkaXQgV2VhdGhlciBGb3JlY2FzdFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogY2l0eSxcclxuICAgICAgICAgICAgLy8gbWVzc2FnZTogXCJIb3cgeW91IGRvaW4nXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsIC8vIGVtYWlsLCBudW1iZXIsIHRleHQsIHBhc3N3b3JkLCBvciBlbWFpbFxyXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcclxuICAgICAgICB9OyBcclxuICAgICAgICBcclxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJlc3VsdCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0d2VhdGhlcihyZXN1bHQudGV4dClcclxuICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2Ugbm90aGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0d2VhdGhlcihjaXR5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9pdGVtU2VydmljZS5nZXR3ZWF0aGVyKGNpdHkpLnN1YnNjcmliZShkYXRhID0+e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGRhdGFcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyPXRoaXMuZGF0YXMud2VhdGhlclxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXI9XCJXZWF0aGVyOlwiK1wiIFwiK3RoaXMud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB0aGlzLnRlbXA9XCJUZW1wcmF0dXJlOlwiK1wiIFwiK3RoaXMuZGF0YXMubWFpbi50ZW1wXHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsaXR5PVwiVmlzaWJpbGl0eTpcIitcIiBcIit0aGlzLmRhdGFzLnZpc2liaWxpdHlcclxuICAgICAgICAgICAgdGhpcy53aW5kc3BlZWQ9XCJXaW5kIHNwZWVkOlwiK1wiIFwiK3RoaXMuZGF0YXMud2luZC5zcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBvY2N1cmVuY2VcIitlcnJvcilcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBhbGVydChcIldyb25nIGNpdHkgbmFtZVwiKVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBIb21lUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uICh0YXApPVxcXCJvbkJhY2tUYXAoKVxcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG4gICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0PlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcIm0tMTAgaDNcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuPEFjdGlvbkJhcj5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIldlYXRoZXJcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuXFxyXFxuPCEtLSA8R3JpZExheW91dD5cXHJcXG4gICAgPExpc3RWaWV3IFtocndlYXRoZXJdPVxcXCJpdGVtc1xcXCI+XFxyXFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVxcXCJbJy4uL2l0ZW0nLCBpdGVtLmlkXVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCAgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgIDwvTGlzdFZpZXc+XFxyXFxuPC9HcmlkTGF5b3V0PiAtLT5cXHJcXG5cXHJcXG5cXHJcXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCIgKm5nSWY9XFxcInNlYXJjaD09dHJ1ZVxcXCIgKHRhcCk9XFxcImRpc3BsYXlQcm9tcHREaWFsb2coKVxcXCI+XFxyXFxuICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1pY29uIGZhc1xcXCIgdGV4dD1cXFwiJiN4ZjAwMjtcXFwiID48L0xhYmVsPlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcIlNlYXJjaCBIZXJlXFxcIj48L0xhYmVsPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48R3JpZExheW91dCAgPlxcclxcblxcdDwhLS0gPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPiAtLT5cXHJcXG5cXHRcXHQ8U3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0PCEtLSA8Q2FyZFZpZXcgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBkYXRhXFxcIiBjbGFzcz1cXFwiY2FyZFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLmhlYWRpbmdcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmNvbnRlbnRcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0NhcmRWaWV3PiAtLT5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8Q2FyZFZpZXcgIGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIiBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiB0ZXh0PVxcXCJIZW1hbnRoXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIiAgSSBsb3ZlIEhlbWFudGhcXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHJcXG5cXHRcXHRcXHQ8L0NhcmRWaWV3PlxcclxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PCEtLSA8L1Njcm9sbFZpZXc+IC0tPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48IS0tIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0xNVxcXCIgc2RrRXhhbXBsZVRpdGxlIHNka1RvZ2dsZU5hdkJ1dHRvbj5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcXFwiIHRleHQ9XFxcIkRpc3BsYXkgUHJvbXB0IERpYWxvZ1xcXCIgKHRhcCk9XFxcImRpc3BsYXlQcm9tcHREaWFsb2coKVxcXCI+PC9CdXR0b24+XFxyXFxuPC9TdGFja0xheW91dD4gLS0+XFxyXFxuXFxyXFxuXFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwcm9tcHQsIFByb21wdFJlc3VsdCwgUHJvbXB0T3B0aW9ucywgaW5wdXRUeXBlLCBjYXBpdGFsaXphdGlvblR5cGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBEYXRhSXRlbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkl0ZW1EZXRhaWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW06IERhdGFJdGVtO1xyXG4gICAgd2VhdGhlcjogYW55O1xyXG4gICAgaHJ3ZWF0aGVyOmFueVxyXG4gICAgZGF0YXM6IGFueTtcclxuICAgIHRlbXA6IGFueTtcclxuICAgIHNlYXJjaDpib29sZWFuID0gdHJ1ZVxyXG4gICAgZGF0YSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZGF0YTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc3QgaWQgPSArdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xyXG4gICAgICAgIC8vIHRoaXMuaXRlbSA9IHRoaXMuX2RhdGEuZ2V0SXRlbShpZCk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJCdWxiYXNhdXJcIiwgY29udGVudDogXCJCdWxiYXNhdXIgY2FuIGJlIHNlZW4gbmFwcGluZyBpbiBicmlnaHQgc3VubGlnaHQuIFRoZXJlIGlzIGEgc2VlZCBvbiBpdHMgYmFjay4gQnkgc29ha2luZyB1cCB0aGUgc3Vu4oCZcyByYXlzLCB0aGUgc2VlZCBncm93cyBwcm9ncmVzc2l2ZWx5IGxhcmdlci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiSXZ5c2F1clwiLCBjb250ZW50OiBcIlRvIHN1cHBvcnQgaXRzIHdlaWdodCwgSXZ5c2F1cuKAmXMgbGVncyBhbmQgdHJ1bmsgZ3JvdyB0aGljayBhbmQgc3Ryb25nLiBJZiBpdCBzdGFydHMgc3BlbmRpbmcgbW9yZSB0aW1lIGx5aW5nIGluIHRoZSBzdW5saWdodCwgaXTigJlzIGEgc2lnbiB0aGF0IHRoZSBidWQgd2lsbCBibG9vbSBpbnRvIGEgbGFyZ2UgZmxvd2VyIHNvb24uXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIlZlbnVzYXVyXCIsIGNvbnRlbnQ6IFwiVGhlcmUgaXMgYSBsYXJnZSBmbG93ZXIgb24gVmVudXNhdXLigJlzIGJhY2suIFRoZSBmbG93ZXIgaXMgc2FpZCB0byB0YWtlIG9uIHZpdmlkIGNvbG9ycyBpZiBpdCBnZXRzIHBsZW50eSBvZiBudXRyaXRpb24gYW5kIHN1bmxpZ2h0LiBUaGUgZmxvd2Vy4oCZcyBhcm9tYSBzb290aGVzIHRoZSBlbW90aW9ucyBvZiBwZW9wbGUuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJtYW5kZXJcIiwgY29udGVudDogXCJUaGUgZmxhbWUgdGhhdCBidXJucyBhdCB0aGUgdGlwIG9mIGl0cyB0YWlsIGlzIGFuIGluZGljYXRpb24gb2YgaXRzIGVtb3Rpb25zLiBUaGUgZmxhbWUgd2F2ZXJzIHdoZW4gQ2hhcm1hbmRlciBpcyBlbmpveWluZyBpdHNlbGYuIElmIHRoZSBQb2vDqW1vbiBiZWNvbWVzIGVucmFnZWQsIHRoZSBmbGFtZSBidXJucyBmaWVyY2VseS5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQ2hhcm1lbGVvblwiLCBjb250ZW50OiBcIkNoYXJtZWxlb24gbWVyY2lsZXNzbHkgZGVzdHJveXMgaXRzIGZvZXMgdXNpbmcgaXRzIHNoYXJwIGNsYXdzLiBJZiBpdCBlbmNvdW50ZXJzIGEgc3Ryb25nIGZvZSwgaXQgdHVybnMgYWdncmVzc2l2ZS4gSW4gdGhpcyBleGNpdGVkIHN0YXRlLCB0aGUgZmxhbWUgYXQgdGhlIHRpcCBvZiBpdHMgdGFpbCBmbGFyZXMgd2l0aCBhIGJsdWlzaCB3aGl0ZSBjb2xvci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQ2hhcml6YXJkXCIsIGNvbnRlbnQ6IFwiQ2hhcml6YXJkIGZsaWVzIGFyb3VuZCB0aGUgc2t5IGluIHNlYXJjaCBvZiBwb3dlcmZ1bCBvcHBvbmVudHMuIEl0IGJyZWF0aGVzIGZpcmUgb2Ygc3VjaCBncmVhdCBoZWF0IHRoYXQgaXQgbWVsdHMgYW55dGhpbmcuIEhvd2V2ZXIsIGl0IG5ldmVyIHR1cm5zIGl0cyBmaWVyeSBicmVhdGggb24gYW55IG9wcG9uZW50IHdlYWtlciB0aGFuIGl0c2VsZi5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiU3F1aXJ0bGVcIiwgY29udGVudDogXCJTcXVpcnRsZeKAmXMgc2hlbGwgaXMgbm90IG1lcmVseSB1c2VkIGZvciBwcm90ZWN0aW9uLiBUaGUgc2hlbGzigJlzIHJvdW5kZWQgc2hhcGUgYW5kIHRoZSBncm9vdmVzIG9uIGl0cyBzdXJmYWNlIGhlbHAgbWluaW1pemUgcmVzaXN0YW5jZSBpbiB3YXRlciwgZW5hYmxpbmcgdGhpcyBQb2vDqW1vbiB0byBzd2ltIGF0IGhpZ2ggc3BlZWRzLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJXYXJ0b3J0bGVcIiwgY29udGVudDogXCJJdHMgdGFpbCBpcyBsYXJnZSBhbmQgY292ZXJlZCB3aXRoIGEgcmljaCwgdGhpY2sgZnVyLiBUaGUgdGFpbCBiZWNvbWVzIGluY3JlYXNpbmdseSBkZWVwZXIgaW4gY29sb3IgYXMgV2FydG9ydGxlIGFnZXMuIFRoZSBzY3JhdGNoZXMgb24gaXRzIHNoZWxsIGFyZSBldmlkZW5jZSBvZiB0aGlzIFBva8OpbW9u4oCZcyB0b3VnaG5lc3MgYXMgYSBiYXR0bGVyLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJCbGFzdG9pc2VcIiwgY29udGVudDogXCJCbGFzdG9pc2UgaGFzIHdhdGVyIHNwb3V0cyB0aGF0IHByb3RydWRlIGZyb20gaXRzIHNoZWxsLiBUaGUgd2F0ZXIgc3BvdXRzIGFyZSB2ZXJ5IGFjY3VyYXRlLiBUaGV5IGNhbiBzaG9vdCBidWxsZXRzIG9mIHdhdGVyIHdpdGggZW5vdWdoIGFjY3VyYWN5IHRvIHN0cmlrZSBlbXB0eSBjYW5zIGZyb20gYSBkaXN0YW5jZSBvZiBvdmVyIDE2MCBmZWV0LlwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja1RhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvbXB0RGlhbG9nKCkge1xyXG4gICAgICAgIC8vID4+IHByb21wdC1kaWFsb2ctY29kZVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaW1wb3J0IHtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICBQcm9tcHRSZXN1bHQsXHJcbiAgICAgICAgICAgIFByb21wdE9wdGlvbnMsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZSxcclxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb25UeXBlXHJcbiAgICAgICAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgb3B0aW9uczogUHJvbXB0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiV2VhdGhlciBGb3JlY2FzdFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCIgQ2hlbm5haSBcIixcclxuICAgICAgICAgICAgLy8gbWVzc2FnZTogXCJIb3cgeW91IGRvaW4nXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsIC8vIGVtYWlsLCBudW1iZXIsIHRleHQsIHBhc3N3b3JkLCBvciBlbWFpbFxyXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJlc3VsdCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEuZ2V0d2VhdGhlcihyZXN1bHQudGV4dCkuc3Vic2NyaWJlKGRhdGEgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyPXRoaXMuZGF0YXMud2VhdGhlclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcj10aGlzLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXA9dGhpcy5kYXRhcy5tYWluXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlIG5vdGhpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyA8PCBwcm9tcHQtZGlhbG9nLWNvZGVcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFJdGVtIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8RGF0YUl0ZW0+KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogOCxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gOFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA5LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxNSxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDE2LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTcsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxN1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxOCxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDE5LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMjAsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAyMFwiXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpe31cclxuXHJcbiAgICBnZXRJdGVtcygpOiBBcnJheTxEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IERhdGFJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXR3ZWF0aGVyKGNpdHk6c3RyaW5nKXtcclxuXHJcbiAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScrY2l0eSsnJmFwcGlkPTQwMGIxZGQ2MDkyYmY1OTg5ZDliMWI4YzAyNTJkNjdjJylcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9