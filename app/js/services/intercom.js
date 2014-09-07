'use strict';

require('./module').

    factory('intercom', function() {
        var app_id = "eqhfjzs1";

        var $intercom = {
            login: function(user_email, user_id, created_at) {
                window.Intercom('boot', {
                    app_id: app_id,
                    email: 'example@example.com',
                    user_id: 'abc123',
                    created_at: 1234567890,
                    widget: {
                        activator: '#IntercomDefaultWidget'
                    }
                });
            }
        };

        window.intercomSettings = {
            // TODO: The current logged in user's full name
            name: "John Doe",
            // TODO: The current logged in user's email address.
            email: "john.doe@example.com",
            // TODO: The current logged in user's sign-up date as a Unix timestamp.
            created_at: 1234567890,
            app_id: "eqhfjzs1"
        };

        return $intercom;
    });
