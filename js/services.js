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
    }]).

    factory('color_scheme', function() {
        return function() {
            var scheme = new ColorScheme;

            /*
             Init Color Scheme
             */
            var color_scheme = {
                setHue: function(hue) {
                    scheme.from_hue(hue);

                    var bg = scheme.colors()[0];
                    $('#hue-box').css('background-color', '#' + bg);

                    $('#hex').val(bg);
                    $('#hex-box').css('background-color', '#' + bg);

                    generateColors();
                },

                setHex: function(hex) {
                    // Strip possible leading hash
                    hex = hex.replace('#', '');

                    console.log(hex);
                    scheme.from_hex(hex);

                    var bg = scheme.colors()[0];
                    $('#hue-box').css('background-color', '#' + bg);
                    $('#hex-box').css('background-color', '#' + hex);

                    generateColors();
                },

                setScheme: function(newScheme) {
                    if (newScheme == 'analogic') {
                        $('#add-complement').show();
                    }
                    else {
                        $('#add-complement').hide();
                    }
                    scheme.scheme(newScheme);
                    generateColors();
                },

                addComplement: function() {
                    if ($('#add-complement').hasClass('active')) {
                        scheme.add_complement(false);
                    }
                    else {
                        scheme.add_complement(true);
                    }
                    generateColors();
                },

                setDistance: function(distance) {
                    scheme.distance(distance);
                    generateColors();
                },

                setVariation: function(variation) {
                    scheme.variation(variation);
                    generateColors();
                },

                setWebSafe: function(websafe) {
                    scheme.web_safe(websafe);
                    generateColors();
                },

                randomHue: function() {
                    var h = Math.round(Math.random() * 360);
                    scheme.from_hue(h);
                    generateColors();
                }
            };

            function generateColors() {
                $('#colors').html('');
                var colors = scheme.colors();
                for (var i in colors) {
                    var c = colors[i];
                    var newDiv = '<div class="color" style="background-color: #' + c + '"></div>';
                    $('#colors').append(newDiv);
                }
            }

            return color_scheme;
        };
    });
