'use strict';

/*
 Controllers
 */

angular.module('bootstyleApp.controllers', ['ngSanitize', 'colorpicker.module']).
    controller('BootstyleCtrl', ['$scope', 'read_file', 'auto_overlay_color', function($scope, read_file, auto_overlay_color) {

        $scope.init_bootstyle = function() {

            $scope.ctrls = {
                bootstrap_theme: {
                    control: false
                },
                container_class: {
                    control: 'container'
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
                border_radius: {
                    control: 4,
                    calc: function() {
                        var value = $scope.ctrls.border_radius.control;
                        $scope.vars['@border-radius-base']  = Math.floor(value * 1)   + 'px';
                        $scope.vars['@border-radius-large'] = Math.floor(value * 1.5) + 'px';
                        $scope.vars['@border-radius-small'] = Math.floor(value * 0.5) + 'px';
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
                        var value = $scope.ctrls.navbar_bg.control;
                        $scope.vars['@navbar-inverse-bg'] = value;
                        $scope.vars['@navbar-default-bg'] = value;
                    }
                },
                navbar_font_color: {
                    control: '@gray-light',
                    calc: function() {
                        var color;

                        if ($scope.ctrls.navbar_is_auto_color.control) {
                            console.log('is auto');
                            color = auto_overlay_color($scope.ctrls.navbar_bg.control);
                        } else {
                            console.log('is NOT auto');
                            color = $scope.ctrls.navbar_font_color.control;
                        }

                        console.log(color);

                        $scope.vars['@navbar-inverse-color'] = color;
                        $scope.vars['@navbar-inverse-link-color'] = color;

                        $scope.vars['@navbar-default-color'] = color;
                        $scope.vars['@navbar-default-link-color'] = color;

                        // TODO: why is scope apply required here to get the badge to show the right value?!
                        $scope.$apply();
                    }
                },
                navbar_is_auto_color: {
                    control: true
                },
                font_size: {
                    control: 14,
                    calc: function() {

                    }
                },
                font_contrast: {
                    control: 0.9,
                    calc: function() {

                    }
                },
                line_height: {
                    control: 1.43,
                    calc: function() {

                    }
                },
                body_bg: {
                    control: '#ffffff',
                    calc: function() {

                    }
                },
                brand_danger: {
                    control: '#d9534f',
                    calc: function() {

                    }
                },
                brand_info: {
                    control: '#5bc0de',
                    calc: function() {

                    }
                },
                brand_primary: {
                    control: '#428bca',
                    calc: function() {

                    }
                },
                brand_success: {
                    control: '#5cb85c',
                    calc: function() {

                    }
                },
                brand_warning: {
                    control: '#f0ad4e',
                    calc: function() {

                    }
                },
                button_style: {
                    control: 'default',
                    calc: function() {

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
            $scope.ctrls.set_defaults();

            // Init all the variables
            $scope.vars = {};
            $scope.ctrls.run_calcs();

            // only settings which don't require a LESS recompile
            $scope.settings = {
                use_google_fonts: true,
                show_toolbar: true,
                RECOMPILE_LESS_DELAY: 200,
            };

            $scope.stylesheets = {
                base: [
                    { name: 'Bootstrap Theme', path: 'less/bootstrap/theme.less' }
                ],
                buttons: [
                    { name: 'Stripe', path: 'less/buttons_stripe.less' },
                    { name: 'Basecamp', path: 'less/buttons_basecamp.less' },
                    { name: 'GeckoBoard', path: 'less/buttons_geckoboard.less' },
                    { name: 'ZoomShift', path: 'less/buttons_zoomshift.less' },
                ],

            };

            $scope.fonts = {
                bootstrap: {
                    'Helvetica Neue': {
                        display_name: 'Helvetica Neue (default)',
                        style: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                    }
                },
                google: {},
                library: {}
            };

            var google_fonts = [
                'Droid Sans',
                'Droid Serif',
                'Lato',
                'Montserrat',
                'Open Sans',
                // TODO: this font doesnt render correctly?
                'Open Sans Condensed',
                'Oswald',
                'PT Sans',
                'Raleway',
                'Roboto',
                'Roboto Condensed',
                'Source Sans Pro',
                'Ubuntu'
            ];

            WebFont.load({
                google: {
                    families: google_fonts
                }
            });

            // add all the fonts in google_fonts to $scope.fonts.google
            for (var font in google_fonts) {
                $scope.fonts.google[google_fonts[font]] = {
                    display_name: google_fonts[font],
                    style: google_fonts[font]
                }
            }

            // add all google and bootstrap fonts to fonts.library
            for (var bf in $scope.fonts.bootstrap) {
                $scope.fonts.library[bf] = $scope.fonts.bootstrap[bf];
            }
            for (var gf in $scope.fonts.google) {
                $scope.fonts.library[gf] = $scope.fonts.google[gf];
            }

            /*
             Init Bootstrap
             */
            $scope.bootstrap = {};

            // Colors
            $scope.bootstrap.colors = {
                brand: {
                    primary: '#428bca',
                    success: '#5cb85c',
                    info: '#5bc0de',
                    warning: '#f0ad4e',
                    danger: '#d9534f'
                }
            };

            // Scaffolding
            $scope.bootstrap.scaffolding = {
                body_bg: '#ffffff'
            };

            // Typography
            $scope.bootstrap.typography = {
                font_family_base: {
                    display_name: $scope.fonts.bootstrap['Helvetica Neue'].display_name,
                    style: $scope.fonts.bootstrap['Helvetica Neue'].style,
                    preview: null
                },
                font_size_base: 14,
                headings_font_family: {
                    display_name: 'Same as Body',
                    style: 'inherit',
                    preview: null
                },
                line_height_base: 1.43
            };
            angular.extend($scope.bootstrap.typography, {
                line_height_computed: function() {
                    return Math.floor(($scope.ctrls.font_size * $scope.ctrls.line_height));
                }
            });

            // Iconography
            $scope.bootstrap.iconography = {

            };

            // Components
            $scope.bootstrap.components = {
                padding_control: 10,
                border_radius_base: 4
            };
            angular.extend($scope.bootstrap.components, {
                'padding_base_vertical': function() {
                    return Math.floor($scope.ctrls.padding * 0.6)
                },
                'padding_base_horizontal': function() {
                    return Math.floor($scope.ctrls.padding * 1.2)
                },
                'padding_large_vertical': function() {
                    return Math.floor($scope.ctrls.padding * 1)
                },
                'padding_large_horizontal': function() {
                    return Math.floor($scope.ctrls.padding * 1.6)
                },
                'padding_small_vertical': function() {
                    return Math.floor($scope.ctrls.padding * 0.5)
                },
                'padding_small_horizontal': function() {
                    return Math.floor($scope.ctrls.padding * 1)
                },
                'padding_xs_vertical': function() {
                    return Math.floor($scope.ctrls.padding * 0.1)
                },
                'padding_xs_horizontal': function() {
                    return Math.floor($scope.ctrls.padding * 0.5)
                }
            });

            $scope.bootstrap.tables = {};
            $scope.bootstrap.buttons = {};
            $scope.bootstrap.forms = {};
            $scope.bootstrap.dropdowns = {};
            $scope.bootstrap.zindex_master_list = {};
            $scope.bootstrap.media_queries = {};
            $scope.bootstrap.grid_system = {};
            $scope.bootstrap.container_sizes = {};

            // Navbar
            $scope.bootstrap.navbar = {
                height: 50,
                color_control: '@gray-light',
                bg_control: '#222',
                margin_bottom: $scope.bootstrap.typography.line_height_computed()
            };

            $scope.bootstrap.navs = {};
            $scope.bootstrap.pagination = {};
            $scope.bootstrap.pager = {};
            $scope.bootstrap.jumbotron = {};
            $scope.bootstrap.form_states_and_alerts = {};
            $scope.bootstrap.tooltips = {};
            $scope.bootstrap.popovers = {};
            $scope.bootstrap.labels = {};
            $scope.bootstrap.modals = {};
            $scope.bootstrap.alerts = {};
            $scope.bootstrap.progress_bars = {};
            $scope.bootstrap.list_groups = {};
            $scope.bootstrap.panels = {};
            $scope.bootstrap.thumbnails = {};
            $scope.bootstrap.wells = {};
            $scope.bootstrap.badges = {};
            $scope.bootstrap.breadcrumbs = {};
            $scope.bootstrap.carousel = {};
            $scope.bootstrap.close = {};
            $scope.bootstrap.type = {};
            $scope.bootstrap.miscellaneous = {};


            /*
             Init Bootstyle
             */
            $scope.bootstyle = {
                variables: {
                    download_format: function() {
                        var download_format = '';

                        for (var i in $scope.bootstyle.variables.methods) {
                            if ($scope.bootstyle.variables.methods.hasOwnProperty(i)) {
                                download_format += i + ': ' + $scope.bootstyle.variables.methods[i]() + ';\n';
                            }
                        }

                        return download_format;
                    },
                    updated_object: function() {
                        var updated_variables = {};

                        for (var i in $scope.bootstyle.variables.methods) {
                            if ($scope.bootstyle.variables.methods.hasOwnProperty(i)) {
                                updated_variables[i] = $scope.bootstyle.variables.methods[i]();
                            }
                        }

                        return updated_variables;
                    },
                    methods: {
                        // Components
                        '@body-bg': function() {
                            return $scope.ctrls.body_bg;
                        },
                        '@border-radius-base': function() {
                            return $scope.ctrls.border_radius + 'px';
                        },
                        '@border-radius-large': function() {
                            return Math.floor($scope.ctrls.border_radius * 1.5) + 'px';
                        },
                        '@border-radius-small': function() {
                            return Math.floor($scope.ctrls.border_radius * 0.5) + 'px';
                        },
                        '@padding-base-vertical': function() {
                            return $scope.bootstrap.components.padding_base_vertical() + 'px';
                        },
                        '@padding-base-horizontal': function() {
                            return $scope.bootstrap.components.padding_base_horizontal() + 'px';
                        },
                        '@padding-large-vertical': function() {
                            return $scope.bootstrap.components.padding_large_vertical() + 'px';
                        },
                        '@padding-large-horizontal': function() {
                            return $scope.bootstrap.components.padding_large_horizontal() + 'px';
                        },
                        '@padding-small-vertical': function() {
                            return $scope.bootstrap.components.padding_small_vertical() + 'px';
                        },
                        '@padding-small-horizontal': function() {
                            return $scope.bootstrap.components.padding_small_horizontal() + 'px';
                        },
                        '@padding-xs-vertical': function() {
                            return $scope.bootstrap.components.padding_xs_vertical() + 'px';
                        },
                        '@padding-xs-horizontal': function() {
                            return $scope.bootstrap.components.padding_xs_horizontal() + 'px';
                        },

                        // Colors
                        '@brand-primary': function() {
                            return $scope.ctrls.brand_primary;
                        },
                        '@brand-success': function() {
                            return $scope.ctrls.brand_success;
                        },
                        '@brand-info': function() {
                            return $scope.ctrls.brand_info;
                        },
                        '@brand-warning': function() {
                            return $scope.ctrls.brand_warning;
                        },
                        '@brand-danger': function() {
                            return $scope.ctrls.brand_danger;
                        },

                        // Typography
                        '@font-size-base': function() {
                            return $scope.ctrls.font_size + 'px';
                        },
                        '@font-family-base': function() {
                            return $scope.bootstrap.typography.font_family_base.preview || $scope.bootstrap.typography.font_family_base.style;
                        },
                        '@headings-font-family': function() {
                            return $scope.bootstrap.typography.headings_font_family.preview || $scope.bootstrap.typography.headings_font_family.style;
                        },
                        '@line-height-base': function() {
                            return $scope.ctrls.line_height;
                        },

                        // Navbar
                        '@navbar-height': function() {
                            return $scope.ctrls.navbar_height.calc();
                        },
                        '@navbar-margin-bottom': function() {
                            return $scope.ctrls.navbar_margin_bottom + 'px';
                        },
                        '@navbar-inverse-bg': function() {
                            return $scope.ctrls.navbar_bg;
                        },
                    }
                },
            };

            read_file('partials/_preview_bootstyle.html', function(file_contents) {
                $scope.preview.set_html(file_contents);
                $scope.bootstyle.initialized = true;
            });
        };


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
            $scope.init_bootstyle()
        };

        $scope.download = function() {
            var blob = new Blob([$scope.bootstyle.variables.download_format()], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "bootstyle.less");
        };


        /*
         LESS Compiling
         */

        // Watch for changes
        // TODO: Only watch values that necessitate a recompile
        $scope.$watch('[bootstrap, bootstyle, ctrls, stylesheets]', function(newValue, oldValue) {
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

            $scope.ctrls.run_calcs();

            less.refresh(true, $scope.vars);
        };

    }]);
