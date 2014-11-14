(function ControlsServiceClosure() {
    'use strict';

    function ControlsService() {
        var ctrls = {};

        // initial values are set from the defaults init()

        return ctrls;
    }

    angular.module('bsApp.services')
        .factory('ControlsService', ControlsService);
}());
