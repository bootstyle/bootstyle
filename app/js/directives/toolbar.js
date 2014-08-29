'use strict';

require('./module').
    directive('bsToolbar', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: false,
            templateUrl: '/partials/directives/_toolbar.html',
            link: function(scope, elem, attrs) {

            },
            controller: function($scope) {

            }
        };
    });
