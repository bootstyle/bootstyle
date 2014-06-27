(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

//
// This is using the pahts from browserify.shims, just for testing the paths
//require("./bower_components/jquery/dist/jquery.min.js");
//
//require("./bower_components/angular/angular.min.js");
//require("./bower_components/angular-sanitize/angular-sanitize.min.js");
//require("./bower_components/angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min.js");
//require("./bower_components/bootstrap/dist/js/bootstrap.min.js");
//
//require("./bower_components/codemirror/lib/codemirror.js");
//require("./bower_components/codemirror/mode/css/css.js");
//require("./bower_components/codemirror/mode/htmlmixed/htmlmixed.js");
//require("./bower_components/codemirror/mode/javascript/javascript.js");
//require("./bower_components/codemirror/mode/xml/xml.js");
//
//require("./bower_components/FileSaver/FileSaver.js");
//
//require("./bower_components/less.js/dist/less-1.7.3.min.js");
//
//require("./bower_components/modernizr/modernizr.js");
//
//require("./bower_components/spectrum/spectrum.js");
//require("./bower_components/tinycolor/tinycolor.js");


// angular dependencies
(typeof window !== "undefined" ? window.angular : typeof global !== "undefined" ? global.angular : null);
(typeof window !== "undefined" ? window.angular_sanitize : typeof global !== "undefined" ? global.angular_sanitize : null);
(typeof window !== "undefined" ? window.angular_spectrum_colorpicker : typeof global !== "undefined" ? global.angular_spectrum_colorpicker : null);

// vendor dependencies
(typeof window !== "undefined" ? window.bootstrap : typeof global !== "undefined" ? global.bootstrap : null);
(typeof window !== "undefined" ? window.codemirror : typeof global !== "undefined" ? global.codemirror : null);
(typeof window !== "undefined" ? window.codemirror_mode_css : typeof global !== "undefined" ? global.codemirror_mode_css : null);
(typeof window !== "undefined" ? window.codemirror_mode_htmlmixed : typeof global !== "undefined" ? global.codemirror_mode_htmlmixed : null);
(typeof window !== "undefined" ? window.codemirror_mode_javascript : typeof global !== "undefined" ? global.codemirror_mode_javascript : null);
(typeof window !== "undefined" ? window.codemirror_mode_xml : typeof global !== "undefined" ? global.codemirror_mode_xml : null);
(typeof window !== "undefined" ? window.FileSaver : typeof global !== "undefined" ? global.FileSaver : null);
(typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
(typeof window !== "undefined" ? window.less : typeof global !== "undefined" ? global.less : null);
(typeof window !== "undefined" ? window.modernizr : typeof global !== "undefined" ? global.modernizr : null);
(typeof window !== "undefined" ? window.spectrum : typeof global !== "undefined" ? global.spectrum : null);
(typeof window !== "undefined" ? window.tinycolor : typeof global !== "undefined" ? global.tinycolor : null);

// bootstyle dependencies
require('./src/controllers');
require('./src/directives');
require('./src/filters');
require('./src/services');

angular.module('bootstyleApp', [
    // Bootstyle Modules
    'bootstyleApp.controllers',
    'bootstyleApp.directives',
    'bootstyleApp.filters',
    'bootstyleApp.services',

    // Angular Modules
    'ngSanitize',

    // Vendor Modules
    'angularSpectrumColorpicker'
]);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/controllers":2,"./src/directives":3,"./src/filters":4,"./src/services":5}],2:[function(require,module,exports){
'use strict';

/*
 Controllers
 */
var controllers = angular.module('bootstyleApp.controllers', ['ngSanitize']).
    controller('BootstyleCtrl',
        ['$scope', '$compile', '$timeout', 'read_file', 'auto_overlay_color', 'FONT_CONTRAST', 'scheme',
        function($scope, $compile, $timeout, read_file, auto_overlay_color, FONT_CONTRAST, scheme) {

        $scope.initialized = false;

        $scope.init_bootstyle = function() {

            $scope.fonts = {
                google: {
                    serif: {
                        droid_serif: {
                            display_name: 'Droid Serif',
                            style: '"Droid Serif", serif'
                        },
                        lora: {
                            display_name: 'Lora',
                            style: 'Lora, serif'
                        },
                        bitter: {
                            display_name: 'Bitter',
                            style: 'Bitter, serif'
                        },
                        merriweather: {
                            display_name: 'Merriweather',
                            style: 'Merriweather, serif'
                        },
                        arvo: {
                            display_name: 'Arvo',
                            style: 'Arvo, serif'
                        },
                        pt_serif: {
                            display_name: 'PT Serif',
                            style: '"PT Serif", serif'
                        },
                        roboto_slab: {
                            display_name: 'Roboto Slab',
                            style: '"Roboto Slab", serif'
                        },
                        Rokkitt: {
                            display_name: 'Rokkitt',
                            style: 'Rokkitt, serif'
                        },
                        playfair_display: {
                            display_name: 'Playfair Display',
                            style: '"Playfair Display", serif'
                        },
                        libre_baskerville: {
                            display_name: 'Libre Baskerville',
                            style: 'Libre Baskerville, serif'
                        }
                    },
                    sans_serif: {
                        open_sans: {
                            display_name: 'Open Sans',
                            style: 'Open Sans, sans-serif'
                        },
                        roboto: {
                            display_name: 'Roboto',
                            style: 'Roboto, sans-serif'
                        },
                        oswald: {
                            display_name: 'Oswald',
                            style: 'Oswald, sans-serif'
                        },
                        lato: {
                            display_name: 'Lato',
                            style: 'Lato, sans-serif'
                        },
                        roboto_condensed: {
                            display_name: 'Roboto Condensed',
                            style: '"Roboto Condensed", sans-serif'
                        },
                        droid_sans: {
                            display_name: 'Droid Sans',
                            style: '"Droid Sans", sans-serif'
                        },
                        open_sans_condensed: {
                            display_name: 'Open Sans Condensed',
                            style: '"Open Sans Condensed", sans-serif'
                        },
                        pt_sans: {
                            display_name: 'PT Sans',
                            style: '"PT Sans", sans-serif'
                        },
                        source_sans_pro: {
                            display_name: 'Source Sans Pro',
                            style: '"Source Sans Pro", sans-serif'
                        },
                        ubuntu: {
                            display_name: 'Ubuntu',
                            style: 'Ubuntu, sans-serif'
                        },
                        raleway: {
                            display_name: 'Raleway',
                            style: 'Raleway, sans-serif'
                        },
                        montserrat: {
                            display_name: 'Montserrat',
                            style: 'Montserrat, sans-serif'
                        },
                        pt_sans_narrow: {
                            display_name: 'PT Sans Narrow',
                            style: 'Arvo, sans-serif'
                        },
                        oxygen: {
                            display_name: 'Oxygen',
                            style: 'Oxygen, sans-serif'
                        }
                    },
                    display: {
                        lobster: {
                            display_name: 'Lobster',
                            style: 'Lobster, sans-serif'
                        },
                        audiowide: {
                            display_name: 'Audiowide',
                            style: 'Audiowide, sans-serif'
                        },
                        poiret_one: {
                            display_name: 'Poiret One',
                            style: '"Poiret One", sans-serif'
                        },
                        changa_one: {
                            display_name: 'Changa One',
                            style: 'Changa One, sans-serif'
                        },
                        special_elite: {
                            display_name: 'Special Elite',
                            style: '"Special Elite", sans-serif'
                        },
                        chewy: {
                            display_name: 'Chewy',
                            style: 'Chewy, sans-serif'
                        },
                        squada_one: {
                            display_name: 'Squada One',
                            style: '"Squada One", sans-serif'
                        },
                        playball: {
                            display_name: 'Playball',
                            style: 'Playball, sans-serif'
                        },
                        patua_one: {
                            display_name: 'Patua One',
                            style: '"Patua One", sans-serif'
                        },
                        griffy: {
                            display_name: 'Griffy',
                            style: 'Griffy, sans-serif'
                        }
                    },
                    handwriting: {
                        indie_flower: {
                            display_name: 'Indie Flower',
                            style: '"Indie Flower", sans-serif'
                        },
                        shadows_into_light: {
                            display_name: 'Shadows Into Light',
                            style: '"Shadows Into Light", sans-serif'
                        },
                        crafty_girls: {
                            display_name: 'Crafty Girls',
                            style: '"Crafty Girls", sans-serif'
                        },
                        pacifico: {
                            display_name: 'Pacifico',
                            style: 'Pacifico, sans-serif'
                        },
                        coming_soon: {
                            display_name: 'Coming Soon',
                            style: '"Coming Soon", sans-serif'
                        }
                    },
                    monospace: {
                        inconsolata: {
                            display_name: 'Inconsolata',
                            style: 'Inconsolata, monospace'
                        },
                        droid_sans_mono: {
                            display_name: 'Droid Sans Mono',
                            style: '"Droid Sans Mono", monospace'
                        },
                        ubuntu_mono: {
                            display_name: 'Ubuntu Mono',
                            style: '"Ubuntu Mono", monospace'
                        },
                        source_code_pro: {
                            display_name: 'Source Code Pro',
                            style: '"Source Code Pro", monospace'
                        },
                        cousine: {
                            display_name: 'Cousine',
                            style: 'Cousine, monospace'
                        },
                        anonymous_pro: {
                            display_name: 'Anonymous Pro',
                            style: '"Anonymous Pro", monospace'
                        },
                        vt323: {
                            display_name: 'VT323',
                            style: '"VT323", monospace'
                        },
                        nova_mono: {
                            display_name: 'Nova Mono',
                            style: '"Nova Mono", monospace'
                        },
                        pt_mono: {
                            display_name: 'PT Mono',
                            style: '"PT Mono", monospace'
                        },
                        cutive_mono: {
                            display_name: 'Cutive Mono',
                            style: '"Cutive Mono", monospace'
                        }
                    }
                },
                web_safe: {
                    serif: {
                        georgia: {
                            display_name: 'Georgia',
                            style: 'Georgia, "Times New Roman", Times, serif'
                        },
                        palatino_linetype: {
                            display_name: 'Palatino Linetype',
                            style: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
                        },
                        times_new_roman: {
                            display_name: 'Times New Roman',
                            style: '"Times New Roman", Times, serif'
                        }
                    },
                    sans_serif: {
                        arial: {
                            display_name: 'Arial',
                            style: 'Arial, Helvetica, sans-serif'
                        },
                        arial_black: {
                            display_name: 'Arial Black',
                            style: '"Arial Black", Gadget, sans-serif'
                        },
                        helvetica_neue: {
                            display_name: 'Helvetica Neue',
                            style: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                        },
                        impact: {
                            display_name: 'Impact',
                            style: 'Impact, Charcoal, sans-serif'
                        },
                        lucida_sans_unicode: {
                            display_name: 'Lucida Sans Unicode',
                            style: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
                        },
                        tahoma: {
                            display_name: 'Tahoma',
                            style: 'Tahoma, Geneva, sans-serif'
                        },
                        trebuchet_ms: {
                            display_name: 'Trebuchet MS',
                            style: '"Trebuchet MS", Helvetica, sans-serif'
                        },
                        verdana: {
                            display_name: 'Verdana',
                            style: 'Verdana, Geneva, sans-serif'
                        }
                    },
                    monospace: {
                        courier_new: {
                            display_name: 'Courier New',
                            style: '"Courier New", Courier, monospace'
                        },
                        lucida_console: {
                            display_name: 'Lucida Console',
                            style: '"Lucida Console", Monaco, monospace'
                        },
                        menlo: {
                            display_name: 'Menlo',
                            style: 'Menlo, Monaco, Consolas, "Courier New", monospace;'
                        }
                    }
                }
            };

            /*
             Init Google Fonts
             */
            var google_fonts = [];
            for (var gfam in $scope.fonts.google) {
                if ($scope.fonts.google.hasOwnProperty(gfam)) {
                    for (var gfont in $scope.fonts.google[gfam]) {
                        if ($scope.fonts.google[gfam].hasOwnProperty(gfont)) {
                            google_fonts.push($scope.fonts.google[gfam][gfont].display_name)
                        }
                    }
                }
            }
            WebFont.load({
                google: {
                    families: google_fonts
                }
            });


            /*
             TinyColor
             */
            $scope.color_scheme = {
                base_color: '#428bca', // @brand-primary
                schemes: {
                    analogous: {
                        key: 'analogous',
                        name: 'Analogous',
                        colors: function() {
                            return $scope.color_scheme.generate_colors('analogous');
                        }
                    },
                    monochromatic: {
                        key: 'monochromatic',
                        name: 'Monochromatic',
                        colors: function() {
                            return $scope.color_scheme.generate_colors('monochromatic');
                        }
                    },
                    split_complement: {
                        key:'splitcomplement',
                        name:'Split Complement',
                        colors: function() {
                            return $scope.color_scheme.generate_colors('splitcomplement');
                        }
                    },
                    triad: {
                        key:'triad',
                        name:'Triad',
                        colors: function() {
                            return $scope.color_scheme.generate_colors('triad');
                        }
                    },
                    tetrad: {
                        key:'tetrad',
                        name:'Tetrad',
                        colors: function() {
                            return $scope.color_scheme.generate_colors('tetrad');
                        }
                    }
                },
                set_active_scheme: function(scheme) {
                    angular.extend($scope.color_scheme.active_scheme, {
                        name: scheme.name,
                        key: scheme.key,
                        colors: scheme.colors,
                    });
                },
                generate_colors: function(scheme) {
                    var colors = tinycolor($scope.color_scheme.base_color)[scheme]();
                    var hex_colors = [];

                    for (var c in colors) {
                        hex_colors.push(colors[c].toHexString());
                    }

                    return hex_colors;
                },
            };
            angular.extend($scope.color_scheme, {
                active_scheme: {
                    key: 'triad',
                    name: 'Triad',
                    colors: $scope.color_scheme.schemes.triad.colors
                }
            });


            /*
             Spectrum
             */
            $scope.spectrum_config = {
                clickoutFiresChange: true,
                containerClassName: 'sp_bootstyle',
                replacerClassName: 'sp_bootstyle',
                palette: function() {
                    $scope.color_scheme.colors = [];

                    var colors = tinycolor[$scope.color_scheme.scheme]($scope.color_scheme.base_color);
                    var palette = [];
                    for (var c in colors) {
                        palette.push(colors[c].toHexString());
                    }
                    console.log(palette);
                    return palette;
                },
                preferredFormat: "hex",
                showButtons: false,
                showInitial: true,
                showInput: true,
                showPalette: true,
                showSelectionPalette: true
            };


            /*
             Init Controls
             */
            $scope.ctrls = {
                body_web_safe_font_family: {
                    control: $scope.fonts.web_safe.sans_serif.helvetica_neue.display_name,
                    style: $scope.fonts.web_safe.sans_serif.helvetica_neue.style,
                    preview: null,
                    calc: function() {
                        if (!$scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@font-family-base'] = $scope.ctrls.body_web_safe_font_family.preview || $scope.ctrls.body_web_safe_font_family.style
                        }
                    }
                },
                body_google_font_family: {
                    control: $scope.fonts.google.sans_serif.droid_sans.display_name,
                    style: $scope.fonts.google.sans_serif.droid_sans.style,
                    preview: null,
                    calc: function() {
                        if ($scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@font-family-base'] = $scope.ctrls.body_google_font_family.preview || $scope.ctrls.body_google_font_family.style
                        }
                    }
                },
                body_bg: {
                    control: '#ffffff',
                    calc: function() {
                        $scope.vars['@body-bg'] = $scope.ctrls.body_bg.control;
                    }
                },
                bootstrap_theme: {
                    control: false
                },
                border_radius: {
                    control: 4,
                    calc: function() {
                        var value = $scope.ctrls.border_radius.control;
                        $scope.vars['@border-radius-large'] = Math.floor(value * 1.5) + 'px';
                        $scope.vars['@border-radius-base'] = Math.floor(value * 1) + 'px';
                        $scope.vars['@border-radius-small'] = Math.floor(value * 0.5) + 'px';
                    }
                },
                brand_primary: {
                    control: '#428bca',
                    calc: function() {
                        $scope.vars['@brand-primary'] = $scope.ctrls.brand_primary.control;
                    }
                },
                brand_success: {
                    control: '#5cb85c',
                    calc: function() {
                        $scope.vars['@brand-success'] = $scope.ctrls.brand_success.control;
                    }
                },
                brand_info: {
                    control: '#5bc0de',
                    calc: function() {
                        $scope.vars['@brand-info'] = $scope.ctrls.brand_info.control;
                    }
                },
                brand_warning: {
                    control: '#f0ad4e',
                    calc: function() {
                        $scope.vars['@brand-warning'] = $scope.ctrls.brand_warning.control;
                    }
                },
                brand_danger: {
                    control: '#d9534f',
                    calc: function() {
                        $scope.vars['@brand-danger'] = $scope.ctrls.brand_danger.control;
                    }
                },
                button_font_weight: {
                    control: 'normal',
                    calc: function() {
                        $scope.vars['@btn-font-weight'] = $scope.ctrls.button_font_weight.control;
                    }
                },
                button_style: {
                    control: 'default'
                },
                buttons_uppercase: {
                    control: false
                },
                code_web_safe_font_family: {
                    control: $scope.fonts.web_safe.monospace.menlo.display_name,
                    style: $scope.fonts.web_safe.monospace.menlo.style,
                    preview: null,
                    calc: function() {
                        if (!$scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@font-family-monospace'] = $scope.ctrls.code_web_safe_font_family.preview || $scope.ctrls.code_web_safe_font_family.style;
                        }
                    }
                },
                code_google_font_family: {
                    control: $scope.fonts.google.monospace.droid_sans_mono.display_name,
                    style: $scope.fonts.google.monospace.droid_sans_mono.style,
                    preview: null,
                    calc: function() {
                        if ($scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@font-family-monospace'] = $scope.ctrls.code_google_font_family.preview || $scope.ctrls.code_google_font_family.style;
                        }
                    }
                },
                container_class: {
                    control: 'container'
                },
                font_size: {
                    control: 14,
                    calc: function() {
                        $scope.vars['@font-size-base'] = $scope.ctrls.font_size.control + 'px';
                    }
                },
                font_contrast: {
                    control: FONT_CONTRAST
                },
                headings_font_size: {
                    control: 14,
                    calc: function() {
                        $scope.vars['@font-size-h1'] = Math.floor($scope.ctrls.headings_font_size.control * 2.6) + 'px';
                        $scope.vars['@font-size-h2'] = Math.floor($scope.ctrls.headings_font_size.control * 2.15) + 'px';
                        $scope.vars['@font-size-h3'] = Math.floor($scope.ctrls.headings_font_size.control * 1.7) + 'px';
                        $scope.vars['@font-size-h4'] = Math.floor($scope.ctrls.headings_font_size.control * 1.25) + 'px';
                        $scope.vars['@font-size-h5'] = Math.floor($scope.ctrls.headings_font_size.control) + 'px';
                        $scope.vars['@font-size-h6'] = Math.floor($scope.ctrls.headings_font_size.control * FONT_CONTRAST) + 'px';
                    }
                },
                headings_font_weight: {
                    control: 500,
                    calc: function() {
                        $scope.vars['@headings-font-weight'] = $scope.ctrls.headings_font_weight.control;
                    }
                },
                headings_is_auto_color: {
                    control: true
                },
                headings_font_color: {
                    control: 'inherit',
                    calc: function() {
                        var color;

                        if ($scope.ctrls.headings_is_auto_color.control) {
                            color = auto_overlay_color($scope.ctrls.body_bg.control, $scope.ctrls.headings_font_contrast.control);
                        } else {
                            color = $scope.ctrls.headings_font_color.control;
                        }

                        $scope.vars['@headings-color'] = color;
                    }
                },
                headings_font_contrast: {
                    control: FONT_CONTRAST
                },
                headings_line_height: {
                    control: 1.1,
                    calc: function() {
                        $scope.vars['@headings-line-height'] = $scope.ctrls.headings_line_height.control;
                    }
                },
                headings_web_safe_font_family: {
                    control: $scope.fonts.web_safe.sans_serif.helvetica_neue.display_name,
                    style: $scope.fonts.web_safe.sans_serif.helvetica_neue.style,
                    preview: null,
                    calc: function() {
                        if (!$scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@headings-font-family'] = $scope.ctrls.headings_web_safe_font_family.preview || $scope.ctrls.headings_web_safe_font_family.style;
                        }
                    }
                },
                headings_google_font_family: {
                    control: $scope.fonts.google.sans_serif.droid_sans.display_name,
                    style: $scope.fonts.google.sans_serif.droid_sans.style,
                    preview: null,
                    calc: function() {
                        if ($scope.ctrls.use_google_fonts.control) {
                            $scope.vars['@headings-font-family'] = $scope.ctrls.headings_google_font_family.preview || $scope.ctrls.headings_google_font_family.style;
                        }
                    }
                },
                jumbotron_bg: {
                    control: '#eee',
                    calc: function() {
                        $scope.vars['@jumbotron-bg'] = $scope.ctrls.jumbotron_bg.control;
                    }
                },
                jumbotron_color: {
                    control: 'inherit',
                    calc: function() {
                        var color;

                        if ($scope.ctrls.jumbotron_is_auto_color.control) {
                            color = auto_overlay_color($scope.vars['@jumbotron-bg'], $scope.ctrls.jumbotron_contrast.control);
                        } else {
                            color = $scope.ctrls.jumbotron_color.control;
                        }

                        $scope.vars['@jumbotron-color'] = color;
                    }
                },
                jumbotron_contrast: {
                    control: FONT_CONTRAST
                },
                jumbotron_font_size: {
                    control: 21,
                    calc: function() {
                        $scope.vars['@jumbotron-font-size'] = $scope.ctrls.jumbotron_font_size.control + 'px';
                    }
                },
                jumbotron_heading_color: {
                    control: 'inherit',
                    calc: function() {
                        var color;

                        if ($scope.ctrls.jumbotron_is_auto_color.control) {
                            color = auto_overlay_color($scope.vars['@jumbotron-bg'], $scope.ctrls.jumbotron_contrast.control);
                        } else {
                            color = $scope.ctrls.jumbotron_heading_color.control;
                        }

                        $scope.vars['@jumbotron-heading-color'] = color;
                    }
                },
                jumbotron_is_auto_color: {
                    control: true
                },
                jumbotron_padding: {
                    control: 30,
                    calc: function() {
                        $scope.vars['@jumbotron-padding'] = $scope.ctrls.jumbotron_padding.control + 'px';
                    }
                },
                line_height: {
                    control: 1.43,
                    calc: function() {
                        $scope.vars['@line-height-base'] = $scope.ctrls.line_height.control;
                    }
                },
                navbar_height: {
                    control: 50,
                    calc: function() {
                        $scope.vars['@navbar-height'] = $scope.ctrls.navbar_height.control + 'px';
                    }
                },
                navbar_margin_bottom: {
                    control: 20,
                    calc: function() {
                        $scope.vars['@navbar-margin-bottom'] = $scope.ctrls.navbar_margin_bottom.control + 'px';
                    }
                },
                navbar_bg: {
                    control: '#222',
                    calc: function() {
                        $scope.vars['@navbar-inverse-bg'] = $scope.ctrls.navbar_bg.control;
                    }
                },
                navbar_font_color: {
                    control: '@gray-light',
                    calc: function() {
                        var color;

                        if ($scope.ctrls.navbar_is_auto_color.control) {
                            color = auto_overlay_color($scope.ctrls.navbar_bg.control, $scope.ctrls.font_contrast.control);
                        } else {
                            color = $scope.ctrls.navbar_font_color.control;
                        }

                        $scope.vars['@navbar-inverse-color'] = color;
                        $scope.vars['@navbar-inverse-link-color'] = color;
                    }
                },
                navbar_is_auto_color: {
                    control: true
                },
                padding: {
                    control: 10,
                    calc: function() {
                        var value = $scope.ctrls.padding.control;
                        $scope.vars['@padding-base-vertical'] = Math.floor(value * 0.6) + 'px';
                        $scope.vars['@padding-base-horizontal'] = Math.floor(value * 1.2) + 'px';
                        $scope.vars['@padding-large-vertical'] = Math.floor(value * 1) + 'px';
                        $scope.vars['@padding-large-horizontal'] = Math.floor(value * 1.6) + 'px';
                        $scope.vars['@padding-small-vertical'] = Math.floor(value * 0.5) + 'px';
                        $scope.vars['@padding-small-horizontal'] = Math.floor(value * 1) + 'px';
                        $scope.vars['@padding-xs-vertical'] = Math.floor(value * 0.1) + 'px';
                        $scope.vars['@padding-xs-horizontal'] = Math.floor(value * 0.5) + 'px';
                    }
                },
                use_google_fonts: {
                    control: false
                },
            };
            angular.extend($scope.ctrls, {
                run_calcs: function() {
                    for (var i in $scope.ctrls) {
                        if ($scope.ctrls.hasOwnProperty(i)) {
                            if ($scope.ctrls[i].hasOwnProperty('calc')) {
                                $scope.ctrls[i].calc();
                            }
                        }
                    }
                },
                set_defaults: function() {
                    for (var i in $scope.ctrls) {
                        if ($scope.ctrls.hasOwnProperty(i)) {
                            $scope.ctrls[i]['default'] = $scope.ctrls[i].control;
                        }
                    }
                }
            });
            // allows us to reset any individual control
            $scope.ctrls.set_defaults();


            /*
             Init all the LESS variables
             */
            $scope.vars = {};
            $scope.ctrls.run_calcs();


            /*
             Init settings which don't require a LESS recompile here
             */
            $scope.settings = {
                show_toolbar: true,
                RECOMPILE_LESS_DELAY: 100
            };


            /*
             Init stylesheets
             */
            $scope.stylesheets = {
                base: [
                    { name: 'Bootstrap Theme', path: 'less/bootstrap/theme.less' }
                ],
                button_styles: [
                    { name: 'Stripe', path: 'less/buttons_stripe.less' }
                ]
            };


            read_file('partials/_preview_bootstyle.html', function(file_contents) {
                $scope.preview.set_html(file_contents);
                $scope.initialized = true;
            });
        };

        ////////////////////////////  END INIT  ////////////////////////////

        /*
         Code Editor
         */
        $scope.init_code_editor = function() {
            $scope.code_editor = CodeMirror(document.getElementById('code_editor'), {
                theme: "ambiance",
                mode: 'htmlmixed',
                lineNumbers: true,
                value: $scope.preview.html
            });

            $scope.code_editor.on('change', function() {
                $scope.preview.set_html($scope.code_editor.getValue());
            });
        };


        /*
         Toolbar
         */
        $scope.toolbar = {
            is_active: true,
            toggle: function() {
                $scope.toolbar.is_active = !$scope.toolbar.is_active;
            }
        };
        
        $scope.swap_body_heading_typography = function() {
            var body_control,
                body_style,
                headings_control,
                headings_style;

            if ($scope.ctrls.use_google_fonts.control) {
                body_control = $scope.ctrls.body_google_font_family.control;
                body_style = $scope.ctrls.body_google_font_family.style;
                headings_control = $scope.ctrls.headings_google_font_family.control;
                headings_style = $scope.ctrls.headings_google_font_family.style;

                $scope.ctrls.body_google_font_family.control = headings_control;
                $scope.ctrls.body_google_font_family.style = headings_style;
                $scope.ctrls.headings_google_font_family.control = body_control;
                $scope.ctrls.headings_google_font_family.style = body_style;
            } else {
                body_control = $scope.ctrls.body_web_safe_font_family.control;
                body_style = $scope.ctrls.body_web_safe_font_family.style;
                headings_control = $scope.ctrls.headings_web_safe_font_family.control;
                headings_style = $scope.ctrls.headings_web_safe_font_family.style;
                
                $scope.ctrls.body_web_safe_font_family.control = headings_control;
                $scope.ctrls.body_web_safe_font_family.style = headings_style;
                $scope.ctrls.headings_web_safe_font_family.control = body_control;
                $scope.ctrls.headings_web_safe_font_family.style = body_style;
            }
        };


        /*
         Tabs
         */
        $scope.tabs = {
            set_current: function(tab) {
                $scope.tabs.current = tab;
                $scope.tabs.set_active_class();
            },
            set_active_class: function() {
                for (var i in $scope.tabs.list) {
                    for (var key in $scope.tabs.list[i]) {
                        if ($scope.tabs.list[i].hasOwnProperty(key) && $scope.tabs.list[i].key === $scope.tabs.current) {
                            $scope.tabs.list[i].class = 'active';
                        } else {
                            $scope.tabs.list[i].class = '';
                        }
                    }
                }
            },
            list: [
                {
                    label: 'Preview',
                    icon_class: 'glyphicon glyphicon-eye-open',
                    key: 'preview',
                    class: 'active'
                },
                {
                    label: 'Edit HTML',
                    icon_class: 'glyphicon glyphicon-pencil',
                    key: 'edit_html',
                    class: ''
                }
            ]
        };
        angular.extend($scope.tabs, {
            current: $scope.tabs.list[0].key
        });


        /*
         Preview
         */
        $scope.preview = {
            html: null,
            set_html: function(html) {
                $scope.preview.html = html;
            }
        };


        /*
         Nav Methods
         */
        $scope.reset = function() {
            for (var c in $scope.ctrls) {
                if ($scope.ctrls.hasOwnProperty(c)) {
                    if ($scope.ctrls[c].hasOwnProperty('control') && $scope.ctrls[c].hasOwnProperty('default')) {
                        $scope.ctrls[c].control = $scope.ctrls[c].default;
                    }
                }
            }
        };

        $scope.download = function() {
            read_file('partials/_download_bootstyle.html', function(contents) {
                var compiled_template = $compile(contents)($scope)[0];

                $timeout(function() {
                    var blob = new Blob([compiled_template.textContent], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "bootstyle.less");
                })
            });
        };


        /*
         LESS Compiling
         */

        // Watch for changes
        $scope.$watch('[ctrls]', function(newValue, oldValue) {

            $scope.ctrls.run_calcs();

            $scope.last_LESS_edit = Date.now();
            $scope.timerRecompileLESS();
        }, true);


        // Call recompileLESS after a certain amount of inactivity
        $scope.timerRecompileLESS = function() {
            window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
                if (Date.now() - $scope.last_LESS_edit >= $scope.settings.RECOMPILE_LESS_DELAY) {
                    window.clearInterval(window.timerRecompileLESS);
                    window.timerRecompileLESS = null;
                    $scope.recompileLESS();
                }

            }, 20);
        };

        // Gather stylesheets and recompile LESS
        $scope.recompileLESS = function() {
            /*
             START COPY from LESS browser.js v1.7.0 ln 633 === less.js 1.7.0 ln 8171
             This section of less.js could be wrapped as a method, less.loadLinks().
             TODO: Lots of ppl want the ability to dynamically add less files, make a PR?
             */
            var typePattern = /^text\/(x-)?less$/;

            var links = document.getElementsByTagName('link');

            less.sheets = [];

            for (var i = 0; i < links.length; i++) {
                if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
                    (links[i].type.match(typePattern)))) {
                    less.sheets.push(links[i]);
                }
            }
            // END COPY

            less.refresh(true, $scope.vars);
        };

    }]);

module.exports.controllers = controllers;

},{}],3:[function(require,module,exports){
'use strict';

/*
 Directives
 */

angular.module('bootstyleApp.directives', []).
    directive('bootstyleVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('toggleToolbar', function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {

            },
            templateUrl: 'partials/_toolbar_toggle.html'
        };
    });

},{}],4:[function(require,module,exports){
'use strict';

/*
 Filters
 */

angular.module('bootstyleApp.filters', []).
    filter('capitalize', function() {
        return function(input, $scope) {
            if (input != null)
                input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        };
    }).

    filter('trustAsHTML', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);

},{}],5:[function(require,module,exports){
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
                return tinycolor.triad(base);
            },
            'analogous': function(base) {
                return tinycolor.analogous(base);
            },
            'monochromatic': function(base) {
                return tinycolor.monochromatic(base);
            },
            'splitcomplement': function(base) {
                return tinycolor.splitcomplement(base);
            },
            'tetrad': function(base) {
                return tinycolor.tetrad(base);
            }
        };
    });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbGV2aXRob21hc29uL3NyYy9ib290c3R5bGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9sZXZpdGhvbWFzb24vc3JjL2Jvb3RzdHlsZS9hcHAuanMiLCIvVXNlcnMvbGV2aXRob21hc29uL3NyYy9ib290c3R5bGUvc3JjL2NvbnRyb2xsZXJzLmpzIiwiL1VzZXJzL2xldml0aG9tYXNvbi9zcmMvYm9vdHN0eWxlL3NyYy9kaXJlY3RpdmVzLmpzIiwiL1VzZXJzL2xldml0aG9tYXNvbi9zcmMvYm9vdHN0eWxlL3NyYy9maWx0ZXJzLmpzIiwiL1VzZXJzL2xldml0aG9tYXNvbi9zcmMvYm9vdHN0eWxlL3NyYy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vL1xuLy8gVGhpcyBpcyB1c2luZyB0aGUgcGFodHMgZnJvbSBicm93c2VyaWZ5LnNoaW1zLCBqdXN0IGZvciB0ZXN0aW5nIHRoZSBwYXRoc1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIik7XG4vL1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXIvYW5ndWxhci5taW4uanNcIik7XG4vL3JlcXVpcmUoXCIuL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci1zYW5pdGl6ZS9hbmd1bGFyLXNhbml0aXplLm1pbi5qc1wiKTtcbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9hbmd1bGFyLXNwZWN0cnVtLWNvbG9ycGlja2VyL2Rpc3QvYW5ndWxhci1zcGVjdHJ1bS1jb2xvcnBpY2tlci5taW4uanNcIik7XG4vL3JlcXVpcmUoXCIuL2Jvd2VyX2NvbXBvbmVudHMvYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qc1wiKTtcbi8vXG4vL3JlcXVpcmUoXCIuL2Jvd2VyX2NvbXBvbmVudHMvY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5qc1wiKTtcbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9jb2RlbWlycm9yL21vZGUvY3NzL2Nzcy5qc1wiKTtcbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9jb2RlbWlycm9yL21vZGUvaHRtbG1peGVkL2h0bWxtaXhlZC5qc1wiKTtcbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9jb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0LmpzXCIpO1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL2NvZGVtaXJyb3IvbW9kZS94bWwveG1sLmpzXCIpO1xuLy9cbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9GaWxlU2F2ZXIvRmlsZVNhdmVyLmpzXCIpO1xuLy9cbi8vcmVxdWlyZShcIi4vYm93ZXJfY29tcG9uZW50cy9sZXNzLmpzL2Rpc3QvbGVzcy0xLjcuMy5taW4uanNcIik7XG4vL1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL21vZGVybml6ci9tb2Rlcm5penIuanNcIik7XG4vL1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL3NwZWN0cnVtL3NwZWN0cnVtLmpzXCIpO1xuLy9yZXF1aXJlKFwiLi9ib3dlcl9jb21wb25lbnRzL3Rpbnljb2xvci90aW55Y29sb3IuanNcIik7XG5cblxuLy8gYW5ndWxhciBkZXBlbmRlbmNpZXNcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmFuZ3VsYXIgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmFuZ3VsYXIgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmFuZ3VsYXJfc2FuaXRpemUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmFuZ3VsYXJfc2FuaXRpemUgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmFuZ3VsYXJfc3BlY3RydW1fY29sb3JwaWNrZXIgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmFuZ3VsYXJfc3BlY3RydW1fY29sb3JwaWNrZXIgOiBudWxsKTtcblxuLy8gdmVuZG9yIGRlcGVuZGVuY2llc1xuKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuYm9vdHN0cmFwIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5ib290c3RyYXAgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNvZGVtaXJyb3IgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmNvZGVtaXJyb3IgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNvZGVtaXJyb3JfbW9kZV9jc3MgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmNvZGVtaXJyb3JfbW9kZV9jc3MgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNvZGVtaXJyb3JfbW9kZV9odG1sbWl4ZWQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmNvZGVtaXJyb3JfbW9kZV9odG1sbWl4ZWQgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNvZGVtaXJyb3JfbW9kZV9qYXZhc2NyaXB0IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5jb2RlbWlycm9yX21vZGVfamF2YXNjcmlwdCA6IG51bGwpO1xuKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuY29kZW1pcnJvcl9tb2RlX3htbCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuY29kZW1pcnJvcl9tb2RlX3htbCA6IG51bGwpO1xuKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuRmlsZVNhdmVyIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5GaWxlU2F2ZXIgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LiQgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLiQgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Lmxlc3MgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLmxlc3MgOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Lm1vZGVybml6ciA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwubW9kZXJuaXpyIDogbnVsbCk7XG4odHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5zcGVjdHJ1bSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuc3BlY3RydW0gOiBudWxsKTtcbih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnRpbnljb2xvciA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwudGlueWNvbG9yIDogbnVsbCk7XG5cbi8vIGJvb3RzdHlsZSBkZXBlbmRlbmNpZXNcbnJlcXVpcmUoJy4vc3JjL2NvbnRyb2xsZXJzJyk7XG5yZXF1aXJlKCcuL3NyYy9kaXJlY3RpdmVzJyk7XG5yZXF1aXJlKCcuL3NyYy9maWx0ZXJzJyk7XG5yZXF1aXJlKCcuL3NyYy9zZXJ2aWNlcycpO1xuXG5hbmd1bGFyLm1vZHVsZSgnYm9vdHN0eWxlQXBwJywgW1xuICAgIC8vIEJvb3RzdHlsZSBNb2R1bGVzXG4gICAgJ2Jvb3RzdHlsZUFwcC5jb250cm9sbGVycycsXG4gICAgJ2Jvb3RzdHlsZUFwcC5kaXJlY3RpdmVzJyxcbiAgICAnYm9vdHN0eWxlQXBwLmZpbHRlcnMnLFxuICAgICdib290c3R5bGVBcHAuc2VydmljZXMnLFxuXG4gICAgLy8gQW5ndWxhciBNb2R1bGVzXG4gICAgJ25nU2FuaXRpemUnLFxuXG4gICAgLy8gVmVuZG9yIE1vZHVsZXNcbiAgICAnYW5ndWxhclNwZWN0cnVtQ29sb3JwaWNrZXInXG5dKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gQ29udHJvbGxlcnNcbiAqL1xudmFyIGNvbnRyb2xsZXJzID0gYW5ndWxhci5tb2R1bGUoJ2Jvb3RzdHlsZUFwcC5jb250cm9sbGVycycsIFsnbmdTYW5pdGl6ZSddKS5cbiAgICBjb250cm9sbGVyKCdCb290c3R5bGVDdHJsJyxcbiAgICAgICAgWyckc2NvcGUnLCAnJGNvbXBpbGUnLCAnJHRpbWVvdXQnLCAncmVhZF9maWxlJywgJ2F1dG9fb3ZlcmxheV9jb2xvcicsICdGT05UX0NPTlRSQVNUJywgJ3NjaGVtZScsXG4gICAgICAgIGZ1bmN0aW9uKCRzY29wZSwgJGNvbXBpbGUsICR0aW1lb3V0LCByZWFkX2ZpbGUsIGF1dG9fb3ZlcmxheV9jb2xvciwgRk9OVF9DT05UUkFTVCwgc2NoZW1lKSB7XG5cbiAgICAgICAgJHNjb3BlLmluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICAgICAgJHNjb3BlLmluaXRfYm9vdHN0eWxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICRzY29wZS5mb250cyA9IHtcbiAgICAgICAgICAgICAgICBnb29nbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb2lkX3NlcmlmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnRHJvaWQgU2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJEcm9pZCBTZXJpZlwiLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnTG9yYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdMb3JhLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXR0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdCaXR0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnQml0dGVyLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJyaXdlYXRoZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdNZXJyaXdlYXRoZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnTWVycml3ZWF0aGVyLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnQXJ2bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdBcnZvLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdF9zZXJpZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BUIFNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiUFQgU2VyaWZcIiwgc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9ib3RvX3NsYWI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdSb2JvdG8gU2xhYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIlJvYm90byBTbGFiXCIsIHNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJva2tpdHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdSb2traXR0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1Jva2tpdHQsIHNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlmYWlyX2Rpc3BsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdQbGF5ZmFpciBEaXNwbGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyZV9iYXNrZXJ2aWxsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0xpYnJlIEJhc2tlcnZpbGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ0xpYnJlIEJhc2tlcnZpbGxlLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2Fuc19zZXJpZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbl9zYW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnT3BlbiBTYW5zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ09wZW4gU2Fucywgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByb2JvdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdSb2JvdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnUm9ib3RvLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9zd2FsZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ09zd2FsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdPc3dhbGQsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0xhdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnTGF0bywgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByb2JvdG9fY29uZGVuc2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnUm9ib3RvIENvbmRlbnNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9pZF9zYW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIkRyb2lkIFNhbnNcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuX3NhbnNfY29uZGVuc2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdF9zYW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnUFQgU2FucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2Vfc2Fuc19wcm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdTb3VyY2UgU2FucyBQcm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1YnVudHU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdVYnVudHUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnVWJ1bnR1LCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbGV3YXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdSYWxld2F5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udHNlcnJhdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ01vbnRzZXJyYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnTW9udHNlcnJhdCwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdF9zYW5zX25hcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BUIFNhbnMgTmFycm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ0Fydm8sIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3h5Z2VuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnT3h5Z2VuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ094eWdlbiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9ic3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0xvYnN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnTG9ic3Rlciwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb3dpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdBdWRpb3dpZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnQXVkaW93aWRlLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaXJldF9vbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdQb2lyZXQgT25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiUG9pcmV0IE9uZVwiLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nYV9vbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdDaGFuZ2EgT25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ0NoYW5nYSBPbmUsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbF9lbGl0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1NwZWNpYWwgRWxpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJTcGVjaWFsIEVsaXRlXCIsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hld3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdDaGV3eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdDaGV3eSwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhZGFfb25lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnU3F1YWRhIE9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIlNxdWFkYSBPbmVcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5YmFsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BsYXliYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1BsYXliYWxsLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHVhX29uZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BhdHVhIE9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIlBhdHVhIE9uZVwiLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWZmeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0dyaWZmeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdHcmlmZnksIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhhbmR3cml0aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpZV9mbG93ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdJbmRpZSBGbG93ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJJbmRpZSBGbG93ZXJcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dzX2ludG9fbGlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdTaGFkb3dzIEludG8gTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJTaGFkb3dzIEludG8gTGlnaHRcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmFmdHlfZ2lybHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdDcmFmdHkgR2lybHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJDcmFmdHkgR2lybHNcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNpZmljbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BhY2lmaWNvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1BhY2lmaWNvLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWluZ19zb29uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnQ29taW5nIFNvb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJDb21pbmcgU29vblwiLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY29uc29sYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnSW5jb25zb2xhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnSW5jb25zb2xhdGEsIG1vbm9zcGFjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9pZF9zYW5zX21vbm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdEcm9pZCBTYW5zIE1vbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJEcm9pZCBTYW5zIE1vbm9cIiwgbW9ub3NwYWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVidW50dV9tb25vOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnVWJ1bnR1IE1vbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJVYnVudHUgTW9ub1wiLCBtb25vc3BhY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlX2NvZGVfcHJvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnU291cmNlIENvZGUgUHJvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VzaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnQ291c2luZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdDb3VzaW5lLCBtb25vc3BhY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzX3Bybzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0Fub255bW91cyBQcm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJBbm9ueW1vdXMgUHJvXCIsIG1vbm9zcGFjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2dDMyMzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1ZUMzIzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiVlQzMjNcIiwgbW9ub3NwYWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdmFfbW9ubzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ05vdmEgTW9ubycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIk5vdmEgTW9ub1wiLCBtb25vc3BhY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHRfbW9ubzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1BUIE1vbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJQVCBNb25vXCIsIG1vbm9zcGFjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXRpdmVfbW9ubzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0N1dGl2ZSBNb25vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiQ3V0aXZlIE1vbm9cIiwgbW9ub3NwYWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3ZWJfc2FmZToge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvcmdpYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0dlb3JnaWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbGF0aW5vX2xpbmV0eXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnUGFsYXRpbm8gTGluZXR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNfbmV3X3JvbWFuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2Fuc19zZXJpZjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdBcmlhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFsX2JsYWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnQXJpYWwgQmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJBcmlhbCBCbGFja1wiLCBHYWRnZXQsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVsdmV0aWNhX25ldWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnSW1wYWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ0ltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbHVjaWRhX3NhbnNfdW5pY29kZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhaG9tYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ1RhaG9tYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVidWNoZXRfbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdUcmVidWNoZXQgTVMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcmRhbmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6ICdWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VyaWVyX25ldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ1wiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGx1Y2lkYV9jb25zb2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lOiAnTHVjaWRhIENvbnNvbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnXCJMdWNpZGEgQ29uc29sZVwiLCBNb25hY28sIG1vbm9zcGFjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW5sbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogJ01lbmxvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ01lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIEluaXQgR29vZ2xlIEZvbnRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBnb29nbGVfZm9udHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGdmYW0gaW4gJHNjb3BlLmZvbnRzLmdvb2dsZSkge1xuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZm9udHMuZ29vZ2xlLmhhc093blByb3BlcnR5KGdmYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGdmb250IGluICRzY29wZS5mb250cy5nb29nbGVbZ2ZhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZm9udHMuZ29vZ2xlW2dmYW1dLmhhc093blByb3BlcnR5KGdmb250KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZV9mb250cy5wdXNoKCRzY29wZS5mb250cy5nb29nbGVbZ2ZhbV1bZ2ZvbnRdLmRpc3BsYXlfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdlYkZvbnQubG9hZCh7XG4gICAgICAgICAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlsaWVzOiBnb29nbGVfZm9udHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIFRpbnlDb2xvclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAkc2NvcGUuY29sb3Jfc2NoZW1lID0ge1xuICAgICAgICAgICAgICAgIGJhc2VfY29sb3I6ICcjNDI4YmNhJywgLy8gQGJyYW5kLXByaW1hcnlcbiAgICAgICAgICAgICAgICBzY2hlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuYWxvZ291czoge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnYW5hbG9nb3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBbmFsb2dvdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNvbG9yX3NjaGVtZS5nZW5lcmF0ZV9jb2xvcnMoJ2FuYWxvZ291cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb25vY2hyb21hdGljOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdtb25vY2hyb21hdGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdNb25vY2hyb21hdGljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5jb2xvcl9zY2hlbWUuZ2VuZXJhdGVfY29sb3JzKCdtb25vY2hyb21hdGljJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0X2NvbXBsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc3BsaXRjb21wbGVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6J1NwbGl0IENvbXBsZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNvbG9yX3NjaGVtZS5nZW5lcmF0ZV9jb2xvcnMoJ3NwbGl0Y29tcGxlbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0cmlhZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5Oid0cmlhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOidUcmlhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY29sb3Jfc2NoZW1lLmdlbmVyYXRlX2NvbG9ycygndHJpYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGV0cmFkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3RldHJhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOidUZXRyYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNvbG9yX3NjaGVtZS5nZW5lcmF0ZV9jb2xvcnMoJ3RldHJhZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRfYWN0aXZlX3NjaGVtZTogZnVuY3Rpb24oc2NoZW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZS5jb2xvcl9zY2hlbWUuYWN0aXZlX3NjaGVtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2NoZW1lLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHNjaGVtZS5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IHNjaGVtZS5jb2xvcnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfY29sb3JzOiBmdW5jdGlvbihzY2hlbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9ycyA9IHRpbnljb2xvcigkc2NvcGUuY29sb3Jfc2NoZW1lLmJhc2VfY29sb3IpW3NjaGVtZV0oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleF9jb2xvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIGNvbG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGV4X2NvbG9ycy5wdXNoKGNvbG9yc1tjXS50b0hleFN0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZXhfY29sb3JzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoJHNjb3BlLmNvbG9yX3NjaGVtZSwge1xuICAgICAgICAgICAgICAgIGFjdGl2ZV9zY2hlbWU6IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAndHJpYWQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVHJpYWQnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6ICRzY29wZS5jb2xvcl9zY2hlbWUuc2NoZW1lcy50cmlhZC5jb2xvcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIFNwZWN0cnVtXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICRzY29wZS5zcGVjdHJ1bV9jb25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2xpY2tvdXRGaXJlc0NoYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU6ICdzcF9ib290c3R5bGUnLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VyQ2xhc3NOYW1lOiAnc3BfYm9vdHN0eWxlJyxcbiAgICAgICAgICAgICAgICBwYWxldHRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvbG9yX3NjaGVtZS5jb2xvcnMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JzID0gdGlueWNvbG9yWyRzY29wZS5jb2xvcl9zY2hlbWUuc2NoZW1lXSgkc2NvcGUuY29sb3Jfc2NoZW1lLmJhc2VfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFsZXR0ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIGNvbG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZS5wdXNoKGNvbG9yc1tjXS50b0hleFN0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWxldHRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhbGV0dGU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRGb3JtYXQ6IFwiaGV4XCIsXG4gICAgICAgICAgICAgICAgc2hvd0J1dHRvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dJbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93UGFsZXR0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2VsZWN0aW9uUGFsZXR0ZTogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIEluaXQgQ29udHJvbHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJHNjb3BlLmN0cmxzID0ge1xuICAgICAgICAgICAgICAgIGJvZHlfd2ViX3NhZmVfZm9udF9mYW1pbHk6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogJHNjb3BlLmZvbnRzLndlYl9zYWZlLnNhbnNfc2VyaWYuaGVsdmV0aWNhX25ldWUuZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJHNjb3BlLmZvbnRzLndlYl9zYWZlLnNhbnNfc2VyaWYuaGVsdmV0aWNhX25ldWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuY3RybHMudXNlX2dvb2dsZV9mb250cy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bmb250LWZhbWlseS1iYXNlJ10gPSAkc2NvcGUuY3RybHMuYm9keV93ZWJfc2FmZV9mb250X2ZhbWlseS5wcmV2aWV3IHx8ICRzY29wZS5jdHJscy5ib2R5X3dlYl9zYWZlX2ZvbnRfZmFtaWx5LnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHlfZ29vZ2xlX2ZvbnRfZmFtaWx5OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICRzY29wZS5mb250cy5nb29nbGUuc2Fuc19zZXJpZi5kcm9pZF9zYW5zLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICRzY29wZS5mb250cy5nb29nbGUuc2Fuc19zZXJpZi5kcm9pZF9zYW5zLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuY3RybHMudXNlX2dvb2dsZV9mb250cy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bmb250LWZhbWlseS1iYXNlJ10gPSAkc2NvcGUuY3RybHMuYm9keV9nb29nbGVfZm9udF9mYW1pbHkucHJldmlldyB8fCAkc2NvcGUuY3RybHMuYm9keV9nb29nbGVfZm9udF9mYW1pbHkuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keV9iZzoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bib2R5LWJnJ10gPSAkc2NvcGUuY3RybHMuYm9keV9iZy5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib290c3RyYXBfdGhlbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvcmRlcl9yYWRpdXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogNCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkc2NvcGUuY3RybHMuYm9yZGVyX3JhZGl1cy5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bib3JkZXItcmFkaXVzLWxhcmdlJ10gPSBNYXRoLmZsb29yKHZhbHVlICogMS41KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGJvcmRlci1yYWRpdXMtYmFzZSddID0gTWF0aC5mbG9vcih2YWx1ZSAqIDEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAYm9yZGVyLXJhZGl1cy1zbWFsbCddID0gTWF0aC5mbG9vcih2YWx1ZSAqIDAuNSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBicmFuZF9wcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICcjNDI4YmNhJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGJyYW5kLXByaW1hcnknXSA9ICRzY29wZS5jdHJscy5icmFuZF9wcmltYXJ5LmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJyYW5kX3N1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogJyM1Y2I4NWMnLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAYnJhbmQtc3VjY2VzcyddID0gJHNjb3BlLmN0cmxzLmJyYW5kX3N1Y2Nlc3MuY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnJhbmRfaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnIzViYzBkZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BicmFuZC1pbmZvJ10gPSAkc2NvcGUuY3RybHMuYnJhbmRfaW5mby5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBicmFuZF93YXJuaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICcjZjBhZDRlJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGJyYW5kLXdhcm5pbmcnXSA9ICRzY29wZS5jdHJscy5icmFuZF93YXJuaW5nLmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJyYW5kX2Rhbmdlcjoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnI2Q5NTM0ZicsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BicmFuZC1kYW5nZXInXSA9ICRzY29wZS5jdHJscy5icmFuZF9kYW5nZXIuY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnV0dG9uX2ZvbnRfd2VpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAYnRuLWZvbnQtd2VpZ2h0J10gPSAkc2NvcGUuY3RybHMuYnV0dG9uX2ZvbnRfd2VpZ2h0LmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1dHRvbl9zdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNfdXBwZXJjYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2RlX3dlYl9zYWZlX2ZvbnRfZmFtaWx5OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICRzY29wZS5mb250cy53ZWJfc2FmZS5tb25vc3BhY2UubWVubG8uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJHNjb3BlLmZvbnRzLndlYl9zYWZlLm1vbm9zcGFjZS5tZW5sby5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5jdHJscy51c2VfZ29vZ2xlX2ZvbnRzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGZvbnQtZmFtaWx5LW1vbm9zcGFjZSddID0gJHNjb3BlLmN0cmxzLmNvZGVfd2ViX3NhZmVfZm9udF9mYW1pbHkucHJldmlldyB8fCAkc2NvcGUuY3RybHMuY29kZV93ZWJfc2FmZV9mb250X2ZhbWlseS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29kZV9nb29nbGVfZm9udF9mYW1pbHk6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogJHNjb3BlLmZvbnRzLmdvb2dsZS5tb25vc3BhY2UuZHJvaWRfc2Fuc19tb25vLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICRzY29wZS5mb250cy5nb29nbGUubW9ub3NwYWNlLmRyb2lkX3NhbnNfbW9uby5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmN0cmxzLnVzZV9nb29nbGVfZm9udHMuY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAZm9udC1mYW1pbHktbW9ub3NwYWNlJ10gPSAkc2NvcGUuY3RybHMuY29kZV9nb29nbGVfZm9udF9mYW1pbHkucHJldmlldyB8fCAkc2NvcGUuY3RybHMuY29kZV9nb29nbGVfZm9udF9mYW1pbHkuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcl9jbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnY29udGFpbmVyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9udF9zaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IDE0LFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAZm9udC1zaXplLWJhc2UnXSA9ICRzY29wZS5jdHJscy5mb250X3NpemUuY29udHJvbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvbnRfY29udHJhc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogRk9OVF9DT05UUkFTVFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfZm9udF9zaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IDE0LFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAZm9udC1zaXplLWgxJ10gPSBNYXRoLmZsb29yKCRzY29wZS5jdHJscy5oZWFkaW5nc19mb250X3NpemUuY29udHJvbCAqIDIuNikgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bmb250LXNpemUtaDInXSA9IE1hdGguZmxvb3IoJHNjb3BlLmN0cmxzLmhlYWRpbmdzX2ZvbnRfc2l6ZS5jb250cm9sICogMi4xNSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0Bmb250LXNpemUtaDMnXSA9IE1hdGguZmxvb3IoJHNjb3BlLmN0cmxzLmhlYWRpbmdzX2ZvbnRfc2l6ZS5jb250cm9sICogMS43KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGZvbnQtc2l6ZS1oNCddID0gTWF0aC5mbG9vcigkc2NvcGUuY3RybHMuaGVhZGluZ3NfZm9udF9zaXplLmNvbnRyb2wgKiAxLjI1KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGZvbnQtc2l6ZS1oNSddID0gTWF0aC5mbG9vcigkc2NvcGUuY3RybHMuaGVhZGluZ3NfZm9udF9zaXplLmNvbnRyb2wpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAZm9udC1zaXplLWg2J10gPSBNYXRoLmZsb29yKCRzY29wZS5jdHJscy5oZWFkaW5nc19mb250X3NpemUuY29udHJvbCAqIEZPTlRfQ09OVFJBU1QpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfZm9udF93ZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAaGVhZGluZ3MtZm9udC13ZWlnaHQnXSA9ICRzY29wZS5jdHJscy5oZWFkaW5nc19mb250X3dlaWdodC5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkaW5nc19pc19hdXRvX2NvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRpbmdzX2ZvbnRfY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJscy5oZWFkaW5nc19pc19hdXRvX2NvbG9yLmNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IGF1dG9fb3ZlcmxheV9jb2xvcigkc2NvcGUuY3RybHMuYm9keV9iZy5jb250cm9sLCAkc2NvcGUuY3RybHMuaGVhZGluZ3NfZm9udF9jb250cmFzdC5jb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSAkc2NvcGUuY3RybHMuaGVhZGluZ3NfZm9udF9jb2xvci5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGhlYWRpbmdzLWNvbG9yJ10gPSBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfZm9udF9jb250cmFzdDoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiBGT05UX0NPTlRSQVNUXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkaW5nc19saW5lX2hlaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAxLjEsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BoZWFkaW5ncy1saW5lLWhlaWdodCddID0gJHNjb3BlLmN0cmxzLmhlYWRpbmdzX2xpbmVfaGVpZ2h0LmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRpbmdzX3dlYl9zYWZlX2ZvbnRfZmFtaWx5OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICRzY29wZS5mb250cy53ZWJfc2FmZS5zYW5zX3NlcmlmLmhlbHZldGljYV9uZXVlLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICRzY29wZS5mb250cy53ZWJfc2FmZS5zYW5zX3NlcmlmLmhlbHZldGljYV9uZXVlLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmN0cmxzLnVzZV9nb29nbGVfZm9udHMuY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAaGVhZGluZ3MtZm9udC1mYW1pbHknXSA9ICRzY29wZS5jdHJscy5oZWFkaW5nc193ZWJfc2FmZV9mb250X2ZhbWlseS5wcmV2aWV3IHx8ICRzY29wZS5jdHJscy5oZWFkaW5nc193ZWJfc2FmZV9mb250X2ZhbWlseS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfZ29vZ2xlX2ZvbnRfZmFtaWx5OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICRzY29wZS5mb250cy5nb29nbGUuc2Fuc19zZXJpZi5kcm9pZF9zYW5zLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICRzY29wZS5mb250cy5nb29nbGUuc2Fuc19zZXJpZi5kcm9pZF9zYW5zLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuY3RybHMudXNlX2dvb2dsZV9mb250cy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BoZWFkaW5ncy1mb250LWZhbWlseSddID0gJHNjb3BlLmN0cmxzLmhlYWRpbmdzX2dvb2dsZV9mb250X2ZhbWlseS5wcmV2aWV3IHx8ICRzY29wZS5jdHJscy5oZWFkaW5nc19nb29nbGVfZm9udF9mYW1pbHkuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGp1bWJvdHJvbl9iZzoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnI2VlZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BqdW1ib3Ryb24tYmcnXSA9ICRzY29wZS5jdHJscy5qdW1ib3Ryb25fYmcuY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAganVtYm90cm9uX2NvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuY3RybHMuanVtYm90cm9uX2lzX2F1dG9fY29sb3IuY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gYXV0b19vdmVybGF5X2NvbG9yKCRzY29wZS52YXJzWydAanVtYm90cm9uLWJnJ10sICRzY29wZS5jdHJscy5qdW1ib3Ryb25fY29udHJhc3QuY29udHJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJHNjb3BlLmN0cmxzLmp1bWJvdHJvbl9jb2xvci5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGp1bWJvdHJvbi1jb2xvciddID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGp1bWJvdHJvbl9jb250cmFzdDoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiBGT05UX0NPTlRSQVNUXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBqdW1ib3Ryb25fZm9udF9zaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IDIxLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAanVtYm90cm9uLWZvbnQtc2l6ZSddID0gJHNjb3BlLmN0cmxzLmp1bWJvdHJvbl9mb250X3NpemUuY29udHJvbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGp1bWJvdHJvbl9oZWFkaW5nX2NvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuY3RybHMuanVtYm90cm9uX2lzX2F1dG9fY29sb3IuY29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gYXV0b19vdmVybGF5X2NvbG9yKCRzY29wZS52YXJzWydAanVtYm90cm9uLWJnJ10sICRzY29wZS5jdHJscy5qdW1ib3Ryb25fY29udHJhc3QuY29udHJvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJHNjb3BlLmN0cmxzLmp1bWJvdHJvbl9oZWFkaW5nX2NvbG9yLmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAanVtYm90cm9uLWhlYWRpbmctY29sb3InXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBqdW1ib3Ryb25faXNfYXV0b19jb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBqdW1ib3Ryb25fcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQGp1bWJvdHJvbi1wYWRkaW5nJ10gPSAkc2NvcGUuY3RybHMuanVtYm90cm9uX3BhZGRpbmcuY29udHJvbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IDEuNDMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BsaW5lLWhlaWdodC1iYXNlJ10gPSAkc2NvcGUuY3RybHMubGluZV9oZWlnaHQuY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF2YmFyX2hlaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQG5hdmJhci1oZWlnaHQnXSA9ICRzY29wZS5jdHJscy5uYXZiYXJfaGVpZ2h0LmNvbnRyb2wgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXZiYXJfbWFyZ2luX2JvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQG5hdmJhci1tYXJnaW4tYm90dG9tJ10gPSAkc2NvcGUuY3RybHMubmF2YmFyX21hcmdpbl9ib3R0b20uY29udHJvbCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdmJhcl9iZzoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnIzIyMicsXG4gICAgICAgICAgICAgICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BuYXZiYXItaW52ZXJzZS1iZyddID0gJHNjb3BlLmN0cmxzLm5hdmJhcl9iZy5jb250cm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXZiYXJfZm9udF9jb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiAnQGdyYXktbGlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJscy5uYXZiYXJfaXNfYXV0b19jb2xvci5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBhdXRvX292ZXJsYXlfY29sb3IoJHNjb3BlLmN0cmxzLm5hdmJhcl9iZy5jb250cm9sLCAkc2NvcGUuY3RybHMuZm9udF9jb250cmFzdC5jb250cm9sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSAkc2NvcGUuY3RybHMubmF2YmFyX2ZvbnRfY29sb3IuY29udHJvbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BuYXZiYXItaW52ZXJzZS1jb2xvciddID0gY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3InXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXZiYXJfaXNfYXV0b19jb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w6IDEwLFxuICAgICAgICAgICAgICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICRzY29wZS5jdHJscy5wYWRkaW5nLmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQHBhZGRpbmctYmFzZS12ZXJ0aWNhbCddID0gTWF0aC5mbG9vcih2YWx1ZSAqIDAuNikgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbCddID0gTWF0aC5mbG9vcih2YWx1ZSAqIDEuMikgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BwYWRkaW5nLWxhcmdlLXZlcnRpY2FsJ10gPSBNYXRoLmZsb29yKHZhbHVlICogMSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BwYWRkaW5nLWxhcmdlLWhvcml6b250YWwnXSA9IE1hdGguZmxvb3IodmFsdWUgKiAxLjYpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCddID0gTWF0aC5mbG9vcih2YWx1ZSAqIDAuNSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnZhcnNbJ0BwYWRkaW5nLXNtYWxsLWhvcml6b250YWwnXSA9IE1hdGguZmxvb3IodmFsdWUgKiAxKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudmFyc1snQHBhZGRpbmcteHMtdmVydGljYWwnXSA9IE1hdGguZmxvb3IodmFsdWUgKiAwLjEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS52YXJzWydAcGFkZGluZy14cy1ob3Jpem9udGFsJ10gPSBNYXRoLmZsb29yKHZhbHVlICogMC41KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVzZV9nb29nbGVfZm9udHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZS5jdHJscywge1xuICAgICAgICAgICAgICAgIHJ1bl9jYWxjczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmN0cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmN0cmxzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJsc1tpXS5oYXNPd25Qcm9wZXJ0eSgnY2FsYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jdHJsc1tpXS5jYWxjKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRfZGVmYXVsdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jdHJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJscy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jdHJsc1tpXVsnZGVmYXVsdCddID0gJHNjb3BlLmN0cmxzW2ldLmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGFsbG93cyB1cyB0byByZXNldCBhbnkgaW5kaXZpZHVhbCBjb250cm9sXG4gICAgICAgICAgICAkc2NvcGUuY3RybHMuc2V0X2RlZmF1bHRzKCk7XG5cblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBJbml0IGFsbCB0aGUgTEVTUyB2YXJpYWJsZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJHNjb3BlLnZhcnMgPSB7fTtcbiAgICAgICAgICAgICRzY29wZS5jdHJscy5ydW5fY2FsY3MoKTtcblxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIEluaXQgc2V0dGluZ3Mgd2hpY2ggZG9uJ3QgcmVxdWlyZSBhIExFU1MgcmVjb21waWxlIGhlcmVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJHNjb3BlLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIHNob3dfdG9vbGJhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBSRUNPTVBJTEVfTEVTU19ERUxBWTogMTAwXG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgSW5pdCBzdHlsZXNoZWV0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAkc2NvcGUuc3R5bGVzaGVldHMgPSB7XG4gICAgICAgICAgICAgICAgYmFzZTogW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdCb290c3RyYXAgVGhlbWUnLCBwYXRoOiAnbGVzcy9ib290c3RyYXAvdGhlbWUubGVzcycgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYnV0dG9uX3N0eWxlczogW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdTdHJpcGUnLCBwYXRoOiAnbGVzcy9idXR0b25zX3N0cmlwZS5sZXNzJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICByZWFkX2ZpbGUoJ3BhcnRpYWxzL19wcmV2aWV3X2Jvb3RzdHlsZS5odG1sJywgZnVuY3Rpb24oZmlsZV9jb250ZW50cykge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcmV2aWV3LnNldF9odG1sKGZpbGVfY29udGVudHMpO1xuICAgICAgICAgICAgICAgICRzY29wZS5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBFTkQgSU5JVCAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8qXG4gICAgICAgICBDb2RlIEVkaXRvclxuICAgICAgICAgKi9cbiAgICAgICAgJHNjb3BlLmluaXRfY29kZV9lZGl0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5jb2RlX2VkaXRvciA9IENvZGVNaXJyb3IoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGVfZWRpdG9yJyksIHtcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJhbWJpYW5jZVwiLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdodG1sbWl4ZWQnLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAkc2NvcGUucHJldmlldy5odG1sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHNjb3BlLmNvZGVfZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJldmlldy5zZXRfaHRtbCgkc2NvcGUuY29kZV9lZGl0b3IuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qXG4gICAgICAgICBUb29sYmFyXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUudG9vbGJhciA9IHtcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRvb2xiYXIuaXNfYWN0aXZlID0gISRzY29wZS50b29sYmFyLmlzX2FjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICRzY29wZS5zd2FwX2JvZHlfaGVhZGluZ190eXBvZ3JhcGh5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYm9keV9jb250cm9sLFxuICAgICAgICAgICAgICAgIGJvZHlfc3R5bGUsXG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfY29udHJvbCxcbiAgICAgICAgICAgICAgICBoZWFkaW5nc19zdHlsZTtcblxuICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJscy51c2VfZ29vZ2xlX2ZvbnRzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBib2R5X2NvbnRyb2wgPSAkc2NvcGUuY3RybHMuYm9keV9nb29nbGVfZm9udF9mYW1pbHkuY29udHJvbDtcbiAgICAgICAgICAgICAgICBib2R5X3N0eWxlID0gJHNjb3BlLmN0cmxzLmJvZHlfZ29vZ2xlX2ZvbnRfZmFtaWx5LnN0eWxlO1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzX2NvbnRyb2wgPSAkc2NvcGUuY3RybHMuaGVhZGluZ3NfZ29vZ2xlX2ZvbnRfZmFtaWx5LmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgaGVhZGluZ3Nfc3R5bGUgPSAkc2NvcGUuY3RybHMuaGVhZGluZ3NfZ29vZ2xlX2ZvbnRfZmFtaWx5LnN0eWxlO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLmN0cmxzLmJvZHlfZ29vZ2xlX2ZvbnRfZmFtaWx5LmNvbnRyb2wgPSBoZWFkaW5nc19jb250cm9sO1xuICAgICAgICAgICAgICAgICRzY29wZS5jdHJscy5ib2R5X2dvb2dsZV9mb250X2ZhbWlseS5zdHlsZSA9IGhlYWRpbmdzX3N0eWxlO1xuICAgICAgICAgICAgICAgICRzY29wZS5jdHJscy5oZWFkaW5nc19nb29nbGVfZm9udF9mYW1pbHkuY29udHJvbCA9IGJvZHlfY29udHJvbDtcbiAgICAgICAgICAgICAgICAkc2NvcGUuY3RybHMuaGVhZGluZ3NfZ29vZ2xlX2ZvbnRfZmFtaWx5LnN0eWxlID0gYm9keV9zdHlsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keV9jb250cm9sID0gJHNjb3BlLmN0cmxzLmJvZHlfd2ViX3NhZmVfZm9udF9mYW1pbHkuY29udHJvbDtcbiAgICAgICAgICAgICAgICBib2R5X3N0eWxlID0gJHNjb3BlLmN0cmxzLmJvZHlfd2ViX3NhZmVfZm9udF9mYW1pbHkuc3R5bGU7XG4gICAgICAgICAgICAgICAgaGVhZGluZ3NfY29udHJvbCA9ICRzY29wZS5jdHJscy5oZWFkaW5nc193ZWJfc2FmZV9mb250X2ZhbWlseS5jb250cm9sO1xuICAgICAgICAgICAgICAgIGhlYWRpbmdzX3N0eWxlID0gJHNjb3BlLmN0cmxzLmhlYWRpbmdzX3dlYl9zYWZlX2ZvbnRfZmFtaWx5LnN0eWxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICRzY29wZS5jdHJscy5ib2R5X3dlYl9zYWZlX2ZvbnRfZmFtaWx5LmNvbnRyb2wgPSBoZWFkaW5nc19jb250cm9sO1xuICAgICAgICAgICAgICAgICRzY29wZS5jdHJscy5ib2R5X3dlYl9zYWZlX2ZvbnRfZmFtaWx5LnN0eWxlID0gaGVhZGluZ3Nfc3R5bGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmN0cmxzLmhlYWRpbmdzX3dlYl9zYWZlX2ZvbnRfZmFtaWx5LmNvbnRyb2wgPSBib2R5X2NvbnRyb2w7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmN0cmxzLmhlYWRpbmdzX3dlYl9zYWZlX2ZvbnRfZmFtaWx5LnN0eWxlID0gYm9keV9zdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qXG4gICAgICAgICBUYWJzXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUudGFicyA9IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50OiBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGFicy5jdXJyZW50ID0gdGFiO1xuICAgICAgICAgICAgICAgICRzY29wZS50YWJzLnNldF9hY3RpdmVfY2xhc3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRfYWN0aXZlX2NsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluICRzY29wZS50YWJzLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluICRzY29wZS50YWJzLmxpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUudGFicy5saXN0W2ldLmhhc093blByb3BlcnR5KGtleSkgJiYgJHNjb3BlLnRhYnMubGlzdFtpXS5rZXkgPT09ICRzY29wZS50YWJzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGFicy5saXN0W2ldLmNsYXNzID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50YWJzLmxpc3RbaV0uY2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBpY29uX2NsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlbicsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3ByZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFZGl0IEhUTUwnLFxuICAgICAgICAgICAgICAgICAgICBpY29uX2NsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdlZGl0X2h0bWwnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZS50YWJzLCB7XG4gICAgICAgICAgICBjdXJyZW50OiAkc2NvcGUudGFicy5saXN0WzBdLmtleVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8qXG4gICAgICAgICBQcmV2aWV3XG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUucHJldmlldyA9IHtcbiAgICAgICAgICAgIGh0bWw6IG51bGwsXG4gICAgICAgICAgICBzZXRfaHRtbDogZnVuY3Rpb24oaHRtbCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5wcmV2aWV3Lmh0bWwgPSBodG1sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLypcbiAgICAgICAgIE5hdiBNZXRob2RzXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGMgaW4gJHNjb3BlLmN0cmxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdHJscy5oYXNPd25Qcm9wZXJ0eShjKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmN0cmxzW2NdLmhhc093blByb3BlcnR5KCdjb250cm9sJykgJiYgJHNjb3BlLmN0cmxzW2NdLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jdHJsc1tjXS5jb250cm9sID0gJHNjb3BlLmN0cmxzW2NdLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLmRvd25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWFkX2ZpbGUoJ3BhcnRpYWxzL19kb3dubG9hZF9ib290c3R5bGUuaHRtbCcsIGZ1bmN0aW9uKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBpbGVkX3RlbXBsYXRlID0gJGNvbXBpbGUoY29udGVudHMpKCRzY29wZSlbMF07XG5cbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY29tcGlsZWRfdGVtcGxhdGUudGV4dENvbnRlbnRdLCB7dHlwZTogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLThcIn0pO1xuICAgICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgXCJib290c3R5bGUubGVzc1wiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuICAgICAgICAvKlxuICAgICAgICAgTEVTUyBDb21waWxpbmdcbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yIGNoYW5nZXNcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnW2N0cmxzXScsIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuXG4gICAgICAgICAgICAkc2NvcGUuY3RybHMucnVuX2NhbGNzKCk7XG5cbiAgICAgICAgICAgICRzY29wZS5sYXN0X0xFU1NfZWRpdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAkc2NvcGUudGltZXJSZWNvbXBpbGVMRVNTKCk7XG4gICAgICAgIH0sIHRydWUpO1xuXG5cbiAgICAgICAgLy8gQ2FsbCByZWNvbXBpbGVMRVNTIGFmdGVyIGEgY2VydGFpbiBhbW91bnQgb2YgaW5hY3Rpdml0eVxuICAgICAgICAkc2NvcGUudGltZXJSZWNvbXBpbGVMRVNTID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cudGltZXJSZWNvbXBpbGVMRVNTID0gd2luZG93LnRpbWVyUmVjb21waWxlTEVTUyB8fCBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtICRzY29wZS5sYXN0X0xFU1NfZWRpdCA+PSAkc2NvcGUuc2V0dGluZ3MuUkVDT01QSUxFX0xFU1NfREVMQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwod2luZG93LnRpbWVyUmVjb21waWxlTEVTUyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50aW1lclJlY29tcGlsZUxFU1MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVjb21waWxlTEVTUygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdhdGhlciBzdHlsZXNoZWV0cyBhbmQgcmVjb21waWxlIExFU1NcbiAgICAgICAgJHNjb3BlLnJlY29tcGlsZUxFU1MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgU1RBUlQgQ09QWSBmcm9tIExFU1MgYnJvd3Nlci5qcyB2MS43LjAgbG4gNjMzID09PSBsZXNzLmpzIDEuNy4wIGxuIDgxNzFcbiAgICAgICAgICAgICBUaGlzIHNlY3Rpb24gb2YgbGVzcy5qcyBjb3VsZCBiZSB3cmFwcGVkIGFzIGEgbWV0aG9kLCBsZXNzLmxvYWRMaW5rcygpLlxuICAgICAgICAgICAgIFRPRE86IExvdHMgb2YgcHBsIHdhbnQgdGhlIGFiaWxpdHkgdG8gZHluYW1pY2FsbHkgYWRkIGxlc3MgZmlsZXMsIG1ha2UgYSBQUj9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHR5cGVQYXR0ZXJuID0gL150ZXh0XFwvKHgtKT9sZXNzJC87XG5cbiAgICAgICAgICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XG5cbiAgICAgICAgICAgIGxlc3Muc2hlZXRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlua3NbaV0ucmVsID09PSAnc3R5bGVzaGVldC9sZXNzJyB8fCAobGlua3NbaV0ucmVsLm1hdGNoKC9zdHlsZXNoZWV0LykgJiZcbiAgICAgICAgICAgICAgICAgICAgKGxpbmtzW2ldLnR5cGUubWF0Y2godHlwZVBhdHRlcm4pKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzcy5zaGVldHMucHVzaChsaW5rc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRU5EIENPUFlcblxuICAgICAgICAgICAgbGVzcy5yZWZyZXNoKHRydWUsICRzY29wZS52YXJzKTtcbiAgICAgICAgfTtcblxuICAgIH1dKTtcblxubW9kdWxlLmV4cG9ydHMuY29udHJvbGxlcnMgPSBjb250cm9sbGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuLypcbiBEaXJlY3RpdmVzXG4gKi9cblxuYW5ndWxhci5tb2R1bGUoJ2Jvb3RzdHlsZUFwcC5kaXJlY3RpdmVzJywgW10pLlxuICAgIGRpcmVjdGl2ZSgnYm9vdHN0eWxlVmVyc2lvbicsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgICAgICAgICBlbG0udGV4dCh2ZXJzaW9uKTtcbiAgICAgICAgfTtcbiAgICB9XSkuXG4gICAgZGlyZWN0aXZlKCd0b2dnbGVUb29sYmFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL190b29sYmFyX3RvZ2dsZS5odG1sJ1xuICAgICAgICB9O1xuICAgIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuIEZpbHRlcnNcbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnYm9vdHN0eWxlQXBwLmZpbHRlcnMnLCBbXSkuXG4gICAgZmlsdGVyKCdjYXBpdGFsaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCwgJHNjb3BlKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH07XG4gICAgfSkuXG5cbiAgICBmaWx0ZXIoJ3RydXN0QXNIVE1MJywgWyckc2NlJywgZnVuY3Rpb24oJHNjZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuICAgICAgICB9O1xuICAgIH1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLypcbiBTZXJ2aWNlc1xuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdib290c3R5bGVBcHAuc2VydmljZXMnLCBbXSkuXG4gICAgdmFsdWUoJ3ZlcnNpb24nLCAndjAuMSBhbHBoYScpLlxuXG4gICAgY29uc3RhbnQoJ0ZPTlRfQ09OVFJBU1QnLCAwLjgpLlxuXG4gICAgZmFjdG9yeSgncmVhZF9maWxlJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZpbGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoZmlsZSkuXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1dKS5cblxuICAgIGZhY3RvcnkoJ2F1dG9fb3ZlcmxheV9jb2xvcicsIFsnRk9OVF9DT05UUkFTVCcsIGZ1bmN0aW9uKEZPTlRfQ09OVFJBU1QpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oY29sb3IsIGNvbnRyYXN0KSB7XG4gICAgICAgICAgICBjb250cmFzdCA9IGNvbnRyYXN0IHx8IEZPTlRfQ09OVFJBU1Q7XG5cbi8vICAgICAgICAgICAgdmFyIHVuZGVyID0gbmV3IENvbG9yKGNvbG9yKSxcbi8vICAgICAgICAgICAgICAgIG92ZXIgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgdmFyIHVuZGVyID0gdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgICAgICAgICBvdmVyO1xuXG4gICAgICAgICAgICBpZiAodW5kZXIuaXNEYXJrKCkpIHtcbiAgICAgICAgICAgICAgICBvdmVyID0gdGlueWNvbG9yLm1peCh1bmRlciwgJyNmZmYnLCBjb250cmFzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG92ZXIgPSB0aW55Y29sb3IubWl4KHVuZGVyLCAnIzAwMCcsIGNvbnRyYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG92ZXIudG9IZXg4U3RyaW5nKCk7XG4gICAgICAgIH07XG4gICAgfV0pLlxuXG4gICAgZmFjdG9yeSgnc2NoZW1lJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAndHJpYWQnOiBmdW5jdGlvbihiYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbnljb2xvci50cmlhZChiYXNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYW5hbG9nb3VzJzogZnVuY3Rpb24oYmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aW55Y29sb3IuYW5hbG9nb3VzKGJhc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtb25vY2hyb21hdGljJzogZnVuY3Rpb24oYmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aW55Y29sb3IubW9ub2Nocm9tYXRpYyhiYXNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3BsaXRjb21wbGVtZW50JzogZnVuY3Rpb24oYmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aW55Y29sb3Iuc3BsaXRjb21wbGVtZW50KGJhc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0ZXRyYWQnOiBmdW5jdGlvbihiYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbnljb2xvci50ZXRyYWQoYmFzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4iXX0=
