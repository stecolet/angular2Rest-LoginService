import {Component,Inject} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {User} from '../model/User';
import {LoginService} from '../service/LoginService';
@Component({
    selector: 'logged_users_view',
    providers: [LoginService],
    directives: [CORE_DIRECTIVES],
    template:`
    <div class="title">
       Logged Users
    </div>
    <div>
      <p *ngIf="users.length > 0" >
          Found  {{users.length}} users
      </p>
    </div>

    <div>
      <ul class="itemsList">
      <li *ngFor="let user of users" >
        <span class="item"> <b>Username:</b> {{user.username}}</span>
        <span class="item"> <b>Password:</b> {{user.password}}</span>
      </li>
      </ul>
   </div>
    `,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .itemsList {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
  .itemsList li {
    cursor: pointer;
    position: relative;
    left: 10;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    border-radius: 4px;
  }
  .itemsList li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .itemsList li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .itemsList .text {
    position: relative;
    top: -3px;
  }

  .itemsList .item{
    margin : .5em
  }




`]

})
export class LoggedUsersView {

 constructor(@Inject(LoginService) loginService, private windows:Window)
 {
   this._loginService=loginService;
   this.getLoggedUsers();
 }

 private _loginService:LoginService;
 public users: User[]=[];

 getLoggedUsers() {
   this._loginService
            .GetLoggedUsers()
            .subscribe((data:User[]) => this.users = data,
                error => console.log(error),
                () => console.log('Get all users complete'));

   }
}
