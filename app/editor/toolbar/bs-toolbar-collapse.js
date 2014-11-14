(function() {
    'use strict';

    angular.module('bsApp.directives')
        .directive('bsToolbarTitle', function() {
            return {
                restrict: 'C',
                link: function(scope, elem, attrs) {
                    var parent = elem.parent();

                    elem.on('click', function() {
                        parent.toggleClass('bs_toolbar_collapsed');
                    });
                }
            };
        });
}());
