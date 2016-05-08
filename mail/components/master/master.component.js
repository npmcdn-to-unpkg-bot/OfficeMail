System.register(['@angular/core', '@angular/common', '../../services/mail.service', "../../services/mail", "../directives/list/mail.list.directive"], function(exports_1, context_1) {
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
    var core_1, common_1, mail_service_1, mail_1, mail_list_directive_1;
    var MasterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (mail_service_1_1) {
                mail_service_1 = mail_service_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            },
            function (mail_list_directive_1_1) {
                mail_list_directive_1 = mail_list_directive_1_1;
            }],
        execute: function() {
            MasterComponent = (function () {
                function MasterComponent() {
                    var _this = this;
                    this.mailList = {};
                    this.selectedBox = '';
                    this.mailList = new mail_1.MailList('inbox', 500, 289);
                    this.onBoxChange('inbox');
                    this.inboxClick = function () {
                        _this.onBoxChange('inbox');
                    };
                    this.sentClick = function () {
                        _this.onBoxChange('sent');
                    };
                }
                MasterComponent.prototype.onBoxChange = function (boxName) {
                    if (this.selectedBox !== boxName) {
                        this.selectedBox = boxName;
                        this.mailList.setCurrBox(boxName);
                        this.account = "Adams Smith";
                        this.inboxCount = this.mailList.getInboxCount();
                        this.sentCount = this.mailList.getSentCount();
                        this.selectedMailList = this.mailList.getMailList('inbox');
                        this.isInboxSelected = this.selectedBox === 'inbox';
                    }
                };
                MasterComponent = __decorate([
                    core_1.Component({
                        template: "\n\t    <section>\n\t    \t<div class=\"mail-box\">\n\t    \t\t<ul>\n\t    \t\t\t<li class=\"account\">\n\t    \t\t\t\t<i class=\"fa fa-user fa-small\">{{\" \"+account}}</i>\n\t    \t\t\t</li>\n\t\t    \t</ul>\n\t\t    \t<ul>\n\t    \t\t\t<li class=\"inbox\" [ngClass]='{active: isInboxSelected}'>\n\t    \t\t\t\t<a (click) = \"inboxClick()\"  class=\"fa fa-plus fa-small\">{{\" Inbox (\" + inboxCount + \")\"}}</a>\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"sent\" [ngClass]='{active: !isInboxSelected}'>\n\t    \t\t\t\t<a (click) = \"sentClick()\"  class=\"fa fa-plus fa-small\">{{\" Sent (\" + sentCount + \")\"}}</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t    \t</div>\n\t    \t<div class=\"mail-list-detail\">\n\t    \t    <my-mail-list [list] = \"selectedMailList\"> </my-mail-list>\n\t    \t</div>\n\t    </section>\n  ",
                        styleUrls: ['./mail/components/master/master.component.css'],
                        directives: [mail_list_directive_1.MailListDirective, common_1.NgClass],
                        providers: [mail_service_1.MailService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MasterComponent);
                return MasterComponent;
            }());
            exports_1("MasterComponent", MasterComponent);
        }
    }
});
//# sourceMappingURL=master.component.js.map