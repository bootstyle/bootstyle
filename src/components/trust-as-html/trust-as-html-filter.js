(function TrustAsHTMLFilterClosure() {
    'use strict';

    function trustAsHtml($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }

    angular.module('bsApp.trustAsHtml')
        .filter('trustAsHtml', trustAsHtml);
}());
