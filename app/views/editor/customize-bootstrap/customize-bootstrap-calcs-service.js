(function CalcsServiceClosure() {
    'use strict';

    function CalcsService($q, ControlsService, VariablesService) {
        var ctrls = ControlsService;
        var vars = VariablesService;
        var service = {};

        service.bodyFontFamily = function() {
            vars['@font-family-base'] = ctrls.bodyFontFamily.preview || ctrls.bodyFontFamily.style;
        };

        service.bodyBg = function() {
            vars['@body-bg'] = ctrls.bodyBg.value;
        };

        service.borderRadius = function() {
            var value = ctrls.borderRadius.value;
            vars['@border-radius-large'] = Math.floor(value * 1.5) + 'px';
            vars['@border-radius-base'] = Math.floor(value * 1) + 'px';
            vars['@border-radius-small'] = Math.floor(value * 0.5) + 'px';
        };

        service.brandPrimary = function() {
            vars['@brand-primary'] = ctrls.brandPrimary.value;
        };

        service.brandSuccess = function() {
            vars['@brand-success'] = ctrls.brandSuccess.value;
        };

        service.brandInfo = function() {
            vars['@brand-info'] = ctrls.brandInfo.value;
        };

        service.brandWarning = function() {
            vars['@brand-warning'] = ctrls.brandWarning.value;
        };

        service.brandDanger = function() {
            vars['@brand-danger'] = ctrls.brandDanger.value;
        };

        service.buttonFontWeight = function() {
            vars['@btn-font-weight'] = ctrls.buttonFontWeight.value;
        };

        service.codeFontFamily = function() {
            vars['@font-family-monospace'] = ctrls.codeFontFamily.preview || ctrls.codeFontFamily.style;
        };

        service.fontSizeBase = function() {
            vars['@font-size-base'] = ctrls.fontSizeBase.value + 'px';
        };

        service.darkestGray = function() {
            var min = parseInt(ctrls.darkestGray.value);
            var max = parseInt(ctrls.lightestGray.value);
            var range = max - min;

            var grayHex = function(lightness) {
                return tinycolor('#000').lighten(range * lightness + min).toHexString();
            };

            vars['@gray-darker'] = grayHex(0);
            vars['@gray-dark'] = grayHex(0.08125);
            vars['@gray'] = grayHex(0.25);
            vars['@gray-light'] = grayHex(0.415);
            vars['@gray-lighter'] = grayHex(1);
        };

        service.lightestGray = function() {
            var min = parseInt(ctrls.darkestGray.value);
            var max = parseInt(ctrls.lightestGray.value);
            var range = max - min;

            var grayHex = function(lightness) {
                return tinycolor('#000').lighten(range * lightness + min).toHexString();
            };

            vars['@gray-darker'] = grayHex(0);
            vars['@gray-dark'] = grayHex(0.08125);
            vars['@gray'] = grayHex(0.25);
            vars['@gray-light'] = grayHex(0.415);
            vars['@gray-lighter'] = grayHex(1);
        };

        service.headingsFontSize = function() {
            vars['@font-size-h1'] = Math.floor(ctrls.headingsFontSize.value * 2.6) + 'px';
            vars['@font-size-h2'] = Math.floor(ctrls.headingsFontSize.value * 2.15) + 'px';
            vars['@font-size-h3'] = Math.floor(ctrls.headingsFontSize.value * 1.7) + 'px';
            vars['@font-size-h4'] = Math.floor(ctrls.headingsFontSize.value * 1.25) + 'px';
            vars['@font-size-h5'] = Math.floor(ctrls.headingsFontSize.value) + 'px';
            vars['@font-size-h6'] = Math.floor(ctrls.headingsFontSize.value * 0.85) + 'px';
        };


        service.headingsFontWeight = function() {
            vars['@headings-font-weight'] = ctrls.headingsFontWeight.value;
        };

        service.headingsFontColor = function() {
            vars['@headings-color'] = ctrls.headingsFontColor.value;
        };

        service.headingsLineHeight = function() {
            vars['@headings-line-height'] = ctrls.headingsLineHeight.value;
        };

        service.headingsFontFamily = function() {
            vars['@headings-font-family'] = ctrls.headingsFontFamily.preview || ctrls.headingsFontFamily.style;
        };

        service.jumbotronBg = function() {
            vars['@jumbotron-bg'] = ctrls.jumbotronBg.value;
        };

        service.jumbotronColor = function() {
            vars['@jumbotron-color'] = ctrls.jumbotronColor.value;
        };

        service.jumbotronFontSize = function() {
            vars['@jumbotron-font-size'] = ctrls.jumbotronFontSize.value + 'px';
        };

        service.jumbotronHeadingColor = function() {
            vars['@jumbotron-heading-color'] = ctrls.jumbotronHeadingColor.value;
        };

        service.jumbotronPadding = function() {
            vars['@jumbotron-padding'] = ctrls.jumbotronPadding.value + 'px';
        };

        service.lineHeight = function() {
            vars['@line-height-base'] = ctrls.lineHeight.value;
        };

        service.navbarHeight = function() {
            vars['@navbar-height'] = ctrls.navbarHeight.value + 'px';
        };

        service.navbarMarginBottom = function() {
            vars['@navbar-margin-bottom'] = ctrls.navbarMarginBottom.value + 'px';
        };

        service.navbarBg = function() {
            vars['@navbar-inverse-bg'] = ctrls.navbarBg.value;
        };

        service.navbarFontColor = function() {
            var color = ctrls.navbarFontColor.value;
            vars['@navbar-inverse-color'] = color;
            vars['@navbar-inverse-link-color'] = color;
        };

        service.padding = function() {
            var value = ctrls.padding.value;
            vars['@padding-base-vertical'] = Math.floor(value * 0.6) + 'px';
            vars['@padding-base-horizontal'] = Math.floor(value * 1.2) + 'px';
            vars['@padding-large-vertical'] = Math.floor(value * 1) + 'px';
            vars['@padding-large-horizontal'] = Math.floor(value * 1.6) + 'px';
            vars['@padding-small-vertical'] = Math.floor(value * 0.5) + 'px';
            vars['@padding-small-horizontal'] = Math.floor(value * 1) + 'px';
            vars['@padding-xs-vertical'] = Math.floor(value * 0.1) + 'px';
            vars['@padding-xs-horizontal'] = Math.floor(value * 0.5) + 'px';
        };

        // call all the functions to init the variables
        service.runAll = function() {
            var deferred = $q.defer();

            angular.forEach(service, function(fn, name) {
                if (name !== 'runAll') {
                    fn();
                }
            });

            deferred.resolve();

            return deferred.promise;
        };

        return service;
    }

    angular.module('bsApp.customizeBootstrap')
        .factory('CalcsService', CalcsService);
}());
