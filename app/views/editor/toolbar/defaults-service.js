(function DefaultsServiceClosure() {
    'use strict';

    function DefaultsService($q, FontsService, ControlsService) {
        var fonts = FontsService;
        var controls = ControlsService;
        var service = {};

        service.bodyFontFamily = fonts.sansSerif.helveticaNeue.name;
        service.bodyBg = '#ffffff';
        service.borderRadius = 4;
        service.brandPrimary = '#428bca';
        service.brandSuccess = '#5cb85c';
        service.brandInfo = '#5bc0de';
        service.brandWarning = '#f0ad4e';
        service.brandDanger = '#d9534f';
        service.buttonFontWeight = 'normal';
        service.codeFontFamily = fonts.monospace.menlo.name;
        service.fontSizeBase = 14;
        service.darkestGray = 13.50;
        service.lightestGray = 93.50;
        service.headingsFontSize = 14;
        service.headingsFontWeight = 500;
        service.headingsFontColor = 'inherit';
        service.headingsLineHeight = 1.1;
        service.headingsFontFamily = fonts.sansSerif.helveticaNeue.name;
        service.jumbotronBg = '@gray-lighter';
        service.jumbotronColor = 'inherit';
        service.jumbotronFontSize = 21;
        service.jumbotronHeadingColor = 'inherit';
        service.jumbotronPadding = 30;
        service.lineHeight = 1.43;
        service.navbarHeight = 50;
        service.navbarMarginBottom = 20;
        service.navbarBg = '#222';
        service.navbarFontColor = '@gray-light';
        service.padding = 10;

        // set the control values
        service.apply = function() {
            var deferred = $q.defer();

            angular.forEach(service, function(value, key) {
                controls[key] = value;
             });

            deferred.resolve();

            return deferred.promise;
        };

        return service;
    }

    angular.module('bsApp.editor.toolbar')
        .factory('DefaultsService', DefaultsService);
}());
