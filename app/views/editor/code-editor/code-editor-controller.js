(function CodeEditorServiceClosure() {
    'use strict';

    function CodeEditorService() {
        var service = {};
        
        service.initCodeEditor = function() {
            service.codeEditor = new CodeMirror(document.getElementById('code-editor'), {
                theme: "ambiance",
                mode: 'htmlmixed',
                lineNumbers: true,
                value: service.preview.html
            });

            service.codeEditor.on('change', function() {
                service.preview.setHtml(service.codeEditor.getValue());
            });
        };
        
        return service;
    }

    angular.module('bsApp.editor.codeEditor')
        .factory('CodeEditorService', CodeEditorService);
}());
