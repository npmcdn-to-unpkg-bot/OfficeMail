import {Component, OnInit} from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {MasterComponent} from '../master/master.component';
import {UserComponent} from '../user/user.component';
import {LogoutComponent} from '../logout/logout.component';


@Component({
	selector: 'my-app',
	template: `
	    <section class="top">
	    	<div class="top-left">
	    	    <a [routerLink]="['/home']"> 
	    	    	<span class="fa fa-home fa-4x home-icon"></span>
	    			<span class="home-office">Office Mail</span> 
	    		</a>
	    	</div>
	    	<div class="top-right">
	    	    <a [routerLink]="['/logout']" class="exit-icon"> 
		    		<i class="fa  fa-dot-circle-o fa-4x"></i>
		    	</a>
	    	    <a [routerLink]="['/user']" class="user-icon"> 
		    		<i class="fa fa-user fa-4x "></i> 
		    	</a>
	    	</div>
	    </section>
	    <router-outlet></router-outlet>
  		`,
	styleUrls: ['./mail/components/app/app.component.css'],

	providers: [
		// MailService
	],

	directives: [ROUTER_DIRECTIVES]

})


@Routes([
		{ path: '/home', component: MasterComponent },
		{ path: '/user', component: UserComponent },
		{ path: '/logout', component: LogoutComponent }
])


export class AppComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() {
		this.router.navigate(['/user']);
	}
}


