'use strict';

require('./module').
    directive('toggleToolbar', function() {
        return {
            restrict: 'E',
            templateUrl: '../../partials/_toolbar_toggle.html',
            link: function(scope, elem, attrs) {

            }
        };
    });
