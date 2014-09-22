(function () {
    'use strict';

    require('./module')
        .controller('LandingPageController',
        ['$scope', '$rootScope', '$location', 'bsBackend', 'SETTINGS',
            function($scope, $rootScope, $location, bsBackend, SETTINGS) {

                $scope.init = function() {
                    $scope.user = null;
                    $scope.initialized = true;
                };

                $scope.loginWithGitHub = function() {
                    bsBackend.loginWithGitHub(function() {
                        $location.path(SETTINGS.urls.dashboard);
                    });
                };
            }]);
}());
