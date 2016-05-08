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
    var LogoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent(router) {
                    this.router = router;
                }
                LogoutComponent.prototype.onBackHome = function () {
                    this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
                };
                LogoutComponent = __decorate([
                    core_1.Component({
                        template: "\n\t    <section class=\"container\">\n\t    \t<div>\n\t    \t    <h3>Welcome</h3>\n\t\t    \t <p>\n\t\t    \t    This is a simple example with Angular 2 Ver. Beta0.17\n\t\t    \t    <br>\n\t\t    \t    <br>\n\n\t\t\t\t\t\tThank you!\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\n\t\t    \t    Email: kevin.chen278@gmail.com\n\t\t    \t    <br>\n\t\t    \t    Phone: 609-358-4178\n\t\t    \t    <br>\n\t\t    \t    Date:  8-May-2016\n\t\t    \t    <br>\n\t\t    \t    <br>\n\t\t    \t    <br>\n\t\t    \t    <br>\n\t\t    \t</p>\n\t    \t</div>\n\t\t\t<button (click)=\"onBackHome()\">Home</button>\n\t    </section>\n  \t\t",
                        styles: ["\n\t\t.container {\n\t\t\twidth: 98.5%;\n\t\t\theight: 604px;\n\t\t\tbackground-color: lightyellow;\n\t\t\tborder: 2px solid darkgray;\n\t\t}\n\n\t\tdiv {\n\t\t\tposition: relative;\n\t\t\tleft: 30%;\n\t\t\twidth: 40%;\n\t\t\theight: 400px;\n\t\t\ttop: 15%;\n\t\t\tborder: 2px solid lightgray;\n\t\t}\n\n\t\tbutton {\n\t\t\tposition: relative;\n\t\t\tleft: 48%;\n\t\t\ttop: 50px;\n\t\t}\n\n\t\th3 {\n\t\t\ttext-align: center;\n\t\t}\t\t\n\n\t"],
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], LogoutComponent);
                return LogoutComponent;
                var _a;
            }());
            exports_1("LogoutComponent", LogoutComponent);
        }
    }
});
//# sourceMappingURL=logout.component.js.map