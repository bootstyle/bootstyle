var bootstyle = angular.module('bootstyleApp', ['colorpicker.module']);

bootstyle.controller('bootstyleController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.init = function() {
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
            brand_primary: '#428bca',
            brand_success: '#5cb85c',
            brand_info: '#5bc0de',
            brand_warning: '#f0ad4e',
            brand_danger: '#d9534f'
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
            navbar: {
                height: 50,
                margin_bottom: $scope.bootstrap.typography.line_height_computed()
            }
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

        // Type
        $scope.bootstrap.type = {
            headings_font_family: {
                display_name: $scope.fonts.bootstrap['Helvetica Neue'].display_name,
                style: $scope.fonts.bootstrap['Helvetica Neue'].style,
                preview: null
            }
        };
        $scope.bootstrap.miscellaneous = {};

        /*
         Init Bootstyle
         */
        $scope.bootstyle = {
            calculated_less: {
            },
            settings: {
                grid_container_class: 'container',
                RECOMPILE_LESS_DELAY: 300,
                additional_less: {
                    bootstrap_theme: false,
                    button_style: 'default'
                },
                is_edit_mode: true
            }
        }
    };

    $scope.reset = function() {
        var do_reset = confirm('Permanently lose all changes?');

        if (do_reset) {  $scope.init() }
    };

    $scope.recompileLESS = function() {

        /*
         START COPY from LESS browser.js v1.7.0 ln 633, or in less.js 1.7.0 ln 8171
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

        $scope.bootstyle.calculated_less = {
            // Components
            '@body-bg': $scope.bootstrap.components.body_bg,

            '@border-radius-base': $scope.bootstrap.components.border_radius_base + 'px',
            '@border-radius-large': Math.floor($scope.bootstrap.components.border_radius_base * 1.5) + 'px',
            '@border-radius-small': Math.floor($scope.bootstrap.components.border_radius_base * 0.5) + 'px',

            '@padding-base-vertical': Math.floor($scope.bootstrap.components.padding_control * 0.6) + 'px',
            '@padding-base-horizontal': Math.floor($scope.bootstrap.components.padding_control * 1.2) + 'px',
            '@padding-large-vertical': Math.floor($scope.bootstrap.components.padding_control * 1) + 'px',
            '@padding-large-horizontal': Math.floor($scope.bootstrap.components.padding_control * 1.6) + 'px',
            '@padding-small-vertical': Math.floor($scope.bootstrap.components.padding_control * 0.5) + 'px',
            '@padding-small-horizontal': Math.floor($scope.bootstrap.components.padding_control * 1) + 'px',
            '@padding-xs-vertical': Math.floor($scope.bootstrap.components.padding_control * 0.1) + 'px',
            '@padding-xs-horizontal': Math.floor($scope.bootstrap.components.padding_control * 0.5) + 'px',

            // Colors
            '@brand-primary': $scope.bootstrap.colors.brand_primary,
            '@brand-success': $scope.bootstrap.colors.brand_success,
            '@brand-info': $scope.bootstrap.colors.brand_info,
            '@brand-warning': $scope.bootstrap.colors.brand_warning,
            '@brand-danger': $scope.bootstrap.colors.brand_danger,

            // Typography
            '@font-size-base': $scope.bootstrap.typography.font_size_base + 'px',
            '@font-family-base': $scope.bootstrap.typography.font_family_base.preview || $scope.bootstrap.typography.font_family_base.style,
            '@line-height-base': $scope.bootstrap.typography.line_height_base,

            // Type
            '@headings-font-family': $scope.bootstrap.type.headings_font_family.preview || $scope.bootstrap.type.headings_font_family.style,

            // Navbar
            '@navbar-height': $scope.bootstrap.navbar.height + 'px'
        };

        less.refresh(true, $scope.bootstyle.calculated_less);

    };

    /**
     Watches
     Any scope properties which require less to be recompiled are watched for changes
     */
    $scope.$watch('[less, settings.additional_less]', function(newValue, oldValue) {
        $scope.last_LESS_edit = Date.now();
        $scope.timerRecompileLESS();

    }, true);

    $scope.timerRecompileLESS = function() {

        // wait RECOMPILE_LESS_DELAY seconds before recompiling LESS
        window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
            if (Date.now() - $scope.last_LESS_edit >= $scope.bootstyle.settings.RECOMPILE_LESS_DELAY) {
                window.clearInterval(window.timerRecompileLESS);
                window.timerRecompileLESS = null;
                $scope.recompileLESS();
            }

        }, 20);
    };

    $scope.download = function() {
        var less_string = '';

        for (var i in $scope.bootstyle.calculated_less) {
            if ($scope.bootstyle.calculated_less.hasOwnProperty(i)) {
                less_string += i + ': ' + $scope.bootstyle.calculated_less[i] + ';\n';
            }
        }

         var blob = new Blob([less_string], {type: "text/plain;charset=utf-8"});
         saveAs(blob, "bootstyle.less");
    };

}]);

/**
 Filters
 */
bootstyle.filter('capitalize', function() {
    return function(input, $scope) {
        if (input != null)
            input = input.toLowerCase();
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
});
