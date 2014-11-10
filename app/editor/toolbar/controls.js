(function ControlsFactoryModule() {
    'use strict';

    function ControlsFactory() {
        var ctrls = {};

        // initial values are set from the defaults init()

        return ctrls;
    }

    angular.module('bsApp.services')
        .factory('ControlsFactory', ControlsFactory);
}());
