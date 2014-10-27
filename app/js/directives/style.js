(function () {
    'use strict';

    angular.module('bootstyleApp.directives')
        .directive('bsStyle', [function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    styles: '=vars'
                },
                templateUrl: '../partials/app/_style.html',
                link: function(scope, elem, attrs) {
                    scope.test = 'foo';
                },
                controller: function($scope) {
                    console.log($scope.styles);

                    for (var v in $scope.vars) {
                        if ($scope.vars.hasOwnProperty(v)) {
                            console.debug(v + ': ' + vars[v] + '\n');
//                        $scope.styles += v + ': ' + vars[v] + '\n';
                        }
                    }
                }
            };
        }]);
}());
