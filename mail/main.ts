import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import {provide} from "@angular/core";
// import {APP_BASE_HREF} from '@angular/router';

import {AppComponent} from './components/app/app.component';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
	// provide(APP_BASE_HREF, { useValue: '/' })
]); 

// bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

