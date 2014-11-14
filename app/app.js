(function bsAppModuleClosure() {
    'use strict';

    function bsAppRoutes($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'partials/landing_page/_landing_page.html'
            })

            .when('/editor', {
                controller: 'AppController',
                templateUrl: 'partials/app/_app.html'
            })

            .otherwise({
                redirectTo: '/app'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true).hashPrefix('!');

    }

    function bsAppRun(BackendService) {
        // init debug mode
        BackendService.init(true);
    }

    angular.module('bsApp', [
        // Angular Modules
        'ngSanitize',
        'ngRoute',

        // Vendor Modules
        'kinvey',

        // Bootstyle Modules
        'bsApp.editor',
        'bsApp.landing-page'
    ])
        .config(bsAppRoutes)
        .run(bsAppRun());
}());
