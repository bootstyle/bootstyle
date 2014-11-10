(function() {
    'use strict';

    angular.module('bsApp.filters')
        .filter('trustAsHTML', ['$sce', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }]);
}());
