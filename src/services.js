'use strict';

/*
 Services
 */

angular.module('bootstyleApp.services', []).
    value('version', 'v0.1 alpha').

    constant('FONT_CONTRAST', 0.8).

    factory('read_file', ['$http', function($http) {

        return function(file, callback) {
            $http.get(file).
                success(function(data) {
                    callback(data);
                });
        };
    }]).

    factory('auto_overlay_color', ['FONT_CONTRAST', function(FONT_CONTRAST) {

        return function(color, contrast) {
            contrast = contrast || FONT_CONTRAST;

//            var under = new Color(color),
//                over = new Color(color);
            var under = tinycolor(color),
                over;

            if (under.isDark()) {
                over = tinycolor.mix(under, '#fff', contrast);
            } else {
                over = tinycolor.mix(under, '#000', contrast);
            }

            return over.toHex8String();
        };
    }]).

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
