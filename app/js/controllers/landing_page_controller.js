'use strict';

require('./module').controller('LandingPageController', ['$scope', '$firebase', '$firebaseSimpleLogin', function($scope, $firebase, $firebaseSimpleLogin) {

    $scope.initialized = false;
    var ref;
    var sync;
    var authClient;

    $scope.init = function() {
        ref = new Firebase("https://bootstyle.firebaseio.com/data");
        sync = $firebase(ref);
        authClient = $firebaseSimpleLogin(ref);

        $scope.setLoginForm('github');

        $scope.initialized = true;
    };

    $scope.setLoginForm = function(name) {
        $scope.login_form = name;
    };

    $scope.loginWithGithub = function() {
        authClient.$login("github").then(function(user) {
            $scope.handleSuccessfulLogin(user);
        }, function(error) {
            $scope.handleLoginError(error);
        });
    };

    $scope.handleSuccessfulLogin = function() {
        console.log("Logged in as: " + user.uid);
        console.log(user);

    };

    $scope.handleLoginError = function(error) {
        console.log(error);
        var error_message = error.message.match("FirebaseSimpleLogin: (.*)")[1];
        var error_code = error.code.replace('_', ' ');

        alert(error_code + "\n" + error_message);
    };

}]);
