import {Injectable} from '@angular/core';

import {MailList} from './mail';

@Injectable()
export class MailService {
	private mailList = {};

	Contructor() {
		this.mailList = new MailList('inbox', 100, 80);
	}

	getMails(){       
		return Promise.resolve(this.mailList);
	}

	// getMailsDelay(){
	// 	return new Promise<MailList>(resolve =>
	// 		setTimeout(() => resolve(this.mailList), 2000)
	// 	);
	// }
}