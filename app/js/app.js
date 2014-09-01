'use strict';

// angular dependencies
require('angular');
require('angular_route');
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
require('spectrum');
//require('tinycolor');
require('tinycolor_v1api');

// bootstyle dependencies
require('./controllers/module');
require('./controllers/app_controller');
require('./controllers/home_controller');

require('./directives/module');
require('./directives/dropdowns');
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

var bootstyleApp = angular.module('bootstyleApp', [
    // Angular Modules
    'ngSanitize',
    'ngRoute',

    // Bootstyle Modules
    'bootstyleApp.controllers',
    'bootstyleApp.directives',
    'bootstyleApp.filters',
    'bootstyleApp.services',

    // Vendor Modules
    'angularSpectrumColorpicker'
]);

bootstyleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            controller: 'HomeController',
            templateUrl: 'partials/_home.html'
        }).

        when('/app', {
            controller: 'AppController',
            templateUrl: 'partials/_app.html'
        }).

        otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

}]);

module.exports = bootstyleApp;
