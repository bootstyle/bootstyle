(function VariablesServiceClosure() {
    'use strict';

    function VariablesService() {
        var service = {};

        // variable values are set when a control calc is run

        return service;
    }

    angular.module('bsApp.customizeBootstrap')
        .factory('VariablesService', VariablesService);
}());
