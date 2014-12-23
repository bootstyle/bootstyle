(function LandingPageControllerClosure() {
    'use strict';

    function LandingPageRoutes($routeProvider) {
        $routeProvider
            .when('/landing-page', {
                controller: 'LandingPageController',
                controllerAs: 'landingCtrl',
                templateUrl: 'views/landing-page/landing-page.html'
            });
    }

    function LandingPageController() {
        var vm = this;

        vm.initialized = false;

        vm.init = function() {
            vm.initialized = true;
        };

        vm.init();
    }

    angular.module('bsApp.landingPage')
        .config(LandingPageRoutes)
        .controller('LandingPageController', LandingPageController);
}());
