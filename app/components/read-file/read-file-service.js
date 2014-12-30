(function ReadFileServiceClosure() {
    'use strict';

    function ReadFileService($http, $q) {

        var service = {};

        service.fromPath = function(path) {
            var deferred = $q.defer();

            $http.get(path)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        return service;
    }

    angular.module('bsApp.readFile')
        .factory('ReadFileService', ReadFileService);

}());
