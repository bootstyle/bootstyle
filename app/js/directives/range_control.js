'use strict';

require('./module').
    directive('bsRangeControl', function() {
        return {
            restrict: 'E',
            scope: {
                bs_title: '@bsTitle',
                bs_min: '@bsMin',
                bs_max: '@bsMax',
                bs_default: '@bsDefault',
                bs_model: '=bsModel'
            },
            replace: true,
            templateUrl: '/partials/directives/_range_control.html',
            link: function($scope, elem, attrs) {
                $scope.bs_value = $scope.bs_value || $scope.bs_min || 0;
            }
        };
    });
