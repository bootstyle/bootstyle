(function () {
    'use strict';

    angular.module('bsApp.directives')
        .directive('bsToolbar', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: false,
                templateUrl: 'partials/app/_toolbar.html',
                link: function(scope, elem, attrs) {
                    // todo: the toggle stuff should be in here

                },
                controller: function($scope) {

                }
            };
        });
}());
