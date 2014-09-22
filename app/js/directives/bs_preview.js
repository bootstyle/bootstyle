(function () {
    'use strict';

    require('./module').
        directive('bsPreview', ['$compile', function($compile) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    html: '@bsHtml'
                },
                template: '<div class="bs_preview"></div>',
                link: function(scope, elem, attrs) {
                    attrs.$observe('bsHtml', function(html) {
                        elem.html(html);
                        $compile(elem.contents())(scope);
                    });
                }
            };
        }]);
}());
