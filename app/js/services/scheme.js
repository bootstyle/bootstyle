'use strict';

require('./module').

    factory('scheme', function() {
        return {
            'triad': function(base) {
                return base.triad();
            },
            'analogous': function(base) {
                return base.analogous();
            },
            'monochromatic': function(base) {
                return base.monochromatic();
            },
            'splitcomplement': function(base) {
                return base.splitcomplement();
            },
            'tetrad': function(base) {
                return base.tetrad();
            }
        };
    });
