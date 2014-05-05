'use strict';

/*
 Filters
 */

angular.module('bootstyleApp.filters', []).
    filter('capitalize', function() {
        return function(input, $scope) {
            if (input != null)
                input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        };
    }).

    filter('trustAsHTML', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);
