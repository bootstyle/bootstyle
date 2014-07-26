'use strict';

require('./module').

    factory('SETTINGS', function() {
        var SETTINGS = {
            paths: {
                partials: '/build/partials'
            }
        };

        return SETTINGS;
    });
