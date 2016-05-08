System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MailDetailDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MailDetailDirective = (function () {
                function MailDetailDirective() {
                }
                MailDetailDirective = __decorate([
                    core_1.Component({
                        selector: 'my-mail-detail',
                        inputs: ['mail'],
                        template: "\n    <table>\n      <tbody>\n        <tr>\n          <td class=\"col1\">Subject</td>\n          <td class=\"col2\">{{mail.subject}}</td>    \n          <td class=\"col3\">From</td>\n          <td class=\"col4\"> {{mail.from}}</td>\n        </tr>\n        <tr>\n          <td class=\"col1\">Date</td>\n          <td class=\"col2\"> {{mail.date}}</td>    \n          <td class=\"col3\">to</td>\n          <td class=\"col4\"> {{mail.to}}</td>\n        </tr>\n      </tbody>\n     </table>\n\n     <div>\n       <p>{{mail.content}}</p>\n     </div>\n  ",
                        styles: ["\n\n      table {\n        width: 100%;\n      }\n\n      table, td {\n        border: 1px solid black;\n        border-collapse: collapse;\n      }\n      .col1: {\n         width: 20%;\n         font-weigth: bold;\n      }\n      .col2: {\n         width: 30%;\n      }\n      .col3: {\n         width: 20%;\n         font-weigth: bold;\n      }\n      .col4: {\n         width: 30%;\n      }\n\n      p {\n        padding: 10px;\n        word-wrap: break-word;\n      }\n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MailDetailDirective);
                return MailDetailDirective;
            }());
            exports_1("MailDetailDirective", MailDetailDirective);
        }
    }
});
//# sourceMappingURL=mail.detail.directive.js.map