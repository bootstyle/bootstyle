(function () {
    'use strict';

    require('./module').
        directive('a', function() {

            return {
                restrict: 'E',
                link: function(scope, elem, attrs) {
                    elem.on('click', function(e) {
                        if (elem.parents('.bs_preview').length > 0) {
                            e.preventDefault();
                        }
                    });
                }
            };
        });
}());
