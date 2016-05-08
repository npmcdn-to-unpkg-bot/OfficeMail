System.register(['./mock.mails'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_mails_1;
    var Mail, MailList;
    return {
        setters:[
            function (mock_mails_1_1) {
                mock_mails_1 = mock_mails_1_1;
            }],
        execute: function() {
            Mail = (function () {
                function Mail(id, subject, date, afrom, ato, content, category) {
                    this.id = id;
                    this.subject = subject;
                    this.date = date;
                    this.from = afrom;
                    this.to = ato;
                    this.content = content;
                    this.category = category;
                }
                return Mail;
            }());
            exports_1("Mail", Mail);
            MailList = (function () {
                function MailList(boxName, inboxCount, sentBoxCount) {
                    this.currBox = "";
                    this.currMailId = -1;
                    this.mailList = [];
                    this.mailDetail = {};
                    this.Mails = [];
                    this.inboxCount = 0;
                    this.sentBoxCount = 0;
                    this.inboxCount = inboxCount;
                    this.sentBoxCount = sentBoxCount;
                    this.Mails = new mock_mails_1.CMails(inboxCount, sentBoxCount).getMails();
                    this.setCurrBox(boxName);
                }
                MailList.prototype.getInboxCount = function () {
                    return this.inboxCount;
                };
                MailList.prototype.getSentCount = function () {
                    return this.sentBoxCount;
                };
                MailList.prototype.setCurrBox = function (newBox) {
                    if (newBox !== this.currBox) {
                        this.mailList = [];
                        this.setMailList(newBox);
                        this.setCurrMail(0);
                    }
                };
                MailList.prototype.getCurrBox = function () {
                    return this.currBox;
                };
                MailList.prototype.setCurrMail = function (mailId) {
                    if (mailId !== this.currMailId) {
                        this.setMailDetail(mailId);
                    }
                };
                MailList.prototype.getCurrMailId = function () {
                    return this.currMailId;
                };
                MailList.prototype.setMailList = function (boxName) {
                    var _this = this;
                    if (!this.Mails || (this.Mails.length === 0)) {
                        this.currBox = "";
                        this.currMailId = -1;
                        this.mailList = [];
                        this.mailDetail = {};
                        return;
                    }
                    boxName = !boxName ? 'inbox' : boxName;
                    this.Mails.forEach(function (mail, index) {
                        if (mail.category === boxName) {
                            _this.mailList.push(mail);
                        }
                    });
                    this.currBox = boxName;
                };
                MailList.prototype.getMailList = function () {
                    return this.mailList;
                };
                MailList.prototype.setMailDetail = function (mailId) {
                    if (!this.mailList || (this.mailList.length == 0)) {
                        this.currMailId = -1;
                        this.mailDetail = {};
                        return;
                    }
                    mailId = !mailId ? 0 : mailId;
                    if (!!this.Mails && (this.Mails.length > 0)) {
                        this.mailDetail = this.Mails[mailId];
                        this.currMailId = mailId;
                    }
                };
                MailList.prototype.getMailDetail = function () {
                    return this.mailDetail;
                };
                MailList.prototype.getMails = function () {
                    return this.Mails;
                };
                return MailList;
            }());
            exports_1("MailList", MailList);
        }
    }
});
//# sourceMappingURL=mail.js.map