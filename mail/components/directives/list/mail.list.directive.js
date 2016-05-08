System.register(['@angular/core', '@angular/common', "../detail/mail.detail.directive"], function(exports_1, context_1) {
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
    var core_1, common_1, mail_detail_directive_1;
    var MailListDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (mail_detail_directive_1_1) {
                mail_detail_directive_1 = mail_detail_directive_1_1;
            }],
        execute: function() {
            MailListDirective = (function () {
                function MailListDirective() {
                }
                MailListDirective.prototype.onSelectedMailChange = function (item) {
                    this.selectedMail = item;
                    this.isSelected = !this.isSelected;
                    console.log(item);
                };
                ;
                MailListDirective.prototype.ngOnInit = function () {
                    this.selectedMail = this.list[0];
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MailListDirective.prototype, "list", void 0);
                MailListDirective = __decorate([
                    core_1.Component({
                        selector: 'my-mail-list',
                        // inputs: ['list'],
                        templateUrl: "./mail/components/directives/list/mail.list.template.html",
                        styleUrls: ['./mail/components/directives/list/mail.list.template.css'],
                        directives: [mail_detail_directive_1.MailDetailDirective, common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MailListDirective);
                return MailListDirective;
            }());
            exports_1("MailListDirective", MailListDirective);
        }
    }
});
//# sourceMappingURL=mail.list.directive.js.map