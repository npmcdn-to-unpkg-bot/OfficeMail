System.register(['@angular/core', '@angular/router', '../master/master.component', '../user/user.component', '../logout/logout.component'], function(exports_1, context_1) {
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
    var core_1, router_1, master_component_1, user_component_1, logout_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (master_component_1_1) {
                master_component_1 = master_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/user']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t    <section class=\"top\">\n\t    \t<div class=\"top-left\">\n\t    \t    <a [routerLink]=\"['/home']\"> \n\t    \t    \t<span class=\"fa fa-home fa-4x home-icon\"></span>\n\t    \t\t\t<span class=\"home-office\">Office Mail</span> \n\t    \t\t</a>\n\t    \t</div>\n\t    \t<div class=\"top-right\">\n\t    \t    <a [routerLink]=\"['/logout']\" class=\"exit-icon\"> \n\t\t    \t\t<i class=\"fa  fa-dot-circle-o fa-4x\"></i>\n\t\t    \t</a>\n\t    \t    <a [routerLink]=\"['/user']\" class=\"user-icon\"> \n\t\t    \t\t<i class=\"fa fa-user fa-4x \"></i> \n\t\t    \t</a>\n\t    \t</div>\n\t    </section>\n\t    <router-outlet></router-outlet>\n  \t\t",
                        styleUrls: ['./mail/components/app/app.component.css'],
                        providers: [],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '/home', component: master_component_1.MasterComponent },
                        { path: '/user', component: user_component_1.UserComponent },
                        { path: '/logout', component: logout_component_1.LogoutComponent }
                    ]), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map