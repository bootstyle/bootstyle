'use strict';

require('./module').
    directive('bootstyleVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);
