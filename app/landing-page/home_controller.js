(function() {
    'use strict';

    angular.module('bsApp.controllers')
        .controller('HomeController', ['$scope', function($scope) {

            $scope.initialized = false;

            $scope.init = function() {
                $scope.initialized = true;
            };

        }]);
}());
