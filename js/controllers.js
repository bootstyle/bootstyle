'use strict';

/*
 Controllers
 */

angular.module('bootstyleApp.controllers', ['ngSanitize', 'colorpicker.module']).
    controller('BootstyleCtrl', ['$scope', 'read_file', function($scope, read_file) {

        $scope.init_bootstyle = function() {

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
                    display_name: 'inherit',
                    style: 'inherit',
                    preview: null
                },
                line_height_base: 1.43
            };
            angular.extend($scope.bootstrap.typography, {
                line_height_computed: function() {
                    return Math.floor(($scope.bootstrap.typography.font_size_base * $scope.bootstrap.typography.line_height_base));
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
                    return Math.floor($scope.bootstrap.components.padding_control * 0.6)
                },
                'padding_base_horizontal': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 1.2)
                },
                'padding_large_vertical': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 1)
                },
                'padding_large_horizontal': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 1.6)
                },
                'padding_small_vertical': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 0.5)
                },
                'padding_small_horizontal': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 1)
                },
                'padding_xs_vertical': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 0.1)
                },
                'padding_xs_horizontal': function() {
                    return Math.floor($scope.bootstrap.components.padding_control * 0.5)
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
                            return $scope.bootstrap.scaffolding.body_bg;
                        },
                        '@border-radius-base': function() {
                            return $scope.bootstrap.components.border_radius_base + 'px';
                        },
                        '@border-radius-large': function() {
                            return Math.floor($scope.bootstrap.components.border_radius_base * 1.5) + 'px';
                        },
                        '@border-radius-small': function() {
                            return Math.floor($scope.bootstrap.components.border_radius_base * 0.5) + 'px';
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
                            return $scope.bootstrap.colors.brand.primary;
                        },
                        '@brand-success': function() {
                            return $scope.bootstrap.colors.brand.success;
                        },
                        '@brand-info': function() {
                            return $scope.bootstrap.colors.brand.info;
                        },
                        '@brand-warning': function() {
                            return $scope.bootstrap.colors.brand.warning;
                        },
                        '@brand-danger': function() {
                            return $scope.bootstrap.colors.brand.danger;
                        },

                        // Typography
                        '@font-size-base': function() {
                            return $scope.bootstrap.typography.font_size_base + 'px';
                        },
                        '@font-family-base': function() {
                            return $scope.bootstrap.typography.font_family_base.preview || $scope.bootstrap.typography.font_family_base.style;
                        },
                        '@headings-font-family': function() {
                            return $scope.bootstrap.typography.headings_font_family.preview || $scope.bootstrap.typography.headings_font_family.style;
                        },
                        '@line-height-base': function() {
                            return $scope.bootstrap.typography.line_height_base;
                        },

                        // Navbar
                        '@navbar-height': function() {
                            return $scope.bootstrap.navbar.height + 'px';
                        },
                        '@navbar-margin-bottom': function() {
                            return $scope.bootstrap.navbar.margin_bottom + 'px';
                        },
                        '@navbar-inverse-bg': function() {
                            return $scope.bootstrap.navbar.bg_control;
                        },
                        '@navbar-inverse-color': function() {
                            var color;

                            if ($scope.bootstyle.settings.navbar.has_auto_font_color) {
                                color = $scope.bootstyle.utils.auto_overlaying_color($scope.bootstrap.navbar.bg_control);
                            } else {
                                color = $scope.bootstrap.navbar.color_control;
                            }

                            return color;
                        },
                        '@navbar-inverse-link-color': function() {
                            var color;

                            if ($scope.bootstyle.settings.navbar.has_auto_font_color) {
                                color = $scope.bootstyle.utils.auto_overlaying_color($scope.bootstrap.navbar.bg_control);
                            } else {
                                color = $scope.bootstrap.navbar.color_control;
                            }

                            return color;
                        },
                    }
                },
                settings: {
                    additional_less: {
                        bootstrap_theme: false,
                        button_style: 'default',
                    },
                    grid_container_class: 'container',
                    toolbar: {

                    },
                    is_edit_mode: true,
                    navbar: {
                        is_inverse: true,
                        has_auto_font_color: true,
                    },
                    RECOMPILE_LESS_DELAY: 300,
                    auto_font_color: {
                        contrast: 0.9,
                        breakpoint: 60
                    }
                },
                utils: {
                    auto_overlaying_color: function(color, contrast) {
                        var contrast = contrast || $scope.bootstyle.settings.auto_font_color.contrast;

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

                        if (bootstyle_brightness >= $scope.bootstyle.settings.auto_font_color.breakpoint) {
                            // light underlay, dark overlay
                            value = Math.floor((bootstyle_brightness / 2) * (1 - contrast) + (bootstyle_brightness / 5));
                            saturation = Math.floor((under.saturation()) * (1 - contrast));
                        } else {
                            // light underlay, dark overlay
                            value = Math.floor(((bootstyle_brightness / 5) * contrast) + (100 - bootstyle_brightness / 5));
                            saturation = Math.floor((under.saturation() / 2) * (1 - contrast));
                        }
                        // console.log('-----------------');
                        // console.log(saturation);
                        // console.log(value);
                        // console.log('-----------------');

                        // sat must be set first for proper effect
                        over.saturation(saturation);
                        over.value(value);

                        return over.hexString();
                    },
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
                $scope.bootstyle.settings.is_edit_mode = !$scope.bootstyle.settings.is_edit_mode;

                $scope.preview.update_column_class()
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
            column_class: 'col-md-9 col-xs-8',
            html: null,
            update_column_class: function() {
                if ($scope.bootstyle.settings.is_edit_mode) {
                    $scope.preview.column_class = 'col-md-9 col-xs-8';
                } else {
                    $scope.preview.column_class = 'col-xs-12';
                }
            },
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
        $scope.$watch('[bootstrap, bootstyle]', function(newValue, oldValue) {
            $scope.last_LESS_edit = Date.now();
            $scope.timerRecompileLESS();
        }, true);


        // Call recompileLESS after a certain amount of inactivity
        $scope.timerRecompileLESS = function() {
            window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
                if (Date.now() - $scope.last_LESS_edit >= $scope.bootstyle.settings.RECOMPILE_LESS_DELAY) {
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

            less.refresh(true, $scope.bootstyle.variables.updated_object());
        };

    }]);
