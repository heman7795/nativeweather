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
    { path: "default", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
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

module.exports = "<ActionBar>\r\n    <Label text=\"Weather app\"></Label>\r\n</ActionBar>\r\n<FlexboxLayout class=\"page\" *ngIf=\"search==true\">\r\n    <GridLayout class=\"page__content\" *ngIf=\"search==true\" (tap)=\"displayPromptDialog()\">\r\n        <Label class=\"page__content-icon fas\" text=\"&#xf002;\" ></Label>\r\n        <Label class=\"page__content-placeholder\" text=\"Search Here\"></Label>\r\n    </GridLayout>\r\n \r\n</FlexboxLayout>\r\n<ActivityIndicator [busy]=\"isBusy == true\"></ActivityIndicator>\r\n<!-- <Image src=\"font://&#xf51e;\" stretch=\"none\" class=\"fas\"></Image> -->\r\n<!-- <StackLayout *ngIf=\"search==false\"> -->\r\n    <!-- <Image class=\"logo\" src=\"~/images/logo.png\"></Image>\r\n    <Label class=\"header\" text=\"WEATHER APP\"></Label> -->\r\n\r\n\r\n    <!-- <Button text =\"Search\" *ngIf=\"search==false\"\r\n        (tap)=\"displayPromptDialog()\" class=\"btn btn-primary m-t-20\"></Button> -->\r\n     <!-- <Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n        (tap)=\"forgotPassword()\"></Label> -->\r\n <!-- </StackLayout>  -->\r\n<GridLayout class=\"page__content\" *ngIf=\"search==false\" >\r\n    <!-- <ScrollView class=\"page\"> -->\r\n        <StackLayout (tap)=\"displayEditDialog(datas.name)\">\r\n        \r\n            <!-- <CardView *ngFor=\"let item of data\" class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\r\n                <StackLayout class=\"card-layout\">\r\n                    <Label class=\"h2\" [text]=\"item.heading\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"item.content\"></Label>\r\n                </StackLayout>\r\n            </CardView> -->\r\n            \r\n            <CardView  class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\" (tap)=\"displayEditDialog(datas.name)\">\r\n                <StackLayout class=\"card-layout\" style=\"background-color: aquamarine;\">\r\n                    <Label class=\"h2\" [text]=\"datas.name\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"weather\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"temp\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"visiblity\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"windspeed\"></Label>\r\n                </StackLayout>\r\n            </CardView>\r\n        </StackLayout>\r\n    <!-- </ScrollView> -->\r\n</GridLayout>"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.items = this._itemService.getItems();
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
    HomeComponent.prototype.onButtonTap = function () {
        // this._itemService.getweather().subscribe(data =>{
        //     this.weather = data
        //     this.hrweather=this.weather.coord
        //     console.log(this.hrweather.lon)
        // })
        this.routerExtensions.navigate(["/item"], { clearHistory: true });
    };
    HomeComponent.prototype.displayPromptDialog = function () {
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
        this.isBusy = true;
        this._itemService.getweather(city).subscribe(function (data) {
            _this.search = false;
            _this.datas = data;
            _this.weather = _this.datas.weather;
            _this.weather = "Weather:" + " " + _this.weather[0].description;
            _this.temp = "Temprature:" + " " + _this.datas.main.temp;
            _this.visiblity = "Visibility:" + " " + _this.datas.visibility;
            _this.windspeed = "Wind speed:" + " " + _this.datas.wind.speed;
        }, function (error) {
            // console.log("error occurence"+error)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFDeUI7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsc0ZBQW1CLEVBQUU7Q0FDbkQsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDaEI5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O1FBRWpCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEdBQUMsSUFBSSxHQUFDLHlDQUF5QyxDQUFDO0lBQzlILENBQUM7O2dCQWJvQiwrREFBVTs7SUF4R3RCLFdBQVc7UUFIdkIsZ0VBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBeUd1QiwrREFBVTtPQXhHdEIsV0FBVyxDQXNIdkI7SUFBRCxrQkFBQztDQUFBO0FBdEh1QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJkZWZhdWx0XCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcIml0ZW1cIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzRkNGQ0ZDtcXG4gICAgbWFyZ2luOiAxNSAxNSAwO1xcbn1cXG4uY2FyZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nOiAyMDtcXG59XFxuLmNhcmQtbGF5b3V0IC5oMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogODAlO1xcbn1cXG4ucGFnZV9fY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbn1cXG4ucGFnZV9fY29udGVudC5jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuXFxuXFxuXFxuXFxuLmZhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1yZWd1bGFyLTQwMFxcXCI7XFxufVxcblxcbi5mYWIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1xcXCIsIFxcXCJmYS1icmFuZHMtNDAwXFxcIjtcXG59XFxuXFxuLmZhcyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiO1xcbn1cXG5cXG4uaWNvIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJJY29Nb29uLUZyZWVcXFwiO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcclxcbiAgICA8TGFiZWwgdGV4dD1cXFwiV2VhdGhlciBhcHBcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PXRydWVcXFwiPlxcclxcbiAgICA8R3JpZExheW91dCBjbGFzcz1cXFwicGFnZV9fY29udGVudFxcXCIgKm5nSWY9XFxcInNlYXJjaD09dHJ1ZVxcXCIgKHRhcCk9XFxcImRpc3BsYXlQcm9tcHREaWFsb2coKVxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtaWNvbiBmYXNcXFwiIHRleHQ9XFxcIiYjeGYwMDI7XFxcIiA+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicGFnZV9fY29udGVudC1wbGFjZWhvbGRlclxcXCIgdGV4dD1cXFwiU2VhcmNoIEhlcmVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG4gXFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcbjxBY3Rpdml0eUluZGljYXRvciBbYnVzeV09XFxcImlzQnVzeSA9PSB0cnVlXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcclxcbjwhLS0gPEltYWdlIHNyYz1cXFwiZm9udDovLyYjeGY1MWU7XFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiZmFzXFxcIj48L0ltYWdlPiAtLT5cXHJcXG48IS0tIDxTdGFja0xheW91dCAqbmdJZj1cXFwic2VhcmNoPT1mYWxzZVxcXCI+IC0tPlxcclxcbiAgICA8IS0tIDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJ+L2ltYWdlcy9sb2dvLnBuZ1xcXCI+PC9JbWFnZT5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIldFQVRIRVIgQVBQXFxcIj48L0xhYmVsPiAtLT5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPCEtLSA8QnV0dG9uIHRleHQgPVxcXCJTZWFyY2hcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PWZhbHNlXFxcIlxcclxcbiAgICAgICAgKHRhcCk9XFxcImRpc3BsYXlQcm9tcHREaWFsb2coKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPiAtLT5cXHJcXG4gICAgIDwhLS0gPExhYmVsICpuZ0lmPVxcXCJpc0xvZ2dpbmdJblxcXCIgdGV4dD1cXFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XFxcIiBjbGFzcz1cXFwibG9naW4tbGFiZWxcXFwiXFxyXFxuICAgICAgICAodGFwKT1cXFwiZm9yZ290UGFzc3dvcmQoKVxcXCI+PC9MYWJlbD4gLS0+XFxyXFxuIDwhLS0gPC9TdGFja0xheW91dD4gIC0tPlxcclxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIiAqbmdJZj1cXFwic2VhcmNoPT1mYWxzZVxcXCIgPlxcclxcbiAgICA8IS0tIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj4gLS0+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgKHRhcCk9XFxcImRpc3BsYXlFZGl0RGlhbG9nKGRhdGFzLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgICAgIDwhLS0gPENhcmRWaWV3ICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgZGF0YVxcXCIgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS5oZWFkaW5nXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJpdGVtLmNvbnRlbnRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9DYXJkVmlldz4gLS0+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPENhcmRWaWV3ICBjbGFzcz1cXFwiY2FyZFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCIgKHRhcCk9XFxcImRpc3BsYXlFZGl0RGlhbG9nKGRhdGFzLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiZGF0YXMubmFtZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwid2VhdGhlclxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidGVtcFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwidmlzaWJsaXR5XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ3aW5kc3BlZWRcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwhLS0gPC9TY3JvbGxWaWV3PiAtLT5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHByb21wdCwgUHJvbXB0UmVzdWx0LCBQcm9tcHRPcHRpb25zLCBpbnB1dFR5cGUsIGNhcGl0YWxpemF0aW9uVHlwZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIERhdGFJdGVtIH0gZnJvbSBcIi4uL3NoYXJlZC9kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogQXJyYXk8RGF0YUl0ZW0+O1xyXG4gICAgd2VhdGhlcjogYW55O1xyXG4gICAgaHJ3ZWF0aGVyOmFueVxyXG4gICAgZGF0YXM6IGFueTtcclxuICAgIHRlbXA6IGFueTtcclxuICAgIHNlYXJjaDpib29sZWFuID0gdHJ1ZVxyXG4gICAgZGF0YSA9IFtdO1xyXG4gICAgdmlzaWJsaXR5OiBhbnk7XHJcbiAgICB3aW5kc3BlZWQ6IGFueTtcclxuICAgIGlzQnVzeTpib29sZWFuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pdGVtU2VydmljZTogRGF0YVNlcnZpY2UscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy5faXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJCdWxiYXNhdXJcIiwgY29udGVudDogXCJCdWxiYXNhdXIgY2FuIGJlIHNlZW4gbmFwcGluZyBpbiBicmlnaHQgc3VubGlnaHQuIFRoZXJlIGlzIGEgc2VlZCBvbiBpdHMgYmFjay4gQnkgc29ha2luZyB1cCB0aGUgc3Vu4oCZcyByYXlzLCB0aGUgc2VlZCBncm93cyBwcm9ncmVzc2l2ZWx5IGxhcmdlci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiSXZ5c2F1clwiLCBjb250ZW50OiBcIlRvIHN1cHBvcnQgaXRzIHdlaWdodCwgSXZ5c2F1cuKAmXMgbGVncyBhbmQgdHJ1bmsgZ3JvdyB0aGljayBhbmQgc3Ryb25nLiBJZiBpdCBzdGFydHMgc3BlbmRpbmcgbW9yZSB0aW1lIGx5aW5nIGluIHRoZSBzdW5saWdodCwgaXTigJlzIGEgc2lnbiB0aGF0IHRoZSBidWQgd2lsbCBibG9vbSBpbnRvIGEgbGFyZ2UgZmxvd2VyIHNvb24uXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIlZlbnVzYXVyXCIsIGNvbnRlbnQ6IFwiVGhlcmUgaXMgYSBsYXJnZSBmbG93ZXIgb24gVmVudXNhdXLigJlzIGJhY2suIFRoZSBmbG93ZXIgaXMgc2FpZCB0byB0YWtlIG9uIHZpdmlkIGNvbG9ycyBpZiBpdCBnZXRzIHBsZW50eSBvZiBudXRyaXRpb24gYW5kIHN1bmxpZ2h0LiBUaGUgZmxvd2Vy4oCZcyBhcm9tYSBzb290aGVzIHRoZSBlbW90aW9ucyBvZiBwZW9wbGUuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJtYW5kZXJcIiwgY29udGVudDogXCJUaGUgZmxhbWUgdGhhdCBidXJucyBhdCB0aGUgdGlwIG9mIGl0cyB0YWlsIGlzIGFuIGluZGljYXRpb24gb2YgaXRzIGVtb3Rpb25zLiBUaGUgZmxhbWUgd2F2ZXJzIHdoZW4gQ2hhcm1hbmRlciBpcyBlbmpveWluZyBpdHNlbGYuIElmIHRoZSBQb2vDqW1vbiBiZWNvbWVzIGVucmFnZWQsIHRoZSBmbGFtZSBidXJucyBmaWVyY2VseS5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQ2hhcm1lbGVvblwiLCBjb250ZW50OiBcIkNoYXJtZWxlb24gbWVyY2lsZXNzbHkgZGVzdHJveXMgaXRzIGZvZXMgdXNpbmcgaXRzIHNoYXJwIGNsYXdzLiBJZiBpdCBlbmNvdW50ZXJzIGEgc3Ryb25nIGZvZSwgaXQgdHVybnMgYWdncmVzc2l2ZS4gSW4gdGhpcyBleGNpdGVkIHN0YXRlLCB0aGUgZmxhbWUgYXQgdGhlIHRpcCBvZiBpdHMgdGFpbCBmbGFyZXMgd2l0aCBhIGJsdWlzaCB3aGl0ZSBjb2xvci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQ2hhcml6YXJkXCIsIGNvbnRlbnQ6IFwiQ2hhcml6YXJkIGZsaWVzIGFyb3VuZCB0aGUgc2t5IGluIHNlYXJjaCBvZiBwb3dlcmZ1bCBvcHBvbmVudHMuIEl0IGJyZWF0aGVzIGZpcmUgb2Ygc3VjaCBncmVhdCBoZWF0IHRoYXQgaXQgbWVsdHMgYW55dGhpbmcuIEhvd2V2ZXIsIGl0IG5ldmVyIHR1cm5zIGl0cyBmaWVyeSBicmVhdGggb24gYW55IG9wcG9uZW50IHdlYWtlciB0aGFuIGl0c2VsZi5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiU3F1aXJ0bGVcIiwgY29udGVudDogXCJTcXVpcnRsZeKAmXMgc2hlbGwgaXMgbm90IG1lcmVseSB1c2VkIGZvciBwcm90ZWN0aW9uLiBUaGUgc2hlbGzigJlzIHJvdW5kZWQgc2hhcGUgYW5kIHRoZSBncm9vdmVzIG9uIGl0cyBzdXJmYWNlIGhlbHAgbWluaW1pemUgcmVzaXN0YW5jZSBpbiB3YXRlciwgZW5hYmxpbmcgdGhpcyBQb2vDqW1vbiB0byBzd2ltIGF0IGhpZ2ggc3BlZWRzLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJXYXJ0b3J0bGVcIiwgY29udGVudDogXCJJdHMgdGFpbCBpcyBsYXJnZSBhbmQgY292ZXJlZCB3aXRoIGEgcmljaCwgdGhpY2sgZnVyLiBUaGUgdGFpbCBiZWNvbWVzIGluY3JlYXNpbmdseSBkZWVwZXIgaW4gY29sb3IgYXMgV2FydG9ydGxlIGFnZXMuIFRoZSBzY3JhdGNoZXMgb24gaXRzIHNoZWxsIGFyZSBldmlkZW5jZSBvZiB0aGlzIFBva8OpbW9u4oCZcyB0b3VnaG5lc3MgYXMgYSBiYXR0bGVyLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJCbGFzdG9pc2VcIiwgY29udGVudDogXCJCbGFzdG9pc2UgaGFzIHdhdGVyIHNwb3V0cyB0aGF0IHByb3RydWRlIGZyb20gaXRzIHNoZWxsLiBUaGUgd2F0ZXIgc3BvdXRzIGFyZSB2ZXJ5IGFjY3VyYXRlLiBUaGV5IGNhbiBzaG9vdCBidWxsZXRzIG9mIHdhdGVyIHdpdGggZW5vdWdoIGFjY3VyYWN5IHRvIHN0cmlrZSBlbXB0eSBjYW5zIGZyb20gYSBkaXN0YW5jZSBvZiBvdmVyIDE2MCBmZWV0LlwiIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uVGFwKCl7XHJcbiAgICAgICAgLy8gdGhpcy5faXRlbVNlcnZpY2UuZ2V0d2VhdGhlcigpLnN1YnNjcmliZShkYXRhID0+e1xyXG4gICAgICAgIC8vICAgICB0aGlzLndlYXRoZXIgPSBkYXRhXHJcbiAgICAgICAgLy8gICAgIHRoaXMuaHJ3ZWF0aGVyPXRoaXMud2VhdGhlci5jb29yZFxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmhyd2VhdGhlci5sb24pXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2l0ZW1cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9tcHREaWFsb2coKSB7XHJcbiAgICAgICAgLy8gPj4gcHJvbXB0LWRpYWxvZy1jb2RlXHJcbiAgICAgICAgLypcclxuICAgICAgICBpbXBvcnQge1xyXG4gICAgICAgICAgICBwcm9tcHQsXHJcbiAgICAgICAgICAgIFByb21wdFJlc3VsdCxcclxuICAgICAgICAgICAgUHJvbXB0T3B0aW9ucyxcclxuICAgICAgICAgICAgaW5wdXRUeXBlLFxyXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGVcclxuICAgICAgICB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuICAgICAgICAqL1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBQcm9tcHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJXZWF0aGVyIEZvcmVjYXN0XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIiBDaGVubmFpIFwiLFxyXG4gICAgICAgICAgICAvLyBtZXNzYWdlOiBcIkhvdyB5b3UgZG9pbidcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWxcIixcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBpbnB1dFR5cGUudGV4dCwgLy8gZW1haWwsIG51bWJlciwgdGV4dCwgcGFzc3dvcmQsIG9yIGVtYWlsXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uVHlwZTogY2FwaXRhbGl6YXRpb25UeXBlLnNlbnRlbmNlcyAvLyBhbGwuIG5vbmUsIHNlbnRlbmNlcyBvciB3b3Jkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb21wdChvcHRpb25zKS50aGVuKChyZXN1bHQ6IFByb21wdFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQucmVzdWx0ID09IHRydWUpe1xyXG4gICAgICAgICAgIHRoaXMuZ2V0d2VhdGhlcihyZXN1bHQudGV4dClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSBub3RoaW5nJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUVkaXREaWFsb2coY2l0eTpzdHJpbmcpe1xyXG5cclxuICAgICAgICAgbGV0IG9wdGlvbnM6IFByb21wdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVkaXQgV2VhdGhlciBGb3JlY2FzdFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogY2l0eSxcclxuICAgICAgICAgICAgLy8gbWVzc2FnZTogXCJIb3cgeW91IGRvaW4nXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsIC8vIGVtYWlsLCBudW1iZXIsIHRleHQsIHBhc3N3b3JkLCBvciBlbWFpbFxyXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcclxuICAgICAgICB9OyBcclxuICAgICAgICBcclxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJlc3VsdCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0d2VhdGhlcihyZXN1bHQudGV4dClcclxuICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2Ugbm90aGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0d2VhdGhlcihjaXR5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5pc0J1c3k9dHJ1ZVxyXG4gICAgICAgIHRoaXMuX2l0ZW1TZXJ2aWNlLmdldHdlYXRoZXIoY2l0eSkuc3Vic2NyaWJlKGRhdGEgPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGRhdGFcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyPXRoaXMuZGF0YXMud2VhdGhlclxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXI9XCJXZWF0aGVyOlwiK1wiIFwiK3RoaXMud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB0aGlzLnRlbXA9XCJUZW1wcmF0dXJlOlwiK1wiIFwiK3RoaXMuZGF0YXMubWFpbi50ZW1wXHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsaXR5PVwiVmlzaWJpbGl0eTpcIitcIiBcIit0aGlzLmRhdGFzLnZpc2liaWxpdHlcclxuICAgICAgICAgICAgdGhpcy53aW5kc3BlZWQ9XCJXaW5kIHNwZWVkOlwiK1wiIFwiK3RoaXMuZGF0YXMud2luZC5zcGVlZFxyXG4gICAgfSxcclxuICAgIGVycm9yID0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3Igb2NjdXJlbmNlXCIrZXJyb3IpXHJcbiAgICAgICAgYWxlcnQoXCJXcm9uZyBjaXR5IG5hbWVcIilcclxuICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxufVxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiAodGFwKT1cXFwib25CYWNrVGFwKClcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJtLTEwIGgzXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbjxBY3Rpb25CYXI+XFxyXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJXZWF0aGVyXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcblxcclxcbjwhLS0gPEdyaWRMYXlvdXQ+XFxyXFxuICAgIDxMaXN0VmlldyBbaHJ3ZWF0aGVyXT1cXFwiaXRlbXNcXFwiPlxcclxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbbnNSb3V0ZXJMaW5rXT1cXFwiWycuLi9pdGVtJywgaXRlbS5pZF1cXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICA8L0xpc3RWaWV3PlxcclxcbjwvR3JpZExheW91dD4gLS0+XFxyXFxuXFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PXRydWVcXFwiICh0YXApPVxcXCJkaXNwbGF5UHJvbXB0RGlhbG9nKClcXFwiPlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtaWNvbiBmYXNcXFwiIHRleHQ9XFxcIiYjeGYwMDI7XFxcIiA+PC9MYWJlbD5cXHJcXG4gICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LXBsYWNlaG9sZGVyXFxcIiB0ZXh0PVxcXCJTZWFyY2ggSGVyZVxcXCI+PC9MYWJlbD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgID5cXHJcXG5cXHQ8IS0tIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIj4gLS0+XFxyXFxuXFx0XFx0PFN0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdDwhLS0gPENhcmRWaWV3ICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgZGF0YVxcXCIgY2xhc3M9XFxcImNhcmRcXFwiIGVsZXZhdGlvbj1cXFwiNDBcXFwiIHJhZGl1cz1cXFwiMTBcXFwiIGlvczpzaGFkb3dSYWRpdXM9XFxcIjNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwiaDJcXFwiIFt0ZXh0XT1cXFwiaXRlbS5oZWFkaW5nXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDxMYWJlbCBjbGFzcz1cXFwiYm9keVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5jb250ZW50XFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9DYXJkVmlldz4gLS0+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPENhcmRWaWV3ICBjbGFzcz1cXFwiY2FyZFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkLWxheW91dFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgdGV4dD1cXFwiSGVtYW50aFxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCIgIEkgbG92ZSBIZW1hbnRoXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PC9DYXJkVmlldz5cXHJcXG5cXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdDwhLS0gPC9TY3JvbGxWaWV3PiAtLT5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuPCEtLSA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMTVcXFwiIHNka0V4YW1wbGVUaXRsZSBzZGtUb2dnbGVOYXZCdXR0b24+XFxyXFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYWN0aXZlXFxcIiB0ZXh0PVxcXCJEaXNwbGF5IFByb21wdCBEaWFsb2dcXFwiICh0YXApPVxcXCJkaXNwbGF5UHJvbXB0RGlhbG9nKClcXFwiPjwvQnV0dG9uPlxcclxcbjwvU3RhY2tMYXlvdXQ+IC0tPlxcclxcblxcclxcblxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcHJvbXB0LCBQcm9tcHRSZXN1bHQsIFByb21wdE9wdGlvbnMsIGlucHV0VHlwZSwgY2FwaXRhbGl6YXRpb25UeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJJdGVtRGV0YWlsXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtOiBEYXRhSXRlbTtcclxuICAgIHdlYXRoZXI6IGFueTtcclxuICAgIGhyd2VhdGhlcjphbnlcclxuICAgIGRhdGFzOiBhbnk7XHJcbiAgICB0ZW1wOiBhbnk7XHJcbiAgICBzZWFyY2g6Ym9vbGVhbiA9IHRydWVcclxuICAgIGRhdGEgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RhdGE6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnN0IGlkID0gK3RoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcclxuICAgICAgICAvLyB0aGlzLml0ZW0gPSB0aGlzLl9kYXRhLmdldEl0ZW0oaWQpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQnVsYmFzYXVyXCIsIGNvbnRlbnQ6IFwiQnVsYmFzYXVyIGNhbiBiZSBzZWVuIG5hcHBpbmcgaW4gYnJpZ2h0IHN1bmxpZ2h0LiBUaGVyZSBpcyBhIHNlZWQgb24gaXRzIGJhY2suIEJ5IHNvYWtpbmcgdXAgdGhlIHN1buKAmXMgcmF5cywgdGhlIHNlZWQgZ3Jvd3MgcHJvZ3Jlc3NpdmVseSBsYXJnZXIuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkl2eXNhdXJcIiwgY29udGVudDogXCJUbyBzdXBwb3J0IGl0cyB3ZWlnaHQsIEl2eXNhdXLigJlzIGxlZ3MgYW5kIHRydW5rIGdyb3cgdGhpY2sgYW5kIHN0cm9uZy4gSWYgaXQgc3RhcnRzIHNwZW5kaW5nIG1vcmUgdGltZSBseWluZyBpbiB0aGUgc3VubGlnaHQsIGl04oCZcyBhIHNpZ24gdGhhdCB0aGUgYnVkIHdpbGwgYmxvb20gaW50byBhIGxhcmdlIGZsb3dlciBzb29uLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJWZW51c2F1clwiLCBjb250ZW50OiBcIlRoZXJlIGlzIGEgbGFyZ2UgZmxvd2VyIG9uIFZlbnVzYXVy4oCZcyBiYWNrLiBUaGUgZmxvd2VyIGlzIHNhaWQgdG8gdGFrZSBvbiB2aXZpZCBjb2xvcnMgaWYgaXQgZ2V0cyBwbGVudHkgb2YgbnV0cml0aW9uIGFuZCBzdW5saWdodC4gVGhlIGZsb3dlcuKAmXMgYXJvbWEgc29vdGhlcyB0aGUgZW1vdGlvbnMgb2YgcGVvcGxlLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJDaGFybWFuZGVyXCIsIGNvbnRlbnQ6IFwiVGhlIGZsYW1lIHRoYXQgYnVybnMgYXQgdGhlIHRpcCBvZiBpdHMgdGFpbCBpcyBhbiBpbmRpY2F0aW9uIG9mIGl0cyBlbW90aW9ucy4gVGhlIGZsYW1lIHdhdmVycyB3aGVuIENoYXJtYW5kZXIgaXMgZW5qb3lpbmcgaXRzZWxmLiBJZiB0aGUgUG9rw6ltb24gYmVjb21lcyBlbnJhZ2VkLCB0aGUgZmxhbWUgYnVybnMgZmllcmNlbHkuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJtZWxlb25cIiwgY29udGVudDogXCJDaGFybWVsZW9uIG1lcmNpbGVzc2x5IGRlc3Ryb3lzIGl0cyBmb2VzIHVzaW5nIGl0cyBzaGFycCBjbGF3cy4gSWYgaXQgZW5jb3VudGVycyBhIHN0cm9uZyBmb2UsIGl0IHR1cm5zIGFnZ3Jlc3NpdmUuIEluIHRoaXMgZXhjaXRlZCBzdGF0ZSwgdGhlIGZsYW1lIGF0IHRoZSB0aXAgb2YgaXRzIHRhaWwgZmxhcmVzIHdpdGggYSBibHVpc2ggd2hpdGUgY29sb3IuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJpemFyZFwiLCBjb250ZW50OiBcIkNoYXJpemFyZCBmbGllcyBhcm91bmQgdGhlIHNreSBpbiBzZWFyY2ggb2YgcG93ZXJmdWwgb3Bwb25lbnRzLiBJdCBicmVhdGhlcyBmaXJlIG9mIHN1Y2ggZ3JlYXQgaGVhdCB0aGF0IGl0IG1lbHRzIGFueXRoaW5nLiBIb3dldmVyLCBpdCBuZXZlciB0dXJucyBpdHMgZmllcnkgYnJlYXRoIG9uIGFueSBvcHBvbmVudCB3ZWFrZXIgdGhhbiBpdHNlbGYuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIlNxdWlydGxlXCIsIGNvbnRlbnQ6IFwiU3F1aXJ0bGXigJlzIHNoZWxsIGlzIG5vdCBtZXJlbHkgdXNlZCBmb3IgcHJvdGVjdGlvbi4gVGhlIHNoZWxs4oCZcyByb3VuZGVkIHNoYXBlIGFuZCB0aGUgZ3Jvb3ZlcyBvbiBpdHMgc3VyZmFjZSBoZWxwIG1pbmltaXplIHJlc2lzdGFuY2UgaW4gd2F0ZXIsIGVuYWJsaW5nIHRoaXMgUG9rw6ltb24gdG8gc3dpbSBhdCBoaWdoIHNwZWVkcy5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiV2FydG9ydGxlXCIsIGNvbnRlbnQ6IFwiSXRzIHRhaWwgaXMgbGFyZ2UgYW5kIGNvdmVyZWQgd2l0aCBhIHJpY2gsIHRoaWNrIGZ1ci4gVGhlIHRhaWwgYmVjb21lcyBpbmNyZWFzaW5nbHkgZGVlcGVyIGluIGNvbG9yIGFzIFdhcnRvcnRsZSBhZ2VzLiBUaGUgc2NyYXRjaGVzIG9uIGl0cyBzaGVsbCBhcmUgZXZpZGVuY2Ugb2YgdGhpcyBQb2vDqW1vbuKAmXMgdG91Z2huZXNzIGFzIGEgYmF0dGxlci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQmxhc3RvaXNlXCIsIGNvbnRlbnQ6IFwiQmxhc3RvaXNlIGhhcyB3YXRlciBzcG91dHMgdGhhdCBwcm90cnVkZSBmcm9tIGl0cyBzaGVsbC4gVGhlIHdhdGVyIHNwb3V0cyBhcmUgdmVyeSBhY2N1cmF0ZS4gVGhleSBjYW4gc2hvb3QgYnVsbGV0cyBvZiB3YXRlciB3aXRoIGVub3VnaCBhY2N1cmFjeSB0byBzdHJpa2UgZW1wdHkgY2FucyBmcm9tIGEgZGlzdGFuY2Ugb2Ygb3ZlciAxNjAgZmVldC5cIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2tUYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb21wdERpYWxvZygpIHtcclxuICAgICAgICAvLyA+PiBwcm9tcHQtZGlhbG9nLWNvZGVcclxuICAgICAgICAvKlxyXG4gICAgICAgIGltcG9ydCB7XHJcbiAgICAgICAgICAgIHByb21wdCxcclxuICAgICAgICAgICAgUHJvbXB0UmVzdWx0LFxyXG4gICAgICAgICAgICBQcm9tcHRPcHRpb25zLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGUsXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uVHlwZVxyXG4gICAgICAgIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IFByb21wdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIldlYXRoZXIgRm9yZWNhc3RcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiIENoZW5uYWkgXCIsXHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2U6IFwiSG93IHlvdSBkb2luJ1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbFwiLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGlucHV0VHlwZS50ZXh0LCAvLyBlbWFpbCwgbnVtYmVyLCB0ZXh0LCBwYXNzd29yZCwgb3IgZW1haWxcclxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb25UeXBlOiBjYXBpdGFsaXphdGlvblR5cGUuc2VudGVuY2VzIC8vIGFsbC4gbm9uZSwgc2VudGVuY2VzIG9yIHdvcmRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhLmdldHdlYXRoZXIocmVzdWx0LnRleHQpLnN1YnNjcmliZShkYXRhID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VhdGhlcj10aGlzLmRhdGFzLndlYXRoZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXI9dGhpcy53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wPXRoaXMuZGF0YXMubWFpblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2VhdGhlclswXS5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSBub3RoaW5nJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gPDwgcHJvbXB0LWRpYWxvZy1jb2RlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhSXRlbSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PERhdGFJdGVtPihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSA3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSA4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxMlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMyxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDEzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxNixcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDE3LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMTdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMTdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTgsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSAxOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgSXRlbSAxOFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxOSxcclxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIDE5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGZvciBJdGVtIDE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkl0ZW0gMjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gZm9yIEl0ZW0gMjBcIlxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXt9XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8RGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBEYXRhSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0d2VhdGhlcihjaXR5OnN0cmluZyl7XHJcblxyXG4gICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nK2NpdHkrJyZhcHBpZD00MDBiMWRkNjA5MmJmNTk4OWQ5YjFiOGMwMjUyZDY3YycpXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==