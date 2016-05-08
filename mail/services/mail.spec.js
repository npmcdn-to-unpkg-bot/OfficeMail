System.register(['./mail'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mail_1;
    return {
        setters:[
            function (mail_1_1) {
                mail_1 = mail_1_1;
            }],
        execute: function() {
            describe('Mail Test:  mail.ts', function () {
                var ml, ml2;
                var mailDetail = {};
                beforeEach(function () {
                    ml = new mail_1.MailList('inbox', 50, 30);
                    ml2 = new mail_1.MailList('inbox', -10, 0);
                });
                it("1: MailList object is to be defined", function () {
                    expect(ml).toBeDefined();
                });
                it("2: MailList getInboxCount should be equal to 50 ", function () {
                    expect(ml.getInboxCount()).toEqual(50);
                });
                it("3: MailList getSentCount should be equal to 30 ", function () {
                    expect(ml.getSentCount()).toEqual(30);
                });
                it("4: ml getCurrBox shoud be 'inbox'", function () {
                    expect(ml.getCurrBox()).toEqual('inbox');
                });
                it("5: ml getCurrBox should be 'sent' ", function () {
                    ml.setCurrBox('sent');
                    expect(ml.getCurrBox()).toEqual('sent');
                    expect(ml.getMailList().length).toEqual(30);
                });
                it("6: ml2.getCurrBox is ''", function () {
                    expect(ml2.getCurrBox()).toEqual('');
                });
                it("7: ml2 getSentCount should be equal to 0 ", function () {
                    expect(ml2.getCurrMailId()).toEqual(-1);
                });
                it("8: ml2 getInboxCount should be equal to 0 ", function () {
                    expect(ml2.getInboxCount()).toEqual(-10);
                });
                it("9: ml2 getSentCount should be equal to 0 ", function () {
                    expect(ml2.getSentCount()).toEqual(0);
                });
                it("9: ml2 getSentCount should be equal to 0 ", function () {
                    expect(ml2.getSentCount()).toEqual(0);
                });
            });
        }
    }
});
//# sourceMappingURL=mail.spec.js.map