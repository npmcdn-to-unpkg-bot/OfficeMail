System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import {UserComponent} from '../user/user.component';
            UserComponent = (function () {
                function UserComponent(router) {
                    this.router = router;
                }
                // routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
                // 	// this.selectedId = +curr.getParam('id');
                // 	// this.service.getHeroes().then(heroes => this.heroes = heroes);
                // 	// this.router.navigate(['/logout']);
                // }
                UserComponent.prototype.onEnter = function () {
                    this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
                };
                ;
                UserComponent.prototype.onLogout = function () {
                    this.router.navigate(['/logout']);
                };
                UserComponent = __decorate([
                    core_1.Component({
                        template: "\n\t    <section class=\"container\">\n\t    \t<div>\n\t    \t\t<h3 class=\"title\">Select your Accout</h3>\n\n\t\t\t\t<form>\n\t\t\t\t  <input type=\"radio\" name=\"gender\" value=\"fdsafd@fdafds.com\" checked> fdsafd@fdafds.com<br>\n\t\t\t\t  <input type=\"radio\" name=\"gender\" value=\"fdsafd@fdafds.com\"> fdsafd@fdafds.com<br>\n\t\t\t\t  <input type=\"radio\" name=\"gender\" value=\"fdsafd@fdafds.com\"> fdsafd@fdafds.com\n\n\t\t\t\t  <br>\n\t\t\t\t  <br>\t\n\t\t\t\t  Mock Inbox Mail Number: <br>\n\t\t\t\t  <input type=\"text\" value=\"1000\" name=\"firstname\"><br>\n\t\t\t\t  Mock Sent Mail Number:<br>\n\t\t\t\t  <input type=\"text\" value=\"278\" name=\"lastname\">\n\t\t\t\t</form>\t    \t\t\n\n    \t\t\t<button (click)=\"onEnter()\">Enter</button>\n    \t\t\t<button (click)=\"onLogout()\">Logout</button>\n\n\t    \t</div>\n\t    </section>\n  \t\t",
                        styles: ["\n\t\t.container {\n\t\t\twidth: 98.5%;\n\t\t\theight: 604px;\n\t\t\tbackground-color: lightyellow;\n\t\t\tborder: 2px solid darkgray;\n\t\t}\n\n\t\tdiv {\n\t\t\tposition: relative;\n\t\t\tleft: 30%;\n\t\t\twidth: 40%;\n\t\t\theight: 250px;\n\t\t\ttop: 20%;\n\t\t\tborder: 2px solid lightgray;\n\t\t}\n\n\t\th3 {\n\t\t\ttext-align: center;\n\t\t}\n\n\t"]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], UserComponent);
                return UserComponent;
                var _a;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map