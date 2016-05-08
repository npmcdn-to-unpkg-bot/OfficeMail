import {Component, OnInit} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';


@Component({
	template: `
	    <section class="container">
	    	<div>
	    	    <h3>Welcome</h3>
		    	 <p>
		    	    This is a simple example with Angular 2 Ver. Beta0.17
		    	    <br>
		    	    <br>

						Thank you!
					<br>
					<br>
					<br>

		    	    Email: kevin.chen278@gmail.com
		    	    <br>
		    	    Phone: 609-358-4178
		    	    <br>
		    	    Date:  8-May-2016
		    	    <br>
		    	    <br>
		    	    <br>
		    	    <br>
		    	</p>
	    	</div>
			<button (click)="onBackHome()">Home</button>
	    </section>
  		`,
	styles: [`
		.container {
			width: 98.5%;
			height: 604px;
			background-color: lightyellow;
			border: 2px solid darkgray;
		}

		div {
			position: relative;
			left: 30%;
			width: 40%;
			height: 400px;
			top: 15%;
			border: 2px solid lightgray;
		}

		button {
			position: relative;
			left: 48%;
			top: 50px;
		}

		h3 {
			text-align: center;
		}		

	`],
})

export class LogoutComponent implements OnActivate {

	constructor(private router: Router){ }
	onBackHome() {
		this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
	}

}

