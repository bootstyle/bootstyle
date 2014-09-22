(function() {
    'use strict';

    require('./module').
        factory('bsBackend', ['$firebase', '$firebaseSimpleLogin', '$location', 'SETTINGS',
            function($firebase, $firebaseSimpleLogin, $location, SETTINGS) {
                var firebaseUrl = 'https://bootstyle.firebaseio.com/';

                var refBase = new Firebase(firebaseUrl);
                var refUsers = new Firebase(firebaseUrl + 'users');

                var authClient = $firebaseSimpleLogin(refBase);
                var usersClient = $firebase(refUsers);

                var bsBackend = {
                    auth: authClient,
                    user: null
                };

                bsBackend.getPrimaryGitHubUserEmail = function(user) {
                    // first try for profile email
                    var email = user.thirdPartyUserData.email;
                    if (email) {
                        return email;
                    }

                    // loop through emails list
                    var emails = user.thirdPartyUserData.emails;
                    for (var i in emails) {
                        if (emails[i].primary) {
                            return emails[i].email;
                        }
                    }

                    return null;
                };

                bsBackend.handleSuccessfulLogin = function(user) {
                    bsBackend.user = bsBackend.saveGitHubUser(user);
                };

                bsBackend.handleLoginError = function(error) {
                    console.log(error);
                    var error_message = error.message.match("FirebaseSimpleLogin: (.*)")[1];
                    var error_code = error.code.replace('_', ' ');

                    alert(error_code + "\n" + error_message);
                };

                bsBackend.saveGitHubUser = function(user) {
                    var email = bsBackend.getPrimaryGitHubUserEmail(user);
                    var id = user.uid;

                    var user_data = {
                        uid: id,
                        name: user.displayName,
                        email: email,
                        avatar_url: user.thirdPartyUserData.avatar_url
                    };

                    usersClient.$set(id, user_data);

                    return user_data;
                };

                bsBackend.loginWithGitHub = function(callback) {
                    bsBackend.auth.$login("github").then(
                        function(user) {
                            bsBackend.handleSuccessfulLogin(user);

                            if (typeof callback === 'function') {
                                callback();
                            }

                        }, function(error) {
                            bsBackend.handleLoginError(error);
                        }
                    );
                };

                return bsBackend;
            }]);
}());
