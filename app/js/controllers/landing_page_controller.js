'use strict';

require('./module')
    .controller('LandingPageController',
    ['$scope', '$location', 'bsBackend', 'SETTINGS',
        function($scope, $location, bsBackend, SETTINGS) {

            $scope.initialized = false;

            $scope.init = function() {
                $scope.setLoginForm('github');
                $scope.user = null;

                $scope.initialized = true;
            };

            $scope.setLoginForm = function(name) {
                $scope.login_form = name;
            };

            $scope.loginWithGitHub = function() {
                bsBackend.auth.$login("github").then(
                    function(user) {
                        $scope.handleSuccessfulLogin(user);
                    }, function(error) {
                        console.log(error);
                    }
                );
            };


            $scope.handleSuccessfulLogin = function(user) {
                bsBackend.saveGitHubUser(user);
                $location.path(SETTINGS.urls.app);
            };

            $scope.handleLoginError = function(error) {
                console.log(error);
                var error_message = error.message.match("FirebaseSimpleLogin: (.*)")[1];
                var error_code = error.code.replace('_', ' ');

                alert(error_code + "\n" + error_message);
            };

        }]);
