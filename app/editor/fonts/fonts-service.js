(function FontsServiceClosure() {
    'use strict';

    function FontsService() {
        var fonts = {};

        // serif
        fonts.serif = {};
        fonts.serif.georgia = {
            name: 'Georgia',
            style: 'Georgia, "Times New Roman", Times, serif'
        };
        fonts.serif.palatinoLinetype = {
            name: 'Palatino Linetype',
            style: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
        };
        fonts.serif.timesNewRoman = {
            name: 'Times New Roman',
            style: '"Times New Roman", Times, serif'
        };

        // sans serif
        fonts.sansSerif = {};
        fonts.sansSerif.arial = {
            name: 'Arial',
            style: 'Arial, Helvetica, sans-serif'
        };
        fonts.sansSerif.arialBlack = {
            name: 'Arial Black',
            style: '"Arial Black", Gadget, sans-serif'
        };
        fonts.sansSerif.helveticaNeue = {
            name: 'Helvetica Neue',
            style: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        };
        fonts.sansSerif.impact = {
            name: 'Impact',
            style: 'Impact, Charcoal, sans-serif'
        };
        fonts.sansSerif.lucidaSansUnicode = {
            name: 'Lucida Sans Unicode',
            style: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
        };
        fonts.sansSerif.tahoma = {
            name: 'Tahoma',
            style: 'Tahoma, Geneva, sans-serif'
        };
        fonts.sansSerif.trebuchetMs = {
            name: 'Trebuchet MS',
            style: '"Trebuchet MS", Helvetica, sans-serif'
        };
        fonts.sansSerif.verdana = {
            name: 'Verdana',
            style: 'Verdana, Geneva, sans-serif'
        };

        // monospace
        fonts.monospace = {};
        fonts.monospace.courierNew = {
            name: 'Courier New',
            style: '"Courier New", Courier, monospace'
        };
        fonts.monospace.lucidaConsole = {
            name: 'Lucida Console',
            style: '"Lucida Console", Monaco, monospace'
        };
        fonts.monospace.menlo = {
            name: 'Menlo',
            style: 'Menlo, Monaco, Consolas, "Courier New", monospace;'
        };

        return fonts;
    }

    angular.module('bsApp.fonts')
        .factory('FontsService', FontsService);

}());
