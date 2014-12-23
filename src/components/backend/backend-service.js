(function BackendServiceClosure() {
    'use strict';

    function BackendService($window, $kinvey) {
        var service = {};

        service.init = function(debug) {
            $window.KINVEY_DEBUG = debug;

            return $kinvey.init({
                appKey: 'kid_-ycgc96yr',
                appSecret: 'e2cad66944de446785405ffb15cb4f68',
                debug: debug
            })
                .then(function(activeUser) {
                    console.log(activeUser);
                }, function(error) {
                    console.log(error);
                });
        };

        service.save = function(collection, data) {
            return $kinvey.DataStore.save(collection, data);
        };

        service.loadTheme = function(name) {
            var query = new $kinvey.query();
            query.equalTo('name', name);

            return $kinvey.DataStore.find('themes', query);
        };

        service.login = function(user) {
            console.log($kinvey);
            user = user ? user : { username: 'levithomason', password: 'password'};

            return $kinvey.User.login(user)
                .then(function(activeUser) {
                    console.log(activeUser);
                }, function(error) {
                    console.error(error);
                });
        };

        return service;
    }

    angular.module('bsApp.backend')
        .factory('BackendService', BackendService);
}());
