import {CMails} from './mock.mails';

export class Mail {
	id: number;
	subject: string;
	date: string;
	from: string;
	to: string;
	content: string;
	category: string;

	constructor(id: number, subject: string, date: string, afrom: string, ato: string, content: string, category: string) {
		this.id = id;
		this.subject = subject;
		this.date = date;
		this.from = afrom;
		this.to = ato;
		this.content = content;
		this.category = category;

	}
}

export class MailList {
	private currBox: string = "";
	private currMailId: number = -1;
	private mailList: Array<any> = [];
	private mailDetail = {};
	private Mails: Array<Mail> = [];

	private inboxCount: number = 0;
	private sentBoxCount: number = 0;

	getInboxCount(){
		return this.inboxCount;
	}

	getSentCount() {
		return this.sentBoxCount;
	}

	public setCurrBox(newBox:string) {
		if (newBox !== this.currBox) {
			this.mailList = [];
			this.setMailList(newBox);
			this.setCurrMail(0);
		}
	}

	public getCurrBox(){
		return this.currBox;
	}

	public setCurrMail(mailId:number) {
		if (mailId !== this.currMailId) {
			this.setMailDetail(mailId);
		}
	}

	public getCurrMailId(){
		return this.currMailId;
	}

	public setMailList(boxName:string) {
			if (!this.Mails || (this.Mails.length === 0)) {
			this.currBox = "";
			this.currMailId = -1;
			this.mailList = [];
			this.mailDetail = {};
			return;
		}

		boxName = !boxName ? 'inbox' : boxName;
		this.Mails.forEach((mail, index) => {
			if (mail.category === boxName) {
				this.mailList.push(mail);
			}
		});
		this.currBox = boxName;
	}

	public getMailList() {
		return this.mailList;
	}


	public setMailDetail(mailId:number) {
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
	}

	public getMailDetail() {
		return this.mailDetail;
	}

	getMails(){       
		return this.Mails;
	}

	constructor(boxName:string, inboxCount:number, sentBoxCount:number){
		this.inboxCount = inboxCount;
		this.sentBoxCount = sentBoxCount;
		this.Mails = new CMails(inboxCount, sentBoxCount).getMails();
		this.setCurrBox(boxName);
	}
}