var bootstyle = angular.module('boostyleApp', ['colorpicker.module']);

bootstyle.controller('bootstyleController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.init = function() {
        var bootstrap_fonts = [
                'Helvetica'
            ],
            google_fonts = [
                'Source Sans Pro',
                'Droid Sans',
                'Lato',
                'PT Sans',
                'Ubuntu',
                'Droid Serif',
                'Open Sans',
                'Roboto',
                'Roboto Condensed',
                'Oswald',
                'Open Sans Condensed',
                'Montserrat',
                'Raleway'
            ],
            font_library = bootstrap_fonts.concat(google_fonts);

        $scope.style = {
            body_bg: '#ffffff',
            border_radius_base: 4,
            font_families: font_library,
            font_family_base: 'Helvetica Neue',
            font_family_base_preview: null,
            font_size_base: 14,
            use_bootstrap_theme: false,
        };

        $scope.BOOTSTYLE_APPLY_POLL = 400;

        WebFont.load({
            google: {
                families: font_library
            }
        });

    };

    $scope.applyStyle = function() {

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
                '@body-bg': $scope.style.body_bg,
                '@border-radius-base': $scope.style.border_radius_base + 'px',
                '@border-radius-large': Math.floor($scope.style.border_radius_base * 1.5) + 'px',
                '@border-radius-small': Math.floor($scope.style.border_radius_base * 0.5) + 'px',
                '@font-size-base': $scope.style.font_size_base + 'px',
                '@font-family-base': $scope.style.font_family_base_preview || $scope.style.font_family_base,
            };

            less.refresh(false, updatedVars);

        });
    };

    /**
     Watches
     */
    $scope.$watch('style', function(newValue, oldValue) {

        console.log('style changed, starting timer');
        $scope.last_edit = Date.now();
        $scope.applyStyleTimer();

    }, true);

    $scope.applyStyleTimer = function() {

        window.applyStyleTimer = window.applyStyleTimer || setInterval(function() {
            if (Date.now() - $scope.last_edit >= $scope.BOOTSTYLE_APPLY_POLL) {
                window.clearInterval(window.applyStyleTimer);
                window.applyStyleTimer = null;
                $scope.applyStyle();
            }

        }, 20);
    }

}]);
