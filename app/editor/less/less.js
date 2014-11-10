(function() {
    'use strict';

    angular.module('bsApp.services')

        .factory('LESS', ['$q', function($q) {
            var LESS = {};

            LESS.modifyVars = function(vars) {
                var deferred = new $q.defer();

                window.less.modifyVars(vars)
                    .then(function(data) {
                        deferred.resolve(data);
                    }, function(e) {
                        deferred.reject(e);
                    });

                return deferred.promise;
            };

            LESS.registerStyleSheets = function() {
                var deferred = new $q.defer();

                window.less.registerStylesheets()
                    .then(function(data) {
                        deferred.resolve(data);
                    }, function(e) {
                        deferred.reject(e);
                    });

                return deferred.promise;
            };

            return LESS;
        }]);

}());
