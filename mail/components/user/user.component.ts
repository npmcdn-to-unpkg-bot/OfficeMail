import {Component, OnInit} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

// import {UserComponent} from '../user/user.component';

@Component({
	template: `
	    <section class="container">
	    	<div>
	    		<h3 class="title">Select your Accout [This page is unfinished]</h3>

				<form>
				  <input type="radio" name="gender" value="fdsafd@fdafds.com" checked> fdsafd@fdafds.com<br>
				  <input type="radio" name="gender" value="fdsafd@fdafds.com"> fdsafd@fdafds.com<br>
				  <input type="radio" name="gender" value="fdsafd@fdafds.com"> fdsafd@fdafds.com

				  <br>
				  <br>	
				  Mock Inbox Mail Number: <br>
				  <input type="text" value="500" name="firstname"><br>
				  Mock Sent Mail Number:<br>
				  <input type="text" value="278" name="lastname">
				</form>	    		

    			<button (click)="onEnter()">Enter</button>
    			<button (click)="onLogout()">Logout</button>

	    	</div>
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
			height: 250px;
			top: 20%;
			border: 2px solid lightgray;
		}

		h3 {
			text-align: center;
		}

	`]

})


export class UserComponent implements OnActivate {

	constructor(private router: Router) { }
	onEnter() {
		this.router.navigate(['/home', { inboxCount: 1000, sentCount: 300 }]);
	};
	onLogout(){
		this.router.navigate(['/logout']);
	}
}



