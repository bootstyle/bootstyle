(function() {
    'use strict';

    var dependencies = [
        // Vendor Modules
        'angularSpectrumColorpicker',

        // Bootstyle Modules
        'bsApp.editor.codeEditor',
        'bsApp.editor.customizeBootstrap',
        'bsApp.editor.fonts',
        'bsApp.editor.less',
        'bsApp.editor.preview',
        'bsApp.editor.toolbar',
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
