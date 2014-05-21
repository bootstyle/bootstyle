'use strict';

/*
 Services
 */

angular.module('bootstyleApp.services', []).
    value('version', 'v0.0.1').

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

        var auto_color = function(color, contrast) {
            contrast = contrast || FONT_CONTRAST;

            var under = new Color(color),
                over = new Color(color);

            if (under.dark()) {
                over.mix(Color('#fff'), contrast);
            } else {
                over.mix(Color('#000'), contrast);
            }

            return over.hexString();
        };

        return auto_color;
    }]);
