import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {Configuration} from './configuration/Configuration';
import {LoginService} from './service/LoginService';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import { appRouterProviders }   from './app.routes';

bootstrap(AppComponent,[HTTP_PROVIDERS, appRouterProviders,Configuration,LoginService,provide(Window, {useValue: window})]);
