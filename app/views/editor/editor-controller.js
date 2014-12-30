(function EditorModuleClosure() {
    'use strict';

    function EditorRoutes($routeProvider) {
        $routeProvider
            .when('/editor', {
                controller: 'EditorController',
                controllerAs: 'editorCtrl',
                templateUrl: 'views/editor/editor.html'
            });
    }

    function EditorController() {
        var vm = this;

        vm.initialized = false;

        vm.init = function() {
            vm.initialized = true;

            vm.settings = {
                showToolbar: true,
                isHtmlMode: false
            };
        };

        vm.init();
    }


    angular.module('bsApp.editor')
        .config(EditorRoutes)
        .controller('EditorController', EditorController);
}());
