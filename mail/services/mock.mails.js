System.register(['./mail'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mail_1;
    var Account, Accounts, CMails;
    function getRandInt(n) {
        return Math.floor(Math.random() * n);
    }
    function randomString(len) {
        var s = "";
        for (var i = 0; i < len; i++) {
            s += String.fromCharCode(97 + getRandInt(26));
        }
        return s;
    }
    function randomEmailAccount() {
        var domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'ml.com', "verizon.com"];
        return randomString(3 + getRandInt(10)) + "@" + domains[getRandInt(domains.length)];
    }
    function getDateTime() {
        var date = new Date();
        return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
    function randomMail(category, id) {
        var categories = ["inbox", "sent"], randomEmail = randomEmailAccount(), fixedEmail = Accounts[getRandInt(Accounts.length)].getEmail(), subject = randomString(10 + getRandInt(20)), mail = null;
        if (category === 0) {
            mail = new mail_1.Mail(id, subject, getDateTime(), randomEmail, fixedEmail, randomString(500), categories[category]);
        }
        else {
            mail = new mail_1.Mail(id, subject, getDateTime(), fixedEmail, randomEmail, randomString(300), categories[category]);
        }
        ;
        return mail;
    }
    return {
        setters:[
            function (mail_1_1) {
                mail_1 = mail_1_1;
            }],
        execute: function() {
            Account = (function () {
                function Account(fullname, email) {
                    this.fullname = fullname;
                    this.email = email;
                }
                Account.prototype.getEmail = function () {
                    return this.email;
                };
                return Account;
            }());
            Accounts = [
                new Account("Kevin Chen", "kevin.chen278@gmail.com"),
                new Account("Licong Chen", "licong.ch@gmail.com"),
                new Account("Adams Smith", "kevin.chen278@gmail.com"),
                new Account("Parthiban Saravanan", "Parthiban@gmail.com"),
                new Account("Prytyush Mishra", "prytyush.mishra@gmail.com")
            ];
            CMails = (function () {
                function CMails(inboxCount, sentBoxCount) {
                    this.Mails = [];
                    for (var i = 0; i < inboxCount; i++) {
                        this.Mails.push(randomMail(0, i + 1));
                    }
                    for (var i = 0; i < sentBoxCount; i++) {
                        this.Mails.push(randomMail(1, i + inboxCount + 1));
                    }
                }
                CMails.prototype.getMails = function () {
                    return this.Mails;
                };
                return CMails;
            }());
            exports_1("CMails", CMails);
        }
    }
});
//# sourceMappingURL=mock.mails.js.map