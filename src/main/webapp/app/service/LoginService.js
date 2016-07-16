System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/Observable', '../configuration/Configuration'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, Configuration_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Configuration_1_1) {
                Configuration_1 = Configuration_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http, _configuration) {
                    var _this = this;
                    this._http = _http;
                    this._configuration = _configuration;
                    this.GetLoggedUsers = function () {
                        //  var params = new URLSearchParams();
                        //  params.set('query', query);
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        return _this._http.get(_this.getLoggedUsersActionUrl, options)
                            .map(function (response) { return response.json(); });
                        //.catch(this.handleError);
                    };
                    this.Register = function (user) {
                        //  var params = new URLSearchParams();
                        //  params.set('query', query);
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        var postParameter = JSON.stringify(user);
                        console.log('Invoking login service with ' + postParameter);
                        return _this._http.post(_this.registerActionUrl, postParameter, options)
                            .map(function (response) { return response.json(); });
                        //.catch(this.handleError);
                    };
                    this.Login = function (user) {
                        //  var params = new URLSearchParams();
                        //  params.set('query', query);
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        var postParameter = JSON.stringify(user);
                        console.log('Invoking login service with ' + postParameter);
                        return _this._http.post(_this.loginActionUrl, postParameter, options)
                            .map(function (response) { return response.json(); });
                        //.catch(this.handleError);
                    };
                    this.loginActionUrl = _configuration.ServerWithApiUrl + '/login';
                    this.registerActionUrl = _configuration.ServerWithApiUrl + '/register';
                    this.getLoggedUsersActionUrl = _configuration.ServerWithApiUrl + '/loggedUsers';
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                }
                LoginService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Configuration_1.Configuration])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=LoginService.js.map