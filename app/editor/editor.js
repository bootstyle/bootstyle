(function EditorModuleClosure() {
    'use strict';

    function EditorRoutes($routeProvider) {
        $routeProvider
            .when('/editor', {
                controller: 'EditorController',
                controllerAs: 'editor',
                templateUrl: 'editor/editor.html'
            });
    }

    angular.module('bsApp.editor', [
        // Vendor Modules
        'angularSpectrumColorpicker',

        // Bootstyle Modules
        'bsApp.editor.codeEditor',
        'bsApp.editor.customizeBootstrap',
        'bsApp.editor.fonts',
        'bsApp.editor.less',
        'bsApp.editor.preview',
        'bsApp.editor.toolbar'
    ])
        .config(EditorRoutes);
}());
