(function VersionDirectiveClosure() {
    'use strict';

    function version(v) {
        return function VersionLink(scope, elm, attrs) {
            elm.text(v);
        };
    }

    angular.module('bsApp.version')
        .directive('version', version);
}());
