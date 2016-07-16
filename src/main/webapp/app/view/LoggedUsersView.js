System.register(['@angular/core', '@angular/common', '../service/LoginService'], function(exports_1, context_1) {
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
    var core_1, common_1, LoginService_1;
    var LoggedUsersView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (LoginService_1_1) {
                LoginService_1 = LoginService_1_1;
            }],
        execute: function() {
            LoggedUsersView = (function () {
                function LoggedUsersView(loginService, windows) {
                    this.windows = windows;
                    this.users = [];
                    this._loginService = loginService;
                    this.getLoggedUsers();
                }
                LoggedUsersView.prototype.getLoggedUsers = function () {
                    var _this = this;
                    this._loginService
                        .GetLoggedUsers()
                        .subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all users complete'); });
                };
                LoggedUsersView = __decorate([
                    core_1.Component({
                        selector: 'logged_users_view',
                        providers: [LoginService_1.LoginService],
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n    <div class=\"title\">\n       Logged Users\n    </div>\n    <div>\n      <p *ngIf=\"users.length > 0\" >\n          Found  {{users.length}} users\n      </p>\n    </div>\n\n    <div>\n      <ul class=\"itemsList\">\n      <li *ngFor=\"let user of users\" >\n        <span class=\"item\"> <b>Username:</b> {{user.username}}</span>\n        <span class=\"item\"> <b>Password:</b> {{user.password}}</span>\n      </li>\n      </ul>\n   </div>\n    ",
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .itemsList {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 100%;\n  }\n  .itemsList li {\n    cursor: pointer;\n    position: relative;\n    left: 10;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    border-radius: 4px;\n  }\n  .itemsList li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .itemsList li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .itemsList .text {\n    position: relative;\n    top: -3px;\n  }\n\n  .itemsList .item{\n    margin : .5em\n  }\n\n\n\n\n"]
                    }),
                    __param(0, core_1.Inject(LoginService_1.LoginService)), 
                    __metadata('design:paramtypes', [Object, Window])
                ], LoggedUsersView);
                return LoggedUsersView;
            }());
            exports_1("LoggedUsersView", LoggedUsersView);
        }
    }
});
//# sourceMappingURL=LoggedUsersView.js.map