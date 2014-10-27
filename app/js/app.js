(function() {
    'use strict';

    angular.module('bootstyleApp', [
        // Angular Modules
        'ngSanitize',
        'ngRoute',

        // Bootstyle Modules
        'bootstyleApp.controllers',
        'bootstyleApp.directives',
        'bootstyleApp.filters',
        'bootstyleApp.services',

        // Vendor Modules
        'angularSpectrumColorpicker'

    ])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    controller: 'HomeController',
                    templateUrl: 'partials/landing_page/_landing_page.html'
                }).

                when('/app', {
                    controller: 'AppController',
                    templateUrl: 'partials/app/_app.html'
                }).

                otherwise({
                    redirectTo: '/app'
                });

            // use the HTML5 History API
            $locationProvider.html5Mode(true).hashPrefix('!');

        }]);
}());
