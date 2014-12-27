(function LessServiceClosure() {
    'use strict';

    function LessService($q, $window) {
        var service = {};

        service.modifyVars = function(vars) {
            var deferred = new $q.defer();

            $window.less.modifyVars(vars)
                .then(function(data) {
                    deferred.resolve(data);
                }, function(e) {
                    deferred.reject(e);
                });

            return deferred.promise;
        };

        service.registerStyleSheets = function() {
            var deferred = new $q.defer();

            $window.less.registerStylesheets()
                .then(function(data) {
                    deferred.resolve(data);
                }, function(e) {
                    deferred.reject(e);
                });

            return deferred.promise;
        };

        return service;
    }

    angular.module('bsApp.less')
        .factory('LessService', LessService);

}());
