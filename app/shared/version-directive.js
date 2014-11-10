(function () {
    'use strict';

    angular.module('bsApp.directives')
        .directive('bootstyleVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }]);
}());
