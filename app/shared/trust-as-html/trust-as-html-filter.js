(function() {
    'use strict';

    function TrustAsHTMLFilter($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }

    angular.module('bsApp.trustAsHTML')
        .filter('trustAsHTML', TrustAsHTMLFilter);
}());
