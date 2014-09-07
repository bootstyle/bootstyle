'use strict';

require('./module').

    factory('SETTINGS', function() {
        var SETTINGS = {
            paths: {
                partials: '/build/partials',
            },
            urls: {
                app: '/app',
            }
        };

        return SETTINGS;
    });
