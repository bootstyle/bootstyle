(function FontsServiceClosure() {
    'use strict';

    function FontsService() {
        var service = {};

        // serif
        service.serif = {};
        service.serif.georgia = {
            name: 'Georgia',
            style: 'Georgia, "Times New Roman", Times, serif'
        };
        service.serif.palatinoLinetype = {
            name: 'Palatino Linetype',
            style: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
        };
        service.serif.timesNewRoman = {
            name: 'Times New Roman',
            style: '"Times New Roman", Times, serif'
        };

        // sans serif
        service.sansSerif = {};
        service.sansSerif.arial = {
            name: 'Arial',
            style: 'Arial, Helvetica, sans-serif'
        };
        service.sansSerif.arialBlack = {
            name: 'Arial Black',
            style: '"Arial Black", Gadget, sans-serif'
        };
        service.sansSerif.helveticaNeue = {
            name: 'Helvetica Neue',
            style: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        };
        service.sansSerif.impact = {
            name: 'Impact',
            style: 'Impact, Charcoal, sans-serif'
        };
        service.sansSerif.lucidaSansUnicode = {
            name: 'Lucida Sans Unicode',
            style: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
        };
        service.sansSerif.tahoma = {
            name: 'Tahoma',
            style: 'Tahoma, Geneva, sans-serif'
        };
        service.sansSerif.trebuchetMs = {
            name: 'Trebuchet MS',
            style: '"Trebuchet MS", Helvetica, sans-serif'
        };
        service.sansSerif.verdana = {
            name: 'Verdana',
            style: 'Verdana, Geneva, sans-serif'
        };

        // monospace
        service.monospace = {};
        service.monospace.courierNew = {
            name: 'Courier New',
            style: '"Courier New", Courier, monospace'
        };
        service.monospace.lucidaConsole = {
            name: 'Lucida Console',
            style: '"Lucida Console", Monaco, monospace'
        };
        service.monospace.menlo = {
            name: 'Menlo',
            style: 'Menlo, Monaco, Consolas, "Courier New", monospace;'
        };

        return service;
    }

    angular.module('bsApp.fonts')
        .factory('FontsService', FontsService);

}());
