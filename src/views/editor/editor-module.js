(function EditorModuleClosure() {
    'use strict';

    angular.module('bsApp.editor', [
        // Vendor Modules
        'angularSpectrumColorpicker',

        // Bootstyle Modules
        'bsApp.customizeBootstrap',

        'bsApp.editor.codeEditor',
        'bsApp.fonts',
        'bsApp.less',
//        'bsApp.editor.preview',
        'bsApp.editor.toolbar'
    ]);
}());
