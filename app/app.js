(function bsAppModuleClosure() {
    'use strict';

    function bsAppRoutes($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/editor'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true).hashPrefix('!');
    }

    angular.module('bsApp', [
        // Angular Modules
        'ngRoute',

        // Vendor Modules
        'kinvey',

        // Bootstyle Components
        'bsApp.backend',
        'bsApp.capitalize',
        'bsApp.readFile',
        'bsApp.trustAsHtml',
        'bsApp.version',

        // Bootstyle Views
        'bsApp.editor',
        'bsApp.landingPage'
    ])
        .config(bsAppRoutes)
        .run(function bsAppRun(BackendService) {
            // init debug mode
            BackendService.init(true);
        });
}());
