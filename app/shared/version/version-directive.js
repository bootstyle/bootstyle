(function BootstyleVersionDirectiveClosure() {
    'use strict';

    function BootstyleVersionDirective(version) {
        return function BootstyleVersionLink(scope, elm, attrs) {
            elm.text(version);
        };
    }

    angular.module('bsApp.version')
        .directive('bootstyleVersion', BootstyleVersionDirective);
}());
