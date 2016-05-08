import {Mail} from './mail';

class Account {
	private fullname: string;
	private email: string;

	constructor (fullname:string, email:string){
		this.fullname = fullname;
		this.email = email;
	}

	public getEmail(){
		return this.email;
	}
}

const Accounts = [
	new Account("Kevin Chen", "kevin.chen278@gmail.com"),
	new Account("Licong Chen", "licong.ch@gmail.com"),
	new Account("Adams Smith", "kevin.chen278@gmail.com"),
	new Account("Parthiban Saravanan", "Parthiban@gmail.com"),
	new Account("Prytyush Mishra", "prytyush.mishra@gmail.com")
];

function getRandInt(n: number) {
	return Math.floor(Math.random() * n);
}


function randomString(len:number) {
	let s = "";
	for (let i = 0; i < len; i++) {
		s += String.fromCharCode(97+getRandInt(26));
	}
	return s;
}

function randomEmailAccount() {
	let domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'ml.com', "verizon.com"];
	return randomString(3 + getRandInt(10)) + "@" + domains[getRandInt(domains.length)];
}

function getDateTime(){
	let date = new Date();
	return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}


function randomMail(category: number, id: number){
	let categories = ["inbox", "sent"],
		randomEmail = randomEmailAccount(),
		fixedEmail = Accounts[getRandInt(Accounts.length)].getEmail(),
		subject = randomString(10 + getRandInt(20)),
		mail = null;

	if (category === 0) {
		mail = new Mail(id, subject, getDateTime(), randomEmail, fixedEmail, randomString(500), categories[category]);
	} else {
		mail = new Mail(id, subject, getDateTime(), fixedEmail, randomEmail, randomString(300), categories[category]);
	};

	return mail;
}

export class CMails {
	private Mails: Array<Mail> =[];
	getMails(){
		return this.Mails;
	}
	constructor(inboxCount:number, sentBoxCount:number){
		for (let i = 0; i < inboxCount; i++) {
			this.Mails.push(randomMail(0, i + 1));
		}
		for (let i = 0; i < sentBoxCount; i++) {
			this.Mails.push(randomMail(1, i + inboxCount+1));
		}
	}

}


