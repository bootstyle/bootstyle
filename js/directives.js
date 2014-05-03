'use strict';

/*
 Directives
 */

angular.module('bootstyleApp.directives', []).
    directive('bootstyleVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('toggleToolbar', function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {

            },
            templateUrl: 'partials/_toggle_toolbar.html'
        };
    });
