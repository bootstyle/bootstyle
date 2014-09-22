(function () {
    'use strict';

    require('./module').
        filter('trustAsHTML', ['$sce', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }]);
}());
