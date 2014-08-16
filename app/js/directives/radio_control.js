'use strict';

require('./module').
    directive('bsRadioControl', function() {
        return {
            restrict: 'E',
            scope: {
                bs_title: '@bsTitle',
                bs_items: '@bsItems',
                bs_default: '@bsDefault'
            },
            replace: true,
            templateUrl: '/partials/directives/_radio_control.html',
            link: function($scope, elem, attrs) {

            }
        };
    });
