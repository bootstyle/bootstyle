'use strict';

require('./module').controller('HomeController', ['$scope', function($scope) {

    $scope.initialized = false;

    $scope.init = function() {
        $scope.initialized = true;
    };

}]);
