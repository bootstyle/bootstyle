var bootstyle = angular.module('boostyleApp', ['colorpicker.module']);

bootstyle.controller('bootstyleController', ['$scope', function($scope) {

    $scope.init = function() {
        var font_library = [
            { name: 'Source Sans Pro', api_name: 'Source+Sans+Pro::latin'},
            { name: 'Droid Sans', api_name: 'Droid+Sans::latin'},
            { name: 'Lato', api_name: 'Lato::latin'},
            { name: 'PT Sans', api_name: 'PT+Sans::latin'},
            { name: 'Ubuntu', api_name: 'Ubuntu::latin'},
            { name: 'Droid Serif', api_name: 'Droid+Serif::latin'},
            { name: 'Open Sans', api_name: 'Open+Sans::latin'},
            { name: 'Roboto', api_name: 'Roboto::latin'},
            { name: 'Roboto Condensed', api_name: 'Roboto+Condensed::latin'},
            { name: 'Oswald', api_name: 'Oswald::latin'},
            { name: 'Open Sans Condensed', api_name: 'Open+Sans+Condensed:300:latin'},
            { name: 'Montserrat', api_name: 'Montserrat::latin'},
            { name: 'Raleway', api_name: 'Raleway::latin'}
        ];

        var font_names = [];
        var font_api_names = [];

        for (var i = 0; i < font_library.length; i++) {
            font_names.push(font_library[i].name);
            font_api_names.push(font_library[i].api_name);
        }

        WebFont.load({
            google: {
                families: font_api_names
            }
        });

        $scope.style = {
            use_bootstrap_theme: false,
            border_radius_base: 4,
            font_families: font_names,
            font_size_base: 14,
            body_bg: '#ffffff',
            font_family_base: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        };
    };

    $scope.applyStyle = function() {

    /*
     less.modifyVars({
     '@use-bootstrap-theme': $scope.style.use_bootstrap_theme,
     '@body-bg': $scope.style.body_bg,
     '@border-radius-base': $scope.style.border_radius_base + 'px',
     '@border-radius-large': Math.floor($scope.style.border_radius_base * 1.5) + 'px',
     '@border-radius-small': Math.floor($scope.style.border_radius_base * 0.5) + 'px',
     '@font-size-base': $scope.style.font_size_base + 'px',
     '@font-family-base': '"' + $scope.style.font_family_base + '"',
     });

     */

        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/less";
        link.href = 'less/bootstrap/theme.less';

        if ($scope.style.use_bootstrap_theme) {
            for (var l in less.sheets) {
                var push = true;
                if (less.sheets[l].href.indexOf(link.href) !== -1) {
                    push = false;
                }

                if (push) {
                    less.sheets.push(link);
                }
            }
        } else {
            for (var j = less.sheets.length - 1; j >= 0; j--) {
                if (less.sheets[j].href === link.href) {
                    console.log('-----before');
                    console.log(less.sheets);
                    less.sheets.splice(j, 1);
                    console.log('-----after');
                    console.log(less.sheets);
                }
            }
        }

        less.refresh(true, {
            '@body-bg': $scope.style.body_bg,
            '@border-radius-base': $scope.style.border_radius_base + 'px',
            '@border-radius-large': Math.floor($scope.style.border_radius_base * 1.5) + 'px',
            '@border-radius-small': Math.floor($scope.style.border_radius_base * 0.5) + 'px',
            '@font-size-base': $scope.style.font_size_base + 'px',
            '@font-family-base': '"' + $scope.style.font_family_base + '"',
        });
    };

    /**
     Watches
     */
    $scope.$watch('style', function(newValue, oldValue) {
        $scope.applyStyle();
    }, true);
}]);
