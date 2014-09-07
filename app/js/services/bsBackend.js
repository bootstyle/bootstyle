'use strict';

require('./module').
    factory('bsBackend', ['$firebase', '$firebaseSimpleLogin', function($firebase, $firebaseSimpleLogin) {
        var firebaseUrl = 'https://bootstyle.firebaseio.com/';

        var refBase = new Firebase(firebaseUrl);
        var refUsers = new Firebase(firebaseUrl + 'users');

        var authClient = $firebaseSimpleLogin(refBase);
        var usersClient = $firebase(refUsers);

        var bsBackend = {
            auth: authClient
        };

        var getPrimaryGitHubUserEmail = function(user) {
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

        bsBackend.saveGitHubUser = function(user) {
            var email = getPrimaryGitHubUserEmail(user);
            var id = user.uid;

            usersClient.$set(id, {
                uid: id,
                name: user.displayName,
                email: email
            });
        };

        return bsBackend;
    }]);
