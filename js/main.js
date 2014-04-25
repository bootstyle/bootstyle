angular.module('boostyleApp', []).controller('bootstyleController', ['$scope', function($scope) {

    $scope.init = function() {
        $scope.initStyle();
        $scope.initFont();
    };

    $scope.initStyle = function() {
        $scope.style = {
            border_radius: 4
        };

        $scope.applyStyle();
    };
    $scope.applyStyle = function() {
        var buttons = angular.element('.btn');

        for (var i = 0; i < buttons.length; i++) {
            angular.element(buttons[i]).css(
                "border-radius", parseInt($scope.style.border_radius)
            );
        }
    };

    $scope.initFont = function() {
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

        for (var i=0; i<font_library.length; i++) {
            font_names.push(font_library[i].name);
            font_api_names.push(font_library[i].api_name);
        }

        $scope.font = {
            families: font_names,
            family: font_names[0]
        };

        WebFont.load({
            google: {
                families: font_api_names
            }
        });

        $scope.applyFont();
    };

    $scope.applyFont = function() {
        angular.element('body').css('font-family', $scope.font.family)
    };


    /**
     Watches
     */
    $scope.$watch('style', function(newValue, oldValue) {
        $scope.applyStyle();
    }, true);

    $scope.$watch('font', function(newValue, oldValue) {
        console.log($scope.font.family);
        $scope.applyFont();
    }, true);
}]);
