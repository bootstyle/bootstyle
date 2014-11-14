(function LandingPageCtrlClosure() {
    'use strict';

    function LandingPageCtrl() {

        var vm = this;

        vm.initialized = false;

        vm.init = function() {
            vm.initialized = true;
        };

        vm.init();
    }

    angular.module('bsApp.landingPage')
        .controller('LandingPageCtrl', LandingPageCtrl);
}());
