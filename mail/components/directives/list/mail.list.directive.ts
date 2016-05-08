import {Component, Input, Output, bootstrap, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';

import {Mail}  from "../../../services/mail";
import {MailDetailDirective} from "../detail/mail.detail.directive";


@Component({
  selector: 'my-mail-list',
  // inputs: ['list'],
  templateUrl: `./mail/components/directives/list/mail.list.template.html`,
  styleUrls: ['./mail/components/directives/list/mail.list.template.css'],
  directives: [MailDetailDirective, NgClass]
})

export class MailListDirective implements OnInit {
  mail: Mail;

  @Input()
  list: Array<Mail>;


  constructor() {
  }

  onSelectedMailChange(item: Mail){
    this.selectedMail = item;
    this.isSelected = !this.isSelected;
    console.log(item);
  };

  ngOnInit() {
     this.selectedMail = this.list[0];
  }


  
}