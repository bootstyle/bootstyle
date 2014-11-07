(function CalcsFactoryModule() {
    'use strict';

    function CalcsFactory($q, ControlsFactory, VariablesFactory) {
        var ctrls = ControlsFactory;
        var vars = VariablesFactory;
        var calcs = {};

        calcs.bodyFontFamily = function() {
            vars['@font-family-base'] = ctrls.bodyFontFamily.preview || ctrls.bodyFontFamily.style;
        };

        calcs.bodyBg = function() {
            vars['@body-bg'] = ctrls.bodyBg.value;
        };

        calcs.borderRadius = function() {
            var value = ctrls.borderRadius.value;
            vars['@border-radius-large'] = Math.floor(value * 1.5) + 'px';
            vars['@border-radius-base'] = Math.floor(value * 1) + 'px';
            vars['@border-radius-small'] = Math.floor(value * 0.5) + 'px';
        };

        calcs.brandPrimary = function() {
            vars['@brand-primary'] = ctrls.brandPrimary.value;
        };

        calcs.brandSuccess = function() {
            vars['@brand-success'] = ctrls.brandSuccess.value;
        };

        calcs.brandInfo = function() {
            vars['@brand-info'] = ctrls.brandInfo.value;
        };

        calcs.brandWarning = function() {
            vars['@brand-warning'] = ctrls.brandWarning.value;
        };

        calcs.brandDanger = function() {
            vars['@brand-danger'] = ctrls.brandDanger.value;
        };

        calcs.buttonFontWeight = function() {
            vars['@btn-font-weight'] = ctrls.buttonFontWeight.value;
        };

        calcs.codeFontFamily = function() {
            vars['@font-family-monospace'] = ctrls.codeFontFamily.preview || ctrls.codeFontFamily.style;
        };

        calcs.fontSizeBase = function() {
            vars['@font-size-base'] = ctrls.fontSizeBase.value + 'px';
        };

        calcs.darkestGray = function() {
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

        calcs.lightestGray = function() {
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

        calcs.headingsFontSize = function() {
            vars['@font-size-h1'] = Math.floor(ctrls.headingsFontSize.value * 2.6) + 'px';
            vars['@font-size-h2'] = Math.floor(ctrls.headingsFontSize.value * 2.15) + 'px';
            vars['@font-size-h3'] = Math.floor(ctrls.headingsFontSize.value * 1.7) + 'px';
            vars['@font-size-h4'] = Math.floor(ctrls.headingsFontSize.value * 1.25) + 'px';
            vars['@font-size-h5'] = Math.floor(ctrls.headingsFontSize.value) + 'px';
            vars['@font-size-h6'] = Math.floor(ctrls.headingsFontSize.value * 0.85) + 'px';
        };


        calcs.headingsFontWeight = function() {
            vars['@headings-font-weight'] = ctrls.headingsFontWeight.value;
        };

        calcs.headingsFontColor = function() {
            vars['@headings-color'] = ctrls.headingsFontColor.value;
        };

        calcs.headingsLineHeight = function() {
            vars['@headings-line-height'] = ctrls.headingsLineHeight.value;
        };

        calcs.headingsFontFamily = function() {
            vars['@headings-font-family'] = ctrls.headingsFontFamily.preview || ctrls.headingsFontFamily.style;
        };

        calcs.jumbotronBg = function() {
            vars['@jumbotron-bg'] = ctrls.jumbotronBg.value;
        };

        calcs.jumbotronColor = function() {
            vars['@jumbotron-color'] = ctrls.jumbotronColor.value;
        };

        calcs.jumbotronFontSize = function() {
            vars['@jumbotron-font-size'] = ctrls.jumbotronFontSize.value + 'px';
        };

        calcs.jumbotronHeadingColor = function() {
            vars['@jumbotron-heading-color'] = ctrls.jumbotronHeadingColor.value;
        };

        calcs.jumbotronPadding = function() {
            vars['@jumbotron-padding'] = ctrls.jumbotronPadding.value + 'px';
        };

        calcs.lineHeight = function() {
            vars['@line-height-base'] = ctrls.lineHeight.value;
        };

        calcs.navbarHeight = function() {
            vars['@navbar-height'] = ctrls.navbarHeight.value + 'px';
        };

        calcs.navbarMarginBottom = function() {
            vars['@navbar-margin-bottom'] = ctrls.navbarMarginBottom.value + 'px';
        };

        calcs.navbarBg = function() {
            vars['@navbar-inverse-bg'] = ctrls.navbarBg.value;
        };

        calcs.navbarFontColor = function() {
            var color = ctrls.navbarFontColor.value;
            vars['@navbar-inverse-color'] = color;
            vars['@navbar-inverse-link-color'] = color;
        };

        calcs.padding = function() {
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
        calcs.runAll = function() {
            var deferred = $q.defer();

            angular.forEach(calcs, function(fn, name) {
                if (name !== 'runAll') {
                    fn();
                }
            });

            deferred.resolve();

            return deferred.promise;
        };

        return calcs;
    }

    angular.module('bootstyleApp.services')
        .factory('CalcsFactory', CalcsFactory);
}());
