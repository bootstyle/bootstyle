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
require('./controllers/module');
require('./controllers/main');

require('./directives/module');
require('./directives/range_control');
require('./directives/radio_control');
require('./directives/toggle_toolbar');
require('./directives/toolbar');
require('./directives/version');

require('./filters/module');
require('./filters/capitalize');
require('./filters/trustAsHTML');

require('./services/module');
require('./services/auto_overlay_color');
require('./services/constants');
require('./services/read_file');
require('./services/scheme');
require('./services/settings');
require('./services/version');

module.exports = angular.module('bootstyleApp', [
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
