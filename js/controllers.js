'use strict';

/*
 Controllers
 */

angular.module('bootstyleApp.controllers', ['ngSanitize', 'colorpicker.module']).
    controller('BootstyleCtrl',
        ['$scope', '$compile', '$timeout', 'read_file', 'auto_overlay_color', 'FONT_CONTRAST', 'color_scheme',
        function($scope, $compile, $timeout, read_file, auto_overlay_color, FONT_CONTRAST, color_scheme) {

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
             Init Controls
             */
            $scope.ctrls = {
                color_scheme_base_color: {
                    control: '#428bca', // @brand-primary
                    calc: function() {
                        color_scheme.set_hue($scope.ctrls.color_scheme_base_color.control);
                    }
                },
                color_scheme_scheme: {
                    control: 'triad',
                    calc: function() {
                        color_scheme.set_scheme($scope.ctrls.color_scheme_base_color.control);
                    }
                },
                color_scheme_variation: {
                    control: 'soft',
                    calc: function() {
                        color_scheme.set_variation($scope.ctrls.color_scheme_base_color.control);
                    }
                },
                border_radius: {
                    control: 4,
                    calc: function() {
                        var value = $scope.ctrls.border_radius.control;
                        $scope.vars['@border-radius-base']  = Math.floor(value * 1)   + 'px';
                        $scope.vars['@border-radius-large'] = Math.floor(value * 1.5) + 'px';
                        $scope.vars['@border-radius-small'] = Math.floor(value * 0.5) + 'px';
                    }
                },
                padding: {
                    control: 10,
                    calc: function() {
                        var value = $scope.ctrls.padding.control;
                        $scope.vars['@padding-base-vertical']    = Math.floor(value * 0.6) + 'px';
                        $scope.vars['@padding-base-horizontal']  = Math.floor(value * 1.2) + 'px';
                        $scope.vars['@padding-large-vertical']   = Math.floor(value * 1)   + 'px';
                        $scope.vars['@padding-large-horizontal'] = Math.floor(value * 1.6) + 'px';
                        $scope.vars['@padding-small-vertical']   = Math.floor(value * 0.5) + 'px';
                        $scope.vars['@padding-small-horizontal'] = Math.floor(value * 1)   + 'px';
                        $scope.vars['@padding-xs-vertical']      = Math.floor(value * 0.1) + 'px';
                        $scope.vars['@padding-xs-horizontal']    = Math.floor(value * 0.5) + 'px';
                    }
                },
                container_class: {
                    control: 'container'
                },
                bootstrap_theme: {
                    control: false
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
                        var value = $scope.ctrls.navbar_bg.control;
                        $scope.vars['@navbar-inverse-bg'] = value;
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
                font_size: {
                    control: 14,
                    calc: function() {
                        $scope.vars['@font-size-base'] = $scope.ctrls.font_size.control + 'px';
                    }
                },
                font_contrast: {
                    control: FONT_CONTRAST
                },
                line_height: {
                    control: 1.43,
                    calc: function() {
                        $scope.vars['@line-height-base'] = $scope.ctrls.line_height.control;
                    }
                },
                use_google_fonts: {
                    control: false
                },
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
                code_web_safe_font_family: {
                    control: $scope.fonts.web_safe.monospace.menlo.display_name,
                    style: $scope.fonts.web_safe.monospace.menlo.style,
                    preview: null,
                    calc: function() {
                        if (!$scope.ctrls.use_google_fonts) {
                            $scope.vars['@font-family-monospace'] = $scope.ctrls.code_web_safe_font_family.preview || $scope.ctrls.code_web_safe_font_family.style;
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
                code_google_font_family: {
                    control: $scope.fonts.google.monospace.droid_sans_mono.display_name,
                    style: $scope.fonts.google.monospace.droid_sans_mono.style,
                    preview: null,
                    calc: function() {
                        if ($scope.ctrls.use_google_fonts) {
                            $scope.vars['@font-family-monospace'] = $scope.ctrls.code_google_font_family.preview || $scope.ctrls.code_google_font_family.style;
                        }
                    }
                },
                button_font_weight: {
                    control: 'normal',
                    calc: function() {
                        $scope.vars['@btn-font-weight'] =   $scope.ctrls.button_font_weight.control;
                    }
                },
                button_style: {
                    control: 'default'
                },
                buttons_uppercase: {
                    control: false
                },
                body_bg: {
                    control: '#ffffff',
                    calc: function() {
                        $scope.vars['@body-bg'] = $scope.ctrls.body_bg.control;
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
                    { name: 'Stripe', path: 'less/buttons_stripe.less' },
                    { name: 'GeckoBoard', path: 'less/buttons_geckoboard.less' },
                    { name: 'ZoomShift', path: 'less/buttons_zoomshift.less' },
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
            toggle: function() {
                $scope.settings.show_toolbar = !$scope.settings.show_toolbar;
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
