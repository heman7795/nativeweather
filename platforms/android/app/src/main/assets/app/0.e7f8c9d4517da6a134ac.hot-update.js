webpackHotUpdate(0,{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDYTtBQUNrRDtBQUNsRDtBQU8vRDtJQVdJLHVCQUFvQixZQUF5QixFQUFTLGdCQUFrQztRQUFwRSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMeEYsV0FBTSxHQUFXLElBQUk7UUFDckIsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlrRixDQUFDO0lBRTdGLGdDQUFRLEdBQVI7UUFDSSw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLG1KQUFtSixFQUFFLENBQUMsQ0FBQztRQUN2TSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDZMQUE2TCxFQUFFLENBQUMsQ0FBQztRQUMvTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLHdMQUF3TCxFQUFFLENBQUMsQ0FBQztRQUMzTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLDhMQUE4TCxFQUFFLENBQUMsQ0FBQztRQUNuUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLCtNQUErTSxFQUFFLENBQUMsQ0FBQztRQUNwUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFB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QUMsS0FBSyxDQUFDLE9BQU87WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUN2RCxLQUFJLENBQUMsSUFBSSxHQUFDLGFBQWEsR0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFDLGFBQWEsR0FBQyxHQUFHLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3RELEtBQUksQ0FBQyxTQUFTLEdBQUMsYUFBYSxHQUFDLEdBQUcsR0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQzlELENBQUMsRUFDRCxlQUFLO1lBQ0QsdUNBQXVDO1lBQ3ZDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QixDQUFDLENBQUM7SUFDRixDQUFDOztnQkFuR2lDLGdFQUFXO2dCQUEyQiw0RUFBZ0I7O0lBWC9FLGFBQWE7UUFMekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQzs7U0FFdkMsQ0FBQzt5Q0FZb0MsZ0VBQVcsRUFBMkIsNEVBQWdCO09BWC9FLGFBQWEsQ0FnSHpCO0lBQUQsb0JBQUM7Q0FBQTtBQWhIeUIiLCJmaWxlIjoiMC5lN2Y4YzlkNDUxN2RhNmExMzRhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwcm9tcHQsIFByb21wdFJlc3VsdCwgUHJvbXB0T3B0aW9ucywgaW5wdXRUeXBlLCBjYXBpdGFsaXphdGlvblR5cGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBEYXRhSXRlbSB9IGZyb20gXCIuLi9zaGFyZWQvZGF0YS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEFycmF5PERhdGFJdGVtPjtcclxuICAgIHdlYXRoZXI6IGFueTtcclxuICAgIGhyd2VhdGhlcjphbnlcclxuICAgIGRhdGFzOiBhbnk7XHJcbiAgICB0ZW1wOiBhbnk7XHJcbiAgICBzZWFyY2g6Ym9vbGVhbiA9IHRydWVcclxuICAgIGRhdGEgPSBbXTtcclxuICAgIHZpc2libGl0eTogYW55O1xyXG4gICAgd2luZHNwZWVkOiBhbnk7XHJcbiAgICBpc0J1c3k6Ym9vbGVhblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbVNlcnZpY2U6IERhdGFTZXJ2aWNlLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtcyA9IHRoaXMuX2l0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQnVsYmFzYXVyXCIsIGNvbnRlbnQ6IFwiQnVsYmFzYXVyIGNhbiBiZSBzZWVuIG5hcHBpbmcgaW4gYnJpZ2h0IHN1bmxpZ2h0LiBUaGVyZSBpcyBhIHNlZWQgb24gaXRzIGJhY2suIEJ5IHNvYWtpbmcgdXAgdGhlIHN1buKAmXMgcmF5cywgdGhlIHNlZWQgZ3Jvd3MgcHJvZ3Jlc3NpdmVseSBsYXJnZXIuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkl2eXNhdXJcIiwgY29udGVudDogXCJUbyBzdXBwb3J0IGl0cyB3ZWlnaHQsIEl2eXNhdXLigJlzIGxlZ3MgYW5kIHRydW5rIGdyb3cgdGhpY2sgYW5kIHN0cm9uZy4gSWYgaXQgc3RhcnRzIHNwZW5kaW5nIG1vcmUgdGltZSBseWluZyBpbiB0aGUgc3VubGlnaHQsIGl04oCZcyBhIHNpZ24gdGhhdCB0aGUgYnVkIHdpbGwgYmxvb20gaW50byBhIGxhcmdlIGZsb3dlciBzb29uLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJWZW51c2F1clwiLCBjb250ZW50OiBcIlRoZXJlIGlzIGEgbGFyZ2UgZmxvd2VyIG9uIFZlbnVzYXVy4oCZcyBiYWNrLiBUaGUgZmxvd2VyIGlzIHNhaWQgdG8gdGFrZSBvbiB2aXZpZCBjb2xvcnMgaWYgaXQgZ2V0cyBwbGVudHkgb2YgbnV0cml0aW9uIGFuZCBzdW5saWdodC4gVGhlIGZsb3dlcuKAmXMgYXJvbWEgc29vdGhlcyB0aGUgZW1vdGlvbnMgb2YgcGVvcGxlLlwiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJDaGFybWFuZGVyXCIsIGNvbnRlbnQ6IFwiVGhlIGZsYW1lIHRoYXQgYnVybnMgYXQgdGhlIHRpcCBvZiBpdHMgdGFpbCBpcyBhbiBpbmRpY2F0aW9uIG9mIGl0cyBlbW90aW9ucy4gVGhlIGZsYW1lIHdhdmVycyB3aGVuIENoYXJtYW5kZXIgaXMgZW5qb3lpbmcgaXRzZWxmLiBJZiB0aGUgUG9rw6ltb24gYmVjb21lcyBlbnJhZ2VkLCB0aGUgZmxhbWUgYnVybnMgZmllcmNlbHkuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJtZWxlb25cIiwgY29udGVudDogXCJDaGFybWVsZW9uIG1lcmNpbGVzc2x5IGRlc3Ryb3lzIGl0cyBmb2VzIHVzaW5nIGl0cyBzaGFycCBjbGF3cy4gSWYgaXQgZW5jb3VudGVycyBhIHN0cm9uZyBmb2UsIGl0IHR1cm5zIGFnZ3Jlc3NpdmUuIEluIHRoaXMgZXhjaXRlZCBzdGF0ZSwgdGhlIGZsYW1lIGF0IHRoZSB0aXAgb2YgaXRzIHRhaWwgZmxhcmVzIHdpdGggYSBibHVpc2ggd2hpdGUgY29sb3IuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkNoYXJpemFyZFwiLCBjb250ZW50OiBcIkNoYXJpemFyZCBmbGllcyBhcm91bmQgdGhlIHNreSBpbiBzZWFyY2ggb2YgcG93ZXJmdWwgb3Bwb25lbnRzLiBJdCBicmVhdGhlcyBmaXJlIG9mIHN1Y2ggZ3JlYXQgaGVhdCB0aGF0IGl0IG1lbHRzIGFueXRoaW5nLiBIb3dldmVyLCBpdCBuZXZlciB0dXJucyBpdHMgZmllcnkgYnJlYXRoIG9uIGFueSBvcHBvbmVudCB3ZWFrZXIgdGhhbiBpdHNlbGYuXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIlNxdWlydGxlXCIsIGNvbnRlbnQ6IFwiU3F1aXJ0bGXigJlzIHNoZWxsIGlzIG5vdCBtZXJlbHkgdXNlZCBmb3IgcHJvdGVjdGlvbi4gVGhlIHNoZWxs4oCZcyByb3VuZGVkIHNoYXBlIGFuZCB0aGUgZ3Jvb3ZlcyBvbiBpdHMgc3VyZmFjZSBoZWxwIG1pbmltaXplIHJlc2lzdGFuY2UgaW4gd2F0ZXIsIGVuYWJsaW5nIHRoaXMgUG9rw6ltb24gdG8gc3dpbSBhdCBoaWdoIHNwZWVkcy5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiV2FydG9ydGxlXCIsIGNvbnRlbnQ6IFwiSXRzIHRhaWwgaXMgbGFyZ2UgYW5kIGNvdmVyZWQgd2l0aCBhIHJpY2gsIHRoaWNrIGZ1ci4gVGhlIHRhaWwgYmVjb21lcyBpbmNyZWFzaW5nbHkgZGVlcGVyIGluIGNvbG9yIGFzIFdhcnRvcnRsZSBhZ2VzLiBUaGUgc2NyYXRjaGVzIG9uIGl0cyBzaGVsbCBhcmUgZXZpZGVuY2Ugb2YgdGhpcyBQb2vDqW1vbuKAmXMgdG91Z2huZXNzIGFzIGEgYmF0dGxlci5cIiB9KTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiQmxhc3RvaXNlXCIsIGNvbnRlbnQ6IFwiQmxhc3RvaXNlIGhhcyB3YXRlciBzcG91dHMgdGhhdCBwcm90cnVkZSBmcm9tIGl0cyBzaGVsbC4gVGhlIHdhdGVyIHNwb3V0cyBhcmUgdmVyeSBhY2N1cmF0ZS4gVGhleSBjYW4gc2hvb3QgYnVsbGV0cyBvZiB3YXRlciB3aXRoIGVub3VnaCBhY2N1cmFjeSB0byBzdHJpa2UgZW1wdHkgY2FucyBmcm9tIGEgZGlzdGFuY2Ugb2Ygb3ZlciAxNjAgZmVldC5cIiB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvblRhcCgpe1xyXG4gICAgICAgIC8vIHRoaXMuX2l0ZW1TZXJ2aWNlLmdldHdlYXRoZXIoKS5zdWJzY3JpYmUoZGF0YSA9PntcclxuICAgICAgICAvLyAgICAgdGhpcy53ZWF0aGVyID0gZGF0YVxyXG4gICAgICAgIC8vICAgICB0aGlzLmhyd2VhdGhlcj10aGlzLndlYXRoZXIuY29vcmRcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5ocndlYXRoZXIubG9uKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9pdGVtXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvbXB0RGlhbG9nKCkge1xyXG4gICAgICAgIC8vID4+IHByb21wdC1kaWFsb2ctY29kZVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaW1wb3J0IHtcclxuICAgICAgICAgICAgcHJvbXB0LFxyXG4gICAgICAgICAgICBQcm9tcHRSZXN1bHQsXHJcbiAgICAgICAgICAgIFByb21wdE9wdGlvbnMsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZSxcclxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb25UeXBlXHJcbiAgICAgICAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgb3B0aW9uczogUHJvbXB0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiV2VhdGhlciBGb3JlY2FzdFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCIgQ2hlbm5haSBcIixcclxuICAgICAgICAgICAgLy8gbWVzc2FnZTogXCJIb3cgeW91IGRvaW4nXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsIC8vIGVtYWlsLCBudW1iZXIsIHRleHQsIHBhc3N3b3JkLCBvciBlbWFpbFxyXG4gICAgICAgICAgICBjYXBpdGFsaXphdGlvblR5cGU6IGNhcGl0YWxpemF0aW9uVHlwZS5zZW50ZW5jZXMgLy8gYWxsLiBub25lLCBzZW50ZW5jZXMgb3Igd29yZHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzdWx0LnJlc3VsdCA9PSB0cnVlKXtcclxuICAgICAgICAgICB0aGlzLmdldHdlYXRoZXIocmVzdWx0LnRleHQpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vsc2Ugbm90aGluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlFZGl0RGlhbG9nKGNpdHk6c3RyaW5nKXtcclxuXHJcbiAgICAgICAgIGxldCBvcHRpb25zOiBQcm9tcHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJFZGl0IFdlYXRoZXIgRm9yZWNhc3RcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IGNpdHksXHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2U6IFwiSG93IHlvdSBkb2luJ1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiTmV1dHJhbFwiLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGlucHV0VHlwZS50ZXh0LCAvLyBlbWFpbCwgbnVtYmVyLCB0ZXh0LCBwYXNzd29yZCwgb3IgZW1haWxcclxuICAgICAgICAgICAgY2FwaXRhbGl6YXRpb25UeXBlOiBjYXBpdGFsaXphdGlvblR5cGUuc2VudGVuY2VzIC8vIGFsbC4gbm9uZSwgc2VudGVuY2VzIG9yIHdvcmRzXHJcbiAgICAgICAgfTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldHdlYXRoZXIocmVzdWx0LnRleHQpXHJcbiAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlIG5vdGhpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldHdlYXRoZXIoY2l0eTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaXNCdXN5PXRydWVcclxuICAgICAgICB0aGlzLl9pdGVtU2VydmljZS5nZXR3ZWF0aGVyKGNpdHkpLnN1YnNjcmliZShkYXRhID0+e1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlcj10aGlzLmRhdGFzLndlYXRoZXJcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyPVwiV2VhdGhlcjpcIitcIiBcIit0aGlzLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgdGhpcy50ZW1wPVwiVGVtcHJhdHVyZTpcIitcIiBcIit0aGlzLmRhdGFzLm1haW4udGVtcFxyXG4gICAgICAgICAgICB0aGlzLnZpc2libGl0eT1cIlZpc2liaWxpdHk6XCIrXCIgXCIrdGhpcy5kYXRhcy52aXNpYmlsaXR5XHJcbiAgICAgICAgICAgIHRoaXMud2luZHNwZWVkPVwiV2luZCBzcGVlZDpcIitcIiBcIit0aGlzLmRhdGFzLndpbmQuc3BlZWRcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yIG9jY3VyZW5jZVwiK2Vycm9yKVxyXG4gICAgICAgIGFsZXJ0KFwiV3JvbmcgY2l0eSBuYW1lXCIpXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==