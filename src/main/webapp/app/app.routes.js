System.register(['@angular/router', './view/LoginView', './view/SignUpView', './view/LoggedUsersView'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, LoginView_1, SignUpView_1, LoggedUsersView_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (LoginView_1_1) {
                LoginView_1 = LoginView_1_1;
            },
            function (SignUpView_1_1) {
                SignUpView_1 = SignUpView_1_1;
            },
            function (LoggedUsersView_1_1) {
                LoggedUsersView_1 = LoggedUsersView_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                //{ path: '',       component:  LoginView },
                { path: 'login', component: LoginView_1.LoginView },
                { path: 'signup', component: SignUpView_1.SignUpView },
                { path: 'loggedUsers', component: LoggedUsersView_1.LoggedUsersView },
                { path: '**', component: LoginView_1.LoginView },
            ]);
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map