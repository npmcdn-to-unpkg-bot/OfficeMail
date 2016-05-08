import { Component}  from '@angular/core';
import {NgClass} from '@angular/common';

import {MailService} from '../../services/mail.service';
import {MailList, Mail}  from "../../services/mail";
import {MailListDirective} from "../directives/list/mail.list.directive";

@Component({
	template: `
	    <section>
	    	<div class="mail-box">
	    		<ul>
	    			<li class="account">
	    				<i class="fa fa-user fa-small">{{" "+account}}</i>
	    			</li>
		    	</ul>
		    	<ul>
	    			<li class="inbox" [ngClass]='{active: isInboxSelected}'>
	    				<a (click) = "inboxClick()"  class="fa fa-plus fa-small">{{" Inbox (" + inboxCount + ")"}}</a>
	    			</li>
	    			<li class="sent" [ngClass]='{active: !isInboxSelected}'>
	    				<a (click) = "sentClick()"  class="fa fa-plus fa-small">{{" Sent (" + sentCount + ")"}}</a>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="mail-list-detail">
	    	    <my-mail-list [list] = "selectedMailList"> </my-mail-list>
	    	</div>
	    </section>
  `,
	styleUrls: ['./mail/components/master/master.component.css'],
	directives: [MailListDirective, NgClass],
	providers: [MailService]
})


export class MasterComponent{
	private mailList = {};
	private selectedBox: string ='';

	onBoxChange(boxName:string) {
		if (this.selectedBox !== boxName) {
			this.selectedBox = boxName;
			this.mailList.setCurrBox(boxName);
			this.account = "Adams Smith";
			this.inboxCount = this.mailList.getInboxCount();
			this.sentCount = this.mailList.getSentCount();
			this.selectedMailList = this.mailList.getMailList('inbox');
			this.isInboxSelected = this.selectedBox === 'inbox';
		}
	}

	constructor() { 	
		this.mailList = new MailList('inbox',500,289);
		this.onBoxChange('inbox');
		this.inboxClick = () => {
			this.onBoxChange('inbox');
		};
		this.sentClick = () => {
			this.onBoxChange('sent');
		};
	}

}

