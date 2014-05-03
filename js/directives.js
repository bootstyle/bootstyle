'use strict';

/*
 Directives
 */

angular.module('bootstyleApp.directives', []).
    directive('bootstyleVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
