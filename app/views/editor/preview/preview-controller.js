(function PreviewModuleClosure() {
    'use strict';

    function PreviewController(ReadFileService) {
        var vm = this;

        ReadFileService.fromPath('views/editor/preview-bootstyle.html')
            .then(function(fileContents) {
                vm.preview.setHtml(fileContents);
                vm.initialized = true;
            }, function(err) {
                console.error(err);
            });

        vm.preview = {
            html: null,
            setHtml: function(html) {
                vm.preview.html = html;
            }
        };
    }

    angular.module('bsApp.editor.preview')
        .controller('PreviewController', PreviewController);
}());
