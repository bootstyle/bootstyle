(function() {
    'use strict';

    var dependencies = [
        // Angular Modules
        'ngSanitize',
        'ngRoute',

        // Vendor Modules
        'kinvey',

        // Bootstyle Modules
        'bsApp.editor',
        'bsApp.landing-page'
    ];

    function bsAppConfigRoutes($routeProvider, $locationProvider) {
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

    function bsAppRun(BackendFactory) {
        // init debug mode
        BackendFactory.init(true);
    }

    angular.module('bsApp', dependencies)
        .config(bsAppConfigRoutes)
        .run(bsAppRun());
}());
