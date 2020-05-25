webpackHotUpdate(0,{

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: #fff;\n    color: #4d4d4d;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n    font-style: italic;\n}\n\nbutton{\n    margin-bottom: 80%;\n}\n.page__content{\n    margin-top: 20%;\n}\n.page__content.card{\n    background-color: cornflowerblue;\n}\n\n\n\n\n.far {\n    font-family: \"Font Awesome 5 Free\", \"fa-regular-400\";\n}\n\n.fab {\n    font-family: \"Font Awesome 5 Brands\", \"fa-brands-400\";\n}\n\n.fas {\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n}\n\n.ico {\n    font-family: \"IcoMoon-Free\";\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <Label text=\"Weather app\"></Label>\r\n</ActionBar>\r\n<FlexboxLayout class=\"page\" *ngIf=\"search==true\">\r\n    <GridLayout class=\"page__content\" *ngIf=\"search==true\" (tap)=\"displayPromptDialog()\">\r\n        <Label class=\"page__content-icon fas\" text=\"&#xf002;\" ></Label>\r\n        <Label class=\"page__content-placeholder\" text=\"Search Here\"></Label>\r\n    </GridLayout>\r\n \r\n</FlexboxLayout>\r\n<ActivityIndicator [busy]=\"isBusy\"></ActivityIndicator>\r\n<!-- <Image src=\"font://&#xf51e;\" stretch=\"none\" class=\"fas\"></Image> -->\r\n<!-- <StackLayout *ngIf=\"search==false\"> -->\r\n    <!-- <Image class=\"logo\" src=\"~/images/logo.png\"></Image>\r\n    <Label class=\"header\" text=\"WEATHER APP\"></Label> -->\r\n\r\n\r\n    <!-- <Button text =\"Search\" *ngIf=\"search==false\"\r\n        (tap)=\"displayPromptDialog()\" class=\"btn btn-primary m-t-20\"></Button> -->\r\n     <!-- <Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\r\n        (tap)=\"forgotPassword()\"></Label> -->\r\n <!-- </StackLayout>  -->\r\n<GridLayout class=\"page__content\" *ngIf=\"search==false\" >\r\n    <!-- <ScrollView class=\"page\"> -->\r\n        <StackLayout (tap)=\"displayEditDialog(datas.name)\">\r\n        \r\n            <!-- <CardView *ngFor=\"let item of data\" class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\">\r\n                <StackLayout class=\"card-layout\">\r\n                    <Label class=\"h2\" [text]=\"item.heading\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"item.content\"></Label>\r\n                </StackLayout>\r\n            </CardView> -->\r\n            \r\n            <CardView  class=\"card\" elevation=\"40\" radius=\"10\" ios:shadowRadius=\"3\" (tap)=\"displayEditDialog(datas.name)\">\r\n                <StackLayout class=\"card-layout\" style=\"background-color: aquamarine;\">\r\n                    <Label class=\"h2\" [text]=\"datas.name\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"weather\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"temp\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"visiblity\"></Label>\r\n                    <Label class=\"body\" textWrap=\"true\" [text]=\"windspeed\"></Label>\r\n                </StackLayout>\r\n            </CardView>\r\n        </StackLayout>\r\n    <!-- </ScrollView> -->\r\n</GridLayout>"

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
            alert("plz ender only the city name correctly");
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qiw2QkFBNkIscUJBQXFCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLFdBQVcseUJBQXlCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLHNCQUFzQix1Q0FBdUMsR0FBRyxnQkFBZ0IsK0RBQStELEdBQUcsVUFBVSxnRUFBZ0UsR0FBRyxVQUFVLDZEQUE2RCxHQUFHLFVBQVUsb0NBQW9DLEdBQUcsQzs7Ozs7OztBQ0E1bkIsd1RBQXdULGdQQUFnUCxzNENBQXM0Qyxpa0I7Ozs7Ozs7O0FDQTk2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDYTtBQUNrRDtBQUNsRDtBQU8vRDtJQVdJLHVCQUFvQixZQUF5QixFQUFTLGdCQUFrQztRQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMeEYsV0FBTSxHQUFXLElBQUk7UUFDckIsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlrRixDQUFDO0lBRTdGLGdDQUFRLEdBQVI7UUFDSSw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLG1KQUFtSixFQUFFLENBQUMsQ0FBQztRQUN2TSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDZMQUE2TCxFQUFFLENBQUMsQ0FBQztRQUMvTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHdMQUF3TCxFQUFFLENBQUMsQ0FBQztRQUMzTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLDhMQUE4TCxFQUFFLENBQUMsQ0FBQztRQUNuUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLCtNQUErTSxFQUFFLENBQUMsQ0FBQztRQUNwUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBNQUEwTSxFQUFFLENBQUMsQ0FBQztRQUM5UCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLCtMQUErTCxFQUFFLENBQUMsQ0FBQztRQUNsUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBNQUEwTSxFQUFFLENBQUMsQ0FBQztRQUM5UCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLDBNQUEwTSxFQUFFLENBQUMsQ0FBQztJQUVsUSxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLG9EQUFvRDtRQUNwRCwwQkFBMEI7UUFDMUIsd0NBQXdDO1FBQ3hDLHNDQUFzQztRQUN0QyxLQUFLO1FBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUFBLGlCQStCQztRQTlCRyx3QkFBd0I7UUFDeEI7Ozs7Ozs7O1VBUUU7UUFDRixJQUFJLE9BQU8sR0FBa0I7WUFDekIsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixXQUFXLEVBQUUsV0FBVztZQUN4Qiw0QkFBNEI7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixnQ0FBZ0M7WUFDaEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLHFFQUFTLENBQUMsSUFBSTtZQUN6QixrQkFBa0IsRUFBRSw4RUFBa0IsQ0FBQyxTQUFTLENBQUMsZ0NBQWdDO1NBQ3BGLENBQUM7UUFFRiwwRUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQW9CO1lBQ3RDLElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUMxQjtpQkFBSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDdkIsT0FBTTthQUNiO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixJQUFXO1FBQTdCLGlCQXVCQztRQXJCSSxJQUFJLE9BQU8sR0FBa0I7WUFDMUIsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QixXQUFXLEVBQUUsSUFBSTtZQUNqQiw0QkFBNEI7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixnQ0FBZ0M7WUFDaEMsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLHFFQUFTLENBQUMsSUFBSTtZQUN6QixrQkFBa0IsRUFBRSw4RUFBa0IsQ0FBQyxTQUFTLENBQUMsZ0NBQWdDO1NBQ3BGLENBQUM7UUFFRiwwRUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQW9CO1lBQ3RDLElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUMxQjtpQkFBSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDdkIsT0FBTTthQUNiO1FBQ1YsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFXO1FBQXRCLGlCQWVDO1FBZEcsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFJO1lBQzdDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztZQUNuQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUk7WUFDakIsS0FBSSxDQUFDLE9BQU8sR0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUN2RCxLQUFJLENBQUMsSUFBSSxHQUFDLGFBQWEsR0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFDLGFBQWEsR0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3RELEtBQUksQ0FBQyxTQUFTLEdBQUMsYUFBYSxHQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQzlELENBQUMsRUFDRCxlQUFLO1lBQ0QsdUNBQXVDO1lBQ3ZDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDRixDQUFDOztnQkFuR2lDLGdFQUFXO2dCQUEyQiw0RUFBZ0I7O0lBWC9FLGFBQWE7UUFMekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQzs7U0FFdkMsQ0FBQzt5Q0FZb0MsZ0VBQVcsRUFBMkIsNEVBQWdCO09BWC9FLGFBQWEsQ0FnSHpCO0lBQUQsb0JBQUM7Q0FBQTtBQWhIeUIiLCJmaWxlIjoiMC4xYmY5ZTE1MjMyNDdhMTY4ZDJjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxuICAgIG1hcmdpbjogMTUgMTUgMDtcXG59XFxuLmNhcmQtbGF5b3V0IHtcXG4gICAgcGFkZGluZzogMjA7XFxufVxcbi5jYXJkLWxheW91dCAuaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5idXR0b257XFxuICAgIG1hcmdpbi1ib3R0b206IDgwJTtcXG59XFxuLnBhZ2VfX2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG59XFxuLnBhZ2VfX2NvbnRlbnQuY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblxcblxcblxcblxcbi5mYXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtcmVndWxhci00MDBcXFwiO1xcbn1cXG5cXG4uZmFiIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBCcmFuZHNcXFwiLCBcXFwiZmEtYnJhbmRzLTQwMFxcXCI7XFxufVxcblxcbi5mYXMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIjtcXG59XFxuXFxuLmljbyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSWNvTW9vbi1GcmVlXFxcIjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIldlYXRoZXIgYXBwXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAqbmdJZj1cXFwic2VhcmNoPT10cnVlXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PXRydWVcXFwiICh0YXApPVxcXCJkaXNwbGF5UHJvbXB0RGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJwYWdlX19jb250ZW50LWljb24gZmFzXFxcIiB0ZXh0PVxcXCImI3hmMDAyO1xcXCIgPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnQtcGxhY2Vob2xkZXJcXFwiIHRleHQ9XFxcIlNlYXJjaCBIZXJlXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuIFxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG48QWN0aXZpdHlJbmRpY2F0b3IgW2J1c3ldPVxcXCJpc0J1c3lcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuPCEtLSA8SW1hZ2Ugc3JjPVxcXCJmb250Oi8vJiN4ZjUxZTtcXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJmYXNcXFwiPjwvSW1hZ2U+IC0tPlxcclxcbjwhLS0gPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCJzZWFyY2g9PWZhbHNlXFxcIj4gLS0+XFxyXFxuICAgIDwhLS0gPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIj48L0ltYWdlPlxcclxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiV0VBVEhFUiBBUFBcXFwiPjwvTGFiZWw+IC0tPlxcclxcblxcclxcblxcclxcbiAgICA8IS0tIDxCdXR0b24gdGV4dCA9XFxcIlNlYXJjaFxcXCIgKm5nSWY9XFxcInNlYXJjaD09ZmFsc2VcXFwiXFxyXFxuICAgICAgICAodGFwKT1cXFwiZGlzcGxheVByb21wdERpYWxvZygpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFxcXCI+PC9CdXR0b24+IC0tPlxcclxcbiAgICAgPCEtLSA8TGFiZWwgKm5nSWY9XFxcImlzTG9nZ2luZ0luXFxcIiB0ZXh0PVxcXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cXFwiIGNsYXNzPVxcXCJsb2dpbi1sYWJlbFxcXCJcXHJcXG4gICAgICAgICh0YXApPVxcXCJmb3Jnb3RQYXNzd29yZCgpXFxcIj48L0xhYmVsPiAtLT5cXHJcXG4gPCEtLSA8L1N0YWNrTGF5b3V0PiAgLS0+XFxyXFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VfX2NvbnRlbnRcXFwiICpuZ0lmPVxcXCJzZWFyY2g9PWZhbHNlXFxcIiA+XFxyXFxuICAgIDwhLS0gPFNjcm9sbFZpZXcgY2xhc3M9XFxcInBhZ2VcXFwiPiAtLT5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dCAodGFwKT1cXFwiZGlzcGxheUVkaXREaWFsb2coZGF0YXMubmFtZSlcXFwiPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAgICAgPCEtLSA8Q2FyZFZpZXcgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBkYXRhXFxcIiBjbGFzcz1cXFwiY2FyZFxcXCIgZWxldmF0aW9uPVxcXCI0MFxcXCIgcmFkaXVzPVxcXCIxMFxcXCIgaW9zOnNoYWRvd1JhZGl1cz1cXFwiM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZC1sYXlvdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLmhlYWRpbmdcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIml0ZW0uY29udGVudFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0NhcmRWaWV3PiAtLT5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8Q2FyZFZpZXcgIGNsYXNzPVxcXCJjYXJkXFxcIiBlbGV2YXRpb249XFxcIjQwXFxcIiByYWRpdXM9XFxcIjEwXFxcIiBpb3M6c2hhZG93UmFkaXVzPVxcXCIzXFxcIiAodGFwKT1cXFwiZGlzcGxheUVkaXREaWFsb2coZGF0YXMubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmQtbGF5b3V0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJkYXRhcy5uYW1lXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ3ZWF0aGVyXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ0ZW1wXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJib2R5XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJ2aXNpYmxpdHlcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHlcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBbdGV4dF09XFxcIndpbmRzcGVlZFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0NhcmRWaWV3PlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPCEtLSA8L1Njcm9sbFZpZXc+IC0tPlxcclxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcHJvbXB0LCBQcm9tcHRSZXN1bHQsIFByb21wdE9wdGlvbnMsIGlucHV0VHlwZSwgY2FwaXRhbGl6YXRpb25UeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBBcnJheTxEYXRhSXRlbT47XHJcbiAgICB3ZWF0aGVyOiBhbnk7XHJcbiAgICBocndlYXRoZXI6YW55XHJcbiAgICBkYXRhczogYW55O1xyXG4gICAgdGVtcDogYW55O1xyXG4gICAgc2VhcmNoOmJvb2xlYW4gPSB0cnVlXHJcbiAgICBkYXRhID0gW107XHJcbiAgICB2aXNpYmxpdHk6IGFueTtcclxuICAgIHdpbmRzcGVlZDogYW55O1xyXG4gICAgaXNCdXN5OmJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2l0ZW1TZXJ2aWNlOiBEYXRhU2VydmljZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkJ1bGJhc2F1clwiLCBjb250ZW50OiBcIkJ1bGJhc2F1ciBjYW4gYmUgc2VlbiBuYXBwaW5nIGluIGJyaWdodCBzdW5saWdodC4gVGhlcmUgaXMgYSBzZWVkIG9uIGl0cyBiYWNrLiBCeSBzb2FraW5nIHVwIHRoZSBzdW7igJlzIHJheXMsIHRoZSBzZWVkIGdyb3dzIHByb2dyZXNzaXZlbHkgbGFyZ2VyLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJJdnlzYXVyXCIsIGNvbnRlbnQ6IFwiVG8gc3VwcG9ydCBpdHMgd2VpZ2h0LCBJdnlzYXVy4oCZcyBsZWdzIGFuZCB0cnVuayBncm93IHRoaWNrIGFuZCBzdHJvbmcuIElmIGl0IHN0YXJ0cyBzcGVuZGluZyBtb3JlIHRpbWUgbHlpbmcgaW4gdGhlIHN1bmxpZ2h0LCBpdOKAmXMgYSBzaWduIHRoYXQgdGhlIGJ1ZCB3aWxsIGJsb29tIGludG8gYSBsYXJnZSBmbG93ZXIgc29vbi5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiVmVudXNhdXJcIiwgY29udGVudDogXCJUaGVyZSBpcyBhIGxhcmdlIGZsb3dlciBvbiBWZW51c2F1cuKAmXMgYmFjay4gVGhlIGZsb3dlciBpcyBzYWlkIHRvIHRha2Ugb24gdml2aWQgY29sb3JzIGlmIGl0IGdldHMgcGxlbnR5IG9mIG51dHJpdGlvbiBhbmQgc3VubGlnaHQuIFRoZSBmbG93ZXLigJlzIGFyb21hIHNvb3RoZXMgdGhlIGVtb3Rpb25zIG9mIHBlb3BsZS5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQ2hhcm1hbmRlclwiLCBjb250ZW50OiBcIlRoZSBmbGFtZSB0aGF0IGJ1cm5zIGF0IHRoZSB0aXAgb2YgaXRzIHRhaWwgaXMgYW4gaW5kaWNhdGlvbiBvZiBpdHMgZW1vdGlvbnMuIFRoZSBmbGFtZSB3YXZlcnMgd2hlbiBDaGFybWFuZGVyIGlzIGVuam95aW5nIGl0c2VsZi4gSWYgdGhlIFBva8OpbW9uIGJlY29tZXMgZW5yYWdlZCwgdGhlIGZsYW1lIGJ1cm5zIGZpZXJjZWx5LlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJDaGFybWVsZW9uXCIsIGNvbnRlbnQ6IFwiQ2hhcm1lbGVvbiBtZXJjaWxlc3NseSBkZXN0cm95cyBpdHMgZm9lcyB1c2luZyBpdHMgc2hhcnAgY2xhd3MuIElmIGl0IGVuY291bnRlcnMgYSBzdHJvbmcgZm9lLCBpdCB0dXJucyBhZ2dyZXNzaXZlLiBJbiB0aGlzIGV4Y2l0ZWQgc3RhdGUsIHRoZSBmbGFtZSBhdCB0aGUgdGlwIG9mIGl0cyB0YWlsIGZsYXJlcyB3aXRoIGEgYmx1aXNoIHdoaXRlIGNvbG9yLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJDaGFyaXphcmRcIiwgY29udGVudDogXCJDaGFyaXphcmQgZmxpZXMgYXJvdW5kIHRoZSBza3kgaW4gc2VhcmNoIG9mIHBvd2VyZnVsIG9wcG9uZW50cy4gSXQgYnJlYXRoZXMgZmlyZSBvZiBzdWNoIGdyZWF0IGhlYXQgdGhhdCBpdCBtZWx0cyBhbnl0aGluZy4gSG93ZXZlciwgaXQgbmV2ZXIgdHVybnMgaXRzIGZpZXJ5IGJyZWF0aCBvbiBhbnkgb3Bwb25lbnQgd2Vha2VyIHRoYW4gaXRzZWxmLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJTcXVpcnRsZVwiLCBjb250ZW50OiBcIlNxdWlydGxl4oCZcyBzaGVsbCBpcyBub3QgbWVyZWx5IHVzZWQgZm9yIHByb3RlY3Rpb24uIFRoZSBzaGVsbOKAmXMgcm91bmRlZCBzaGFwZSBhbmQgdGhlIGdyb292ZXMgb24gaXRzIHN1cmZhY2UgaGVscCBtaW5pbWl6ZSByZXNpc3RhbmNlIGluIHdhdGVyLCBlbmFibGluZyB0aGlzIFBva8OpbW9uIHRvIHN3aW0gYXQgaGlnaCBzcGVlZHMuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIldhcnRvcnRsZVwiLCBjb250ZW50OiBcIkl0cyB0YWlsIGlzIGxhcmdlIGFuZCBjb3ZlcmVkIHdpdGggYSByaWNoLCB0aGljayBmdXIuIFRoZSB0YWlsIGJlY29tZXMgaW5jcmVhc2luZ2x5IGRlZXBlciBpbiBjb2xvciBhcyBXYXJ0b3J0bGUgYWdlcy4gVGhlIHNjcmF0Y2hlcyBvbiBpdHMgc2hlbGwgYXJlIGV2aWRlbmNlIG9mIHRoaXMgUG9rw6ltb27igJlzIHRvdWdobmVzcyBhcyBhIGJhdHRsZXIuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkJsYXN0b2lzZVwiLCBjb250ZW50OiBcIkJsYXN0b2lzZSBoYXMgd2F0ZXIgc3BvdXRzIHRoYXQgcHJvdHJ1ZGUgZnJvbSBpdHMgc2hlbGwuIFRoZSB3YXRlciBzcG91dHMgYXJlIHZlcnkgYWNjdXJhdGUuIFRoZXkgY2FuIHNob290IGJ1bGxldHMgb2Ygd2F0ZXIgd2l0aCBlbm91Z2ggYWNjdXJhY3kgdG8gc3RyaWtlIGVtcHR5IGNhbnMgZnJvbSBhIGRpc3RhbmNlIG9mIG92ZXIgMTYwIGZlZXQuXCIgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b25UYXAoKXtcclxuICAgICAgICAvLyB0aGlzLl9pdGVtU2VydmljZS5nZXR3ZWF0aGVyKCkuc3Vic2NyaWJlKGRhdGEgPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMud2VhdGhlciA9IGRhdGFcclxuICAgICAgICAvLyAgICAgdGhpcy5ocndlYXRoZXI9dGhpcy53ZWF0aGVyLmNvb3JkXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuaHJ3ZWF0aGVyLmxvbilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaXRlbVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb21wdERpYWxvZygpIHtcclxuICAgICAgICAvLyA+PiBwcm9tcHQtZGlhbG9nLWNvZGVcclxuICAgICAgICAvKlxyXG4gICAgICAgIGltcG9ydCB7XHJcbiAgICAgICAgICAgIHByb21wdCxcclxuICAgICAgICAgICAgUHJvbXB0UmVzdWx0LFxyXG4gICAgICAgICAgICBQcm9tcHRPcHRpb25zLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGUsXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uVHlwZVxyXG4gICAgICAgIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IFByb21wdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIldlYXRoZXIgRm9yZWNhc3RcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiIENoZW5uYWkgXCIsXHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2U6IFwiSG93IHlvdSBkb2luJ1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbFwiLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGlucHV0VHlwZS50ZXh0LCAvLyBlbWFpbCwgbnVtYmVyLCB0ZXh0LCBwYXNzd29yZCwgb3IgZW1haWxcclxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb25UeXBlOiBjYXBpdGFsaXphdGlvblR5cGUuc2VudGVuY2VzIC8vIGFsbC4gbm9uZSwgc2VudGVuY2VzIG9yIHdvcmRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgdGhpcy5nZXR3ZWF0aGVyKHJlc3VsdC50ZXh0KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlIG5vdGhpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RWRpdERpYWxvZyhjaXR5OnN0cmluZyl7XHJcblxyXG4gICAgICAgICBsZXQgb3B0aW9uczogUHJvbXB0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRWRpdCBXZWF0aGVyIEZvcmVjYXN0XCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBjaXR5LFxyXG4gICAgICAgICAgICAvLyBtZXNzYWdlOiBcIkhvdyB5b3UgZG9pbidcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWxcIixcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBpbnB1dFR5cGUudGV4dCwgLy8gZW1haWwsIG51bWJlciwgdGV4dCwgcGFzc3dvcmQsIG9yIGVtYWlsXHJcbiAgICAgICAgICAgIGNhcGl0YWxpemF0aW9uVHlwZTogY2FwaXRhbGl6YXRpb25UeXBlLnNlbnRlbmNlcyAvLyBhbGwuIG5vbmUsIHNlbnRlbmNlcyBvciB3b3Jkc1xyXG4gICAgICAgIH07IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb21wdChvcHRpb25zKS50aGVuKChyZXN1bHQ6IFByb21wdFJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQucmVzdWx0ID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXR3ZWF0aGVyKHJlc3VsdC50ZXh0KVxyXG4gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZSBub3RoaW5nJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXR3ZWF0aGVyKGNpdHk6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmlzQnVzeT10cnVlXHJcbiAgICAgICAgdGhpcy5faXRlbVNlcnZpY2UuZ2V0d2VhdGhlcihjaXR5KS5zdWJzY3JpYmUoZGF0YSA9PntcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gZGF0YVxyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXI9dGhpcy5kYXRhcy53ZWF0aGVyXHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcj1cIldlYXRoZXI6XCIrXCIgXCIrdGhpcy53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMudGVtcD1cIlRlbXByYXR1cmU6XCIrXCIgXCIrdGhpcy5kYXRhcy5tYWluLnRlbXBcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxpdHk9XCJWaXNpYmlsaXR5OlwiK1wiIFwiK3RoaXMuZGF0YXMudmlzaWJpbGl0eVxyXG4gICAgICAgICAgICB0aGlzLndpbmRzcGVlZD1cIldpbmQgc3BlZWQ6XCIrXCIgXCIrdGhpcy5kYXRhcy53aW5kLnNwZWVkXHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBvY2N1cmVuY2VcIitlcnJvcilcclxuICAgICAgICBhbGVydChcInBseiBlbmRlciBvbmx5IHRoZSBjaXR5IG5hbWUgY29ycmVjdGx5XCIpXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==