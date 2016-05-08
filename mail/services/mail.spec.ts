import {MailList} from './mail'; 


describe('Mail Test:  mail.ts', () => {

	let ml, ml2: MailList;
	let mailDetail = {};

	beforeEach(() => {
		ml = new MailList('inbox', 50, 30);
		ml2 = new MailList('inbox', -10, 0);
	});

	it("1: MailList object is to be defined", () => {
		expect(ml).toBeDefined();
	});


	it("2: MailList getInboxCount should be equal to 50 ", () => {
		expect(ml.getInboxCount()).toEqual(50);
	});

	it("3: MailList getSentCount should be equal to 30 ", () => {
		expect(ml.getSentCount()).toEqual(30);
	});

	it("4: ml getCurrBox shoud be 'inbox'", () => {
		expect(ml.getCurrBox()).toEqual('inbox');
	});


	it("5: ml getCurrBox should be 'sent' ", () => {
		ml.setCurrBox('sent');
		expect(ml.getCurrBox()).toEqual('sent');
		expect(ml.getMailList().length).toEqual(30);
	});

	it("6: ml2.getCurrBox is ''", () => {
		expect(ml2.getCurrBox()).toEqual('');
	});

	it("7: ml2 getSentCount should be equal to 0 ", () => {
		expect(ml2.getCurrMailId()).toEqual(-1);
	});

	it("8: ml2 getInboxCount should be equal to 0 ", () => {
		expect(ml2.getInboxCount()).toEqual(-10);
	});
	it("9: ml2 getSentCount should be equal to 0 ", () => {
		expect(ml2.getSentCount()).toEqual(0);
	});

	it("9: ml2 getSentCount should be equal to 0 ", () => {
		expect(ml2.getSentCount()).toEqual(0);
	});


});