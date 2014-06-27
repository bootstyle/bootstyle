'use strict';

//
// This is using the pahts from browserify.shims, just for testing the paths
//require("./bower_components/jquery/dist/jquery.min.js");
//
//require("./bower_components/angular/angular.min.js");
//require("./bower_components/angular-sanitize/angular-sanitize.min.js");
//require("./bower_components/angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min.js");
//require("./bower_components/bootstrap/dist/js/bootstrap.min.js");
//
//require("./bower_components/codemirror/lib/codemirror.js");
//require("./bower_components/codemirror/mode/css/css.js");
//require("./bower_components/codemirror/mode/htmlmixed/htmlmixed.js");
//require("./bower_components/codemirror/mode/javascript/javascript.js");
//require("./bower_components/codemirror/mode/xml/xml.js");
//
//require("./bower_components/FileSaver/FileSaver.js");
//
//require("./bower_components/less.js/dist/less-1.7.3.min.js");
//
//require("./bower_components/modernizr/modernizr.js");
//
//require("./bower_components/spectrum/spectrum.js");
//require("./bower_components/tinycolor/tinycolor.js");


// angular dependencies
require('jquery');
//require('angular');
//require('angular_sanitize');
//require('angular_spectrum_colorpicker');
//
//// vendor dependencies
//require('bootstrap');
//require('codemirror');
//require('codemirror_mode_css');
//require('codemirror_mode_htmlmixed');
//require('codemirror_mode_javascript');
//require('codemirror_mode_xml');
//require('FileSaver');
//require('jquery');
//require('less');
//require('modernizr');
//require('spectrum');
//require('tinycolor');

// bootstyle dependencies
require('./src/controllers');
require('./src/directives');
require('./src/filters');
require('./src/services');

angular.module('bootstyleApp', [
    // Bootstyle Modules
    'bootstyleApp.controllers',
    'bootstyleApp.directives',
    'bootstyleApp.filters',
    'bootstyleApp.services',

    // Angular Modules
    'ngSanitize',

    // Vendor Modules
    'angularSpectrumColorpicker'
]);
