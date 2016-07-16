import {Component,Inject} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {User} from '../model/User';
import {LoginService} from '../service/LoginService';

@Component({
    selector: 'signup-view',
    providers: [LoginService],
    directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES],
    template:`
    <div class="container" >
              <div class="title">
                  User Registration form
              </div>
              <div class="panel-body">
                  <div class="row">
                      <div class="input-field col s12">
                          <input [(ngModel)]="_typedUsername" id="username">
                          <label>Username</label>
                      </div>
                  </div>

                  <div class="row">
                      <div class="input-field col s12">
                          <input [(ngModel)]="_typedPassword" id="password"
                              type="password" class="validate">
                          <label for="password">Password</label>
                      </div>
                  </div>


                  <button (click)="onRegisterSubmit()"
                      class="btn waves-effect waves-light"
                      type="submit" name="action">Register</button>

                  <span>{{errorMsg}}</span>

                  <a [routerLink]="['/login']">click here to login</a>

              </div>
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
export class SignUpView {

 constructor(@Inject(LoginService) loginService, private windows:Window)
 {
   console.log('l1');
   this._loginService=loginService;
 }

 private errorMsg:string;
 private _loginService:LoginService;

 private _typedUser:User;
 private _typedUsername:string;
 private _typedPassword:string;
 private _loginResponse:Number

 onRegisterSubmit() {
   var _typedUser:User=new User();
   _typedUser.username=this._typedUsername;
   _typedUser.password=this._typedPassword;

   this._loginService
            .Register(_typedUser)
            .subscribe((result:Number) => {this._loginResponse=result,this.setLoginMessageByResultCode()},
                error => console.log(error),
                () => console.log('Login complete with results: '+this._loginResponse));

   }

   setLoginMessageByResultCode()
   {
     if(this._loginResponse>0)
     {
        this.errorMsg="Registration complete sucessfully";
     }
     else if(this._loginResponse==-3)
     {
       this.errorMsg="Registration Failed: User is already registered";
     }

   }
}
