(function ControlsServiceClosure() {
    'use strict';

    function ControlsService() {
        var service = {};

        // initial values are set from the defaults init()

        return service;
    }

    angular.module('bsApp.editor.toolbar')
        .factory('ControlsService', ControlsService);
}());
