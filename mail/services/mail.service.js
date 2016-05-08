System.register(['@angular/core', './mail'], function(exports_1, context_1) {
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
    var core_1, mail_1;
    var MailService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            }],
        execute: function() {
            MailService = (function () {
                function MailService() {
                    this.mailList = {};
                }
                MailService.prototype.Contructor = function () {
                    this.mailList = new mail_1.MailList('inbox', 100, 80);
                };
                MailService.prototype.getMails = function () {
                    return Promise.resolve(this.mailList);
                };
                MailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MailService);
                return MailService;
            }());
            exports_1("MailService", MailService);
        }
    }
});
//# sourceMappingURL=mail.service.js.map