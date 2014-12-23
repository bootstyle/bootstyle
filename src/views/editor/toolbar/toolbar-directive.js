(function ToolbarDirectiveClosure() {
    'use strict';

    function bsToolbar() {
        return {
            restrict: 'E',
            replace: true,
            scope: false,
            templateUrl: 'partials/app/_toolbar.html',
            link: function(scope, elem, attrs) {
                // todo: the toggle stuff should be in here

            },
            controller: function($scope) {

            }
        };
    }
    
    angular.module('bsApp.editor.toolbar')
        .directive('bsToolbar', bsToolbar);
}());
