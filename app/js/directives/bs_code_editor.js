(function () {
    'use strict';

    require('./module').
        directive('bsCodeEditor', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    model: '=bsModel'
                },
                template: '<div class="bs_code_editor CodeMirror-scroll"></div>',
                link: function(scope, elem, attrs) {
                    var template = elem[0];

                    var code_editor = new CodeMirror(template, {
                        theme: "ambiance",
                        mode: 'htmlmixed',
                        lineNumbers: true,
                        value: scope.model
                    });

                    code_editor.on('change', function() {
                        scope.model = code_editor.getValue();
                    });
                }
            };
        });
}());
