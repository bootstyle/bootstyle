'use strict';

require('./module').
    directive('bsRadioControl', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                bs_title: '@bsTitle',
                bs_value: '=bsValue',
                bs_default: '@bsDefault'
            },
            replace: true,
            templateUrl: '/partials/directives/_radio_control.html',
            link: function($scope, attrs, elem) {
                console.log(attrs);
                console.log(elem);

                console.log($scope.bs_value);
                attrs.$observe('bsValue', function() {
                    $scope.bs_value = attrs['bsValue'];
                    console.log($scope.bs_value);
                });
            },
            controller: function($scope) {
                
            }
        };
    });
