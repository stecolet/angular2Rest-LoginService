import { provideRouter,RouterConfig } from '@angular/router';
import { LoginView } from './view/LoginView';
import { SignUpView } from './view/SignUpView';
import {LoggedUsersView} from './view/LoggedUsersView';


export const routes: RouterConfig = [
  //{ path: '',       component:  LoginView },
  { path: 'login',  component: LoginView },
  { path: 'signup', component: SignUpView },
  { path: 'loggedUsers', component: LoggedUsersView },
  { path: '**',     component: LoginView },
];

export const appRouterProviders = [
  provideRouter(routes)
];
