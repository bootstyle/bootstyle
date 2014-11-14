(function capitalizeFilterClosure() {
    'use strict';

    function capitalize() {
        return function(input) {
            if (input !== null)
                input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        };
    }

    angular.module('bsApp.capitalize')
        .filter('capitalize', capitalize);

}());
