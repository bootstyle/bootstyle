var bootstyle = angular.module('boostyleApp', ['colorpicker.module']);

bootstyle.controller('bootstyleController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.init = function() {
        $scope.fonts = {
            bootstrap: {
                'Helvetica Neue': {
                    display_name: 'Helvetica Neue',
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
            'Open Sans Condensed',
            'Oswald',
            'PT Sans',
            'Raleway',
            'Roboto',
            'Roboto Condensed',
            'Source Sans Pro',
            'Ubuntu'
        ];

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

        WebFont.load({
            google: {
                families: google_fonts
            }
        });

        $scope.settings = {
            grid_container_class: 'container',
            RECOMPILE_LESS_DELAY: 300,
            use_bootstrap_theme: false
        };

        $scope.less = {
            brand: {
                primary: '#428bca',
                success: '#5cb85c',
                info: '#5bc0de',
                warning: '#f0ad4e',
                danger: '#d9534f'
            },
            body_bg: '#ffffff',
            border_radius_base: 4,
            font_family_base: {
                display_name: $scope.fonts.bootstrap['Helvetica Neue'].display_name,
                style: $scope.fonts.bootstrap['Helvetica Neue'].style,
                preview: null
            },
            padding: {
                master: 10,
                base: {
                    vertical: 6,
                    horizontal: 12
                },
                large: {
                    vertical: 10,
                    horizontal: 16
                },
                small: {
                    vertical: 5,
                    horizontal: 10
                },
                xs: {
                    vertical: 1,
                    horizontal: 5
                }
            },
            font_size_base: 14
        };

    };

    $scope.recompileLESS = function() {

        // After angular has digested and applied scope ($timeout) re-grab all the links and refresh
        $timeout(function() {

            /*
             START COPY
             Copied from LESS browser.js v1.7.0 ln 633, or in less.js 1.7.0 ln 8171
             This section of less.js could be wrapped as a method, less.loadLinks().
             TODO: Lots of ppl want the ability to dynamically add less files, make a PR
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

            var updatedVars = {
                // colors
                '@body-bg': $scope.less.body_bg,

                '@brand-primary': $scope.less.brand.primary,
                '@brand-success': $scope.less.brand.success,
                '@brand-info': $scope.less.brand.info,
                '@brand-warning': $scope.less.brand.warning,
                '@brand-danger': $scope.less.brand.danger,

                // border radius
                '@border-radius-base': $scope.less.border_radius_base + 'px',
                '@border-radius-large': Math.floor($scope.less.border_radius_base * 1.5) + 'px',
                '@border-radius-small': Math.floor($scope.less.border_radius_base * 0.5) + 'px',

                // font
                '@font-size-base': $scope.less.font_size_base + 'px',
                '@font-family-base': $scope.less.font_family_base.preview || $scope.less.font_family_base.style,

                // padding
                '@padding-base-vertical': Math.floor($scope.less.padding.master * 0.6) + 'px',
                '@padding-base-horizontal': Math.floor($scope.less.padding.master * 1.2) + 'px',

                '@padding-large-vertical': Math.floor($scope.less.padding.master * 1) + 'px',
                '@padding-large-horizontal': Math.floor($scope.less.padding.master * 1.6) + 'px',

                '@padding-small-vertical': Math.floor($scope.less.padding.master * 0.5) + 'px',
                '@padding-small-horizontal': Math.floor($scope.less.padding.master * 1) + 'px',

                '@padding-xs-vertical': Math.floor($scope.less.padding.master * 0.1) + 'px',
                '@padding-xs-horizontal': Math.floor($scope.less.padding.master * 0.5) + 'px'
            };

            less.refresh(true, updatedVars);

        });
    };

    /**
     Watches
     Any scope properties which require less to be recompiled are watched for changes
     */
    $scope.$watch('[less, settings.use_bootstrap_theme]', function(newValue, oldValue) {

        $scope.last_LESS_edit = Date.now();
        $scope.timerRecompileLESS();

    }, true);

    $scope.timerRecompileLESS = function() {

        // wait RECOMPILE_LESS_DELAY seconds before recompiling LESS
        window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
            if (Date.now() - $scope.last_LESS_edit >= $scope.settings.RECOMPILE_LESS_DELAY) {
                window.clearInterval(window.timerRecompileLESS);
                window.timerRecompileLESS = null;
                $scope.recompileLESS();
            }

        }, 20);
    }

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
