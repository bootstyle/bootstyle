(function ReadFileServiceClosure() {
    'use strict';

    function ReadFileService($http) {

        return function(file, callback) {
            $http.get(file)
                .success(function(data) {
                    callback(data);
                });
        };
    }

    angular.module('bsApp.readFile')
        .factory('ReadFileService', ReadFileService);

}());
