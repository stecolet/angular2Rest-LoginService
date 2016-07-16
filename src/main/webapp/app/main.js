System.register(['@angular/platform-browser-dynamic', './app.component', './configuration/Configuration', './service/LoginService', '@angular/http', '@angular/core', './app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, Configuration_1, LoginService_1, http_1, core_1, app_routes_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (Configuration_1_1) {
                Configuration_1 = Configuration_1_1;
            },
            function (LoginService_1_1) {
                LoginService_1 = LoginService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders, Configuration_1.Configuration, LoginService_1.LoginService, core_1.provide(Window, { useValue: window })]);
        }
    }
});
//# sourceMappingURL=main.js.map