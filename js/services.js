'use strict';

/*
 Services
 */

angular.module('bootstyleApp.services', []).
    value('version', 'v0.0.1').

    factory('read_file', ['$http', function($http) {

        return function(file, callback) {
            $http.get(file).
                success(function(data) {
                    callback(data);
                });
        };
    }]).

    factory('auto_overlay_color', function() {

        var auto_color = function(color, contrast) {
            contrast = contrast || 0.85;

            var under = new Color(color);
            var over = new Color(color);

            /*
             Bootstyle brightness is value and the lack of saturation.
             100v +   0s = 100  ( colorpicker top left     )
             100v + 100s =  50  ( colorpicker top right    )
             50v +  50s =  50  ( colorpicker center       )
             0v +   0s =   0  ( colorpicker bottom left  )
             0v + 100s =   0  ( colorpicker bottom right )
             */

            var bootstyle_brightness = Math.floor(under.value() - (((under.value() / 100) * under.saturationv()) / 2));
            var value, saturation;

            if (bootstyle_brightness >= 0.58) {
                // light underlay, dark overlay
                value = Math.floor((bootstyle_brightness / 2) * (1 - contrast) + (bootstyle_brightness / 5));
                saturation = Math.floor((under.saturation()) * (1 - contrast));
            } else {
                // light underlay, dark overlay
                value = Math.floor(((bootstyle_brightness / 5) * contrast) + (100 - bootstyle_brightness / 5));
                saturation = Math.floor((under.saturation() / 2) * (1 - contrast));
            }

            // sat must be set first for proper effect
            over.saturation(saturation);
            over.value(value);

            return over.hexString();
        };

        return auto_color;
    });
