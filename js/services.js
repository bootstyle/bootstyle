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
    }]).

    factory('scheme', function() {
        var s = new ColorScheme;

        return {
            set_hue: function(hue) {
                s.from_hue(hue);
            },

            set_hex: function(hex) {
                hex = hex.replace('#', '');
                s.from_hex(hex);
            },

            set_scheme: function(newScheme) {
                if (newScheme == 'analogic') {
                    $('#add-complement').show();
                }
                else {
                    $('#add-complement').hide();
                }
                s.scheme(newScheme);
            },

            add_complement: function() {
                if ($('#add-complement').hasClass('active')) {
                    s.add_complement(false);
                }
                else {
                    s.add_complement(true);
                }
            },

            set_distance: function(distance) {
                s.distance(distance);
            },

            set_variation: function(variation) {
                s.variation(variation);
            },

            set_webSafe: function(websafe) {
                s.web_safe(websafe);
            },

            random_hue: function() {
                var h = Math.round(Math.random() * 360);
                s.from_hue(h);
            },
            colors: function() {
                return s.colors();
            }
        };
    });
