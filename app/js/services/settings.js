(function() {
    'use strict';

    angular.module('bootstyleApp.services')

        .factory('SETTINGS', function() {
            var SETTINGS = {
                paths: {
                    partials: '/build/partials'
                }
            };

            return SETTINGS;
        });

}());
