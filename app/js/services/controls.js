(function ControlsFactoryModule() {
    'use strict';

    function ControlsFactory() {
        var ctrls = {};

        // initial values are set from the defaults init()

        return ctrls;
    }

    angular.module('bootstyleApp.services')
        .factory('ControlsFactory', ControlsFactory);
}());
