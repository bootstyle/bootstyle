(function VariablesFactoryModule() {
    'use strict';

    function VariablesFactory() {
        var vars = {};
        
        // variable values are set when a control calc is run

        return vars;
    }

    angular.module('bsApp.services')
        .factory('VariablesFactory', VariablesFactory);
}());
