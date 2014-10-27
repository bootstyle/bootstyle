(function() {
    'use strict';

    angular.module('bootstyleApp.services')

        .factory('read_file', ['$http', function($http) {

            return function(file, callback) {
                $http.get(file).
                    success(function(data) {
                        callback(data);
                    });
            };
        }]);

}());
