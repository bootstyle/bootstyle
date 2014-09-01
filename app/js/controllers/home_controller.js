'use strict';

require('./module').controller('HomeController', ['$scope', function($scope) {

    console.log('loaded');
    $scope.initialized = false;

    $scope.init = function() {
        $scope.initialized = true;
    };

}]);
