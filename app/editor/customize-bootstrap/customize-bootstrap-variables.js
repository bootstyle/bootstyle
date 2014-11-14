(function VariablesServiceClosure() {
    'use strict';

    function VariablesService() {
        var vars = {};

        // variable values are set when a control calc is run

        return vars;
    }

    angular.module('bsApp.customizeBootstrap')
        .factory('VariablesService', VariablesService);
}());
