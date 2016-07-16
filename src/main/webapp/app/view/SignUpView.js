System.register(['@angular/core', '@angular/common', '@angular/router', '../model/User', '../service/LoginService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, router_1, User_1, LoginService_1;
    var SignUpView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (LoginService_1_1) {
                LoginService_1 = LoginService_1_1;
            }],
        execute: function() {
            SignUpView = (function () {
                function SignUpView(loginService, windows) {
                    this.windows = windows;
                    console.log('l1');
                    this._loginService = loginService;
                }
                SignUpView.prototype.onRegisterSubmit = function () {
                    var _this = this;
                    var _typedUser = new User_1.User();
                    _typedUser.username = this._typedUsername;
                    _typedUser.password = this._typedPassword;
                    this._loginService
                        .Register(_typedUser)
                        .subscribe(function (result) { _this._loginResponse = result, _this.setLoginMessageByResultCode(); }, function (error) { return console.log(error); }, function () { return console.log('Login complete with results: ' + _this._loginResponse); });
                };
                SignUpView.prototype.setLoginMessageByResultCode = function () {
                    if (this._loginResponse > 0) {
                        this.errorMsg = "Registration complete sucessfully";
                    }
                    else if (this._loginResponse == -3) {
                        this.errorMsg = "Registration Failed: User is already registered";
                    }
                };
                SignUpView = __decorate([
                    core_1.Component({
                        selector: 'signup-view',
                        providers: [LoginService_1.LoginService],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div class=\"container\" >\n              <div class=\"title\">\n                  User Registration form\n              </div>\n              <div class=\"panel-body\">\n                  <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                          <input [(ngModel)]=\"_typedUsername\" id=\"username\">\n                          <label>Username</label>\n                      </div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"input-field col s12\">\n                          <input [(ngModel)]=\"_typedPassword\" id=\"password\"\n                              type=\"password\" class=\"validate\">\n                          <label for=\"password\">Password</label>\n                      </div>\n                  </div>\n\n\n                  <button (click)=\"onRegisterSubmit()\"\n                      class=\"btn waves-effect waves-light\"\n                      type=\"submit\" name=\"action\">Register</button>\n\n                  <span>{{errorMsg}}</span>\n\n                  <a [routerLink]=\"['/login']\">click here to login</a>\n\n              </div>\n          </div>\n    ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .itemsList {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 100%;\n  }\n  .itemsList li {\n    cursor: pointer;\n    position: relative;\n    left: 10;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    border-radius: 4px;\n  }\n  .itemsList li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .itemsList li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .itemsList .text {\n    position: relative;\n    top: -3px;\n  }\n\n  .itemsList .item{\n    margin : .5em\n  }\n\n\n\n\n"]
                    }),
                    __param(0, core_1.Inject(LoginService_1.LoginService)), 
                    __metadata('design:paramtypes', [Object, Window])
                ], SignUpView);
                return SignUpView;
            }());
            exports_1("SignUpView", SignUpView);
        }
    }
});
//# sourceMappingURL=SignUpView.js.map