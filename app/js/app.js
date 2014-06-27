'use strict';

// angular dependencies
require('angular');
require('angular_sanitize');
require('angular_spectrum_colorpicker');

// vendor dependencies
require('bootstrap');
require('codemirror');
require('codemirror_mode_css');
require('codemirror_mode_htmlmixed');
require('codemirror_mode_javascript');
require('codemirror_mode_xml');
require('FileSaver');
require('jquery');
require('less');
require('modernizr');
require('spectrum');
//require('tinycolor');
require('tinycolor_v1api');

// bootstyle dependencies
require('./controllers');
require('./directives');
require('./filters');
require('./services');

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
