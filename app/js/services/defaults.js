(function DefaultsFactoryModule() {
    'use strict';

    function DefaultsFactory($q, FontsFactory, ControlsFactory) {
        var fonts = FontsFactory;
        var controls = ControlsFactory;
        var defaults = {};

        defaults.bodyFontFamily = fonts.sansSerif.helveticaNeue.name;
        defaults.bodyBg = '#ffffff';
        defaults.borderRadius = 4;
        defaults.brandPrimary = '#428bca';
        defaults.brandSuccess = '#5cb85c';
        defaults.brandInfo = '#5bc0de';
        defaults.brandWarning = '#f0ad4e';
        defaults.brandDanger = '#d9534f';
        defaults.buttonFontWeight = 'normal';
        defaults.codeFontFamily = fonts.monospace.menlo.name;
        defaults.fontSizeBase = 14;
        defaults.darkestGray = 13.50;
        defaults.lightestGray = 93.50;
        defaults.headingsFontSize = 14;
        defaults.headingsFontWeight = 500;
        defaults.headingsFontColor = 'inherit';
        defaults.headingsLineHeight = 1.1;
        defaults.headingsFontFamily = fonts.sansSerif.helveticaNeue.name;
        defaults.jumbotronBg = '@gray-lighter';
        defaults.jumbotronColor = 'inherit';
        defaults.jumbotronFontSize = 21;
        defaults.jumbotronHeadingColor = 'inherit';
        defaults.jumbotronPadding = 30;
        defaults.lineHeight = 1.43;
        defaults.navbarHeight = 50;
        defaults.navbarMarginBottom = 20;
        defaults.navbarBg = '#222';
        defaults.navbarFontColor = '@gray-light';
        defaults.padding = 10;

        // set the control values
        defaults.apply = function() {
            var deferred = $q.defer();
            
            angular.forEach(defaults, function(value, key) {
                controls[key] = value;
             });
            
            deferred.resolve();
            
            return deferred.promise;
        };

        return defaults;
    }

    angular.module('bootstyleApp.services')
        .factory('DefaultsFactory', DefaultsFactory);
}());
