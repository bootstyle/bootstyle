'use strict';

require('./module').controller('HomeController', ['$scope', '$firebase', '$firebaseSimpleLogin', function($scope, $firebase, $firebaseSimpleLogin) {

    $scope.initialized = false;
    var ref;
    var sync;
    var authClient;

    $scope.init = function() {
        ref = new Firebase("https://bootstyle.firebaseio.com/data");
        sync = $firebase(ref);
        authClient = $firebaseSimpleLogin(ref);

        $scope.initialized = true;
    };

    // log user in using the Github provider for Simple Login
    $scope.loginWithGithub = function() {
        authClient.$login("facebook").then(function(user) {
            console.log("Logged in as: " + user.uid);
        }, function(error) {
            console.error("Login failed: " + error);
        });
    };

}]);
