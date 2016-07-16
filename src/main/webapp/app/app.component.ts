import {Component} from '@angular/core';
import {RouterConfig, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Faac Assessmnt - Login Application</h1>
        <nav>
        <a [routerLink]="['/loggedUsers']">List logged users</a>
        <a [routerLink]="['/login']">Login</a>
        </nav>
        <router-outlet></router-outlet>
        `
})

export class AppComponent {}
