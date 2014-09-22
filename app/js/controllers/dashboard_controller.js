(function () {
    'use strict';

    require('./module')
        .controller('DashboardController', ['$scope', 'bsBackend', function($scope, bsBackend) {
            $scope.user = bsBackend.user;
            $scope.init = function() {
                $scope.initialized = true;
            };
        }]);
}());
