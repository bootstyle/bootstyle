(function() {
    'use strict';

    angular.module('bootstyleApp.filters')
        .filter('trustAsHTML', ['$sce', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }]);
}());
