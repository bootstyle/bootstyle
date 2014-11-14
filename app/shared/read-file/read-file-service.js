(function readFileServiceClosure() {
    'use strict';

    function readFileService($http) {

        return function(file, callback) {
            $http.get(file).
                success(function(data) {
                    callback(data);
                });
        };
    }

    angular.module('bsApp.readFile')
        .factory('readFileService', readFileService);

}());
