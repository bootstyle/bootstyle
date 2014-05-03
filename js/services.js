'use strict';

/*
 Services
 */

angular.module('bootstyleApp.services', []).
    value('version', 'v0.1').

    factory('read_file', ['$http', function($http) {

        return function(file, callback) {
            $http.get(file).
                success(function(data) {
                    callback(data);
                });
        };
    }]).

    filter('trustAsHTML', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);
