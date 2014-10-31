(function() {
    'use strict';

    angular.module('bootstyleApp.controllers')
        .controller('AppController',
        ['$scope', '$compile', '$timeout', 'read_file', 'FONT_CONTRAST', 'RECOMPILE_LESS_DELAY', 'LESS',
            function($scope, $compile, $timeout, read_file, FONT_CONTRAST, RECOMPILE_LESS_DELAY, LESS) {

                $scope.initialized = false;
                $scope.is_less_compiling = false;

                $scope.init = function() {

                    $scope.fonts = {
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
                    };

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
                                key: 'splitcomplement',
                                name: 'Split Complement',
                                colors: function() {
                                    return $scope.color_scheme.generate_colors('splitcomplement');
                                }
                            },
                            triad: {
                                key: 'triad',
                                name: 'Triad',
                                colors: function() {
                                    return $scope.color_scheme.generate_colors('triad');
                                }
                            },
                            tetrad: {
                                key: 'tetrad',
                                name: 'Tetrad',
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
                        replacerClassName: 'bs_badge bs_badge_swatch',
                        preferredFormat: "hex",
                        showAlpha: true,
                        showButtons: false,
                        showInitial: true,
                        showInput: false,
                        showPalette: false,
                        showSelectionPalette: true
                    };


                    /*
                     Init Controls
                     */
                    $scope.ctrls = {
                        body_font_family: {
                            control: $scope.fonts.sans_serif.helvetica_neue.display_name,
                            style: $scope.fonts.sans_serif.helvetica_neue.style,
                            preview: null,
                            calc: function() {
                                $scope.vars['@font-family-base'] = $scope.ctrls.body_font_family.preview || $scope.ctrls.body_font_family.style;
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
                        code_font_family: {
                            control: $scope.fonts.monospace.menlo.display_name,
                            style: $scope.fonts.monospace.menlo.style,
                            preview: null,
                            calc: function() {
                                $scope.vars['@font-family-monospace'] = $scope.ctrls.code_font_family.preview || $scope.ctrls.code_font_family.style;
                            }
                        },
                        font_size_base: {
                            control: 14,
                            calc: function() {
                                $scope.vars['@font-size-base'] = $scope.ctrls.font_size_base.control + 'px';
                            }
                        },
                        grays: {
                            control: {
                                darkest: 13.50,
                                lightest: 93.50
                            },
                            calc: function() {
                                var min = parseInt($scope.ctrls.grays.control.darkest);
                                var max = parseInt($scope.ctrls.grays.control.lightest);
                                var range = max - min;

                                var gray_hex = function(lightness) {
                                    return tinycolor('#000').lighten(range * lightness + min).toHexString();
                                };

                                $scope.vars['@gray-darker'] = gray_hex(0);
                                $scope.vars['@gray-dark'] = gray_hex(0.08125);
                                $scope.vars['@gray'] = gray_hex(0.25);
                                $scope.vars['@gray-light'] = gray_hex(0.415);
                                $scope.vars['@gray-lighter'] = gray_hex(1);
                            }
                        },
                        headings_font_size: {
                            control: 14,
                            calc: function() {
                                $scope.vars['@font-size-h1'] = Math.floor($scope.ctrls.headings_font_size.control * 2.6) + 'px';
                                $scope.vars['@font-size-h2'] = Math.floor($scope.ctrls.headings_font_size.control * 2.15) + 'px';
                                $scope.vars['@font-size-h3'] = Math.floor($scope.ctrls.headings_font_size.control * 1.7) + 'px';
                                $scope.vars['@font-size-h4'] = Math.floor($scope.ctrls.headings_font_size.control * 1.25) + 'px';
                                $scope.vars['@font-size-h5'] = Math.floor($scope.ctrls.headings_font_size.control) + 'px';
                                $scope.vars['@font-size-h6'] = Math.floor($scope.ctrls.headings_font_size.control * 0.85) + 'px';
                            }
                        },
                        headings_font_weight: {
                            control: 500,
                            calc: function() {
                                $scope.vars['@headings-font-weight'] = $scope.ctrls.headings_font_weight.control;
                            }
                        },
                        headings_font_color: {
                            control: 'inherit',
                            calc: function() {
                                $scope.vars['@headings-color'] = $scope.ctrls.headings_font_color.control;
                            }
                        },
                        headings_line_height: {
                            control: 1.1,
                            calc: function() {
                                $scope.vars['@headings-line-height'] = $scope.ctrls.headings_line_height.control;
                            }
                        },
                        headings_font_family: {
                            control: $scope.fonts.sans_serif.helvetica_neue.display_name,
                            style: $scope.fonts.sans_serif.helvetica_neue.style,
                            preview: null,
                            calc: function() {
                                $scope.vars['@headings-font-family'] = $scope.ctrls.headings_font_family.preview || $scope.ctrls.headings_font_family.style;
                            }
                        },
                        jumbotron_bg: {
                            control: '@gray-lighter',
                            calc: function() {
                                $scope.vars['@jumbotron-bg'] = $scope.ctrls.jumbotron_bg.control;
                            }
                        },
                        jumbotron_color: {
                            control: 'inherit',
                            calc: function() {
                                $scope.vars['@jumbotron-color'] = $scope.ctrls.jumbotron_color.control;
                            }
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
                                $scope.vars['@jumbotron-heading-color'] = $scope.ctrls.jumbotron_heading_color.control;
                            }
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
                                var color = $scope.ctrls.navbar_font_color.control;
                                $scope.vars['@navbar-inverse-color'] = color;
                                $scope.vars['@navbar-inverse-link-color'] = color;
                            }
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
                        }
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
                        html_mode: false
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


                    read_file('partials/app/_preview_bootstyle.html', function(file_contents) {
                        $scope.preview.set_html(file_contents);
                        $scope.initialized = true;
                    });
                };

                ////////////////////////////  END INIT  ////////////////////////////

                /*
                 Code Editor
                 */
                $scope.init_code_editor = function() {
                    $scope.code_editor = new CodeMirror(document.getElementById('code_editor'), {
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
                        $scope.settings.html_mode = false;
                    }
                };

                $scope.swap_body_heading_typography = function() {
                    var body_control,
                        body_style,
                        headings_control,
                        headings_style;

                    body_control = $scope.ctrls.body_font_family.control;
                    body_style = $scope.ctrls.body_font_family.style;
                    headings_control = $scope.ctrls.headings_font_family.control;
                    headings_style = $scope.ctrls.headings_font_family.style;

                    $scope.ctrls.body_font_family.control = headings_control;
                    $scope.ctrls.body_font_family.style = headings_style;
                    $scope.ctrls.headings_font_family.control = body_control;
                    $scope.ctrls.headings_font_family.style = body_style;
                };


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
                    read_file('partials/app/_download_bootstyle.html', function(contents) {
                        var compiled_template = $compile(contents)($scope)[0];

                        $timeout(function() {
                            var blob = new Blob([compiled_template.textContent], {type: "text/plain;charset=utf-8"});
                            saveAs(blob, "bootstyle.less");
                        });
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
                        if (Date.now() - $scope.last_LESS_edit >= RECOMPILE_LESS_DELAY) {
                            window.clearInterval(window.timerRecompileLESS);
                            window.timerRecompileLESS = null;
                            $scope.recompileLESS();
                        }

                    }, 5);
                };

                // Gather stylesheets and recompile LESS
                $scope.recompileLESS = function() {
                    $scope.is_less_compiling = true;

                    LESS.registerStyleSheets()
                        .then(function(data) {
                            return LESS.modifyVars($scope.vars);
                        }, function(e) {
                            throw e;
                        })
                        .then(function(data) {
                            $scope.is_less_compiling = false;
                        }, function(e) {
                            throw e;
                        });
                };

            }]);
}());
