(function BackendFactoryModule() {
    'use strict';

    function BackendFactory($window, $kinvey) {
        var backendFactory = {};

        backendFactory.init = function(debug) {
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
        
        backendFactory.save = function(collection, data) {
            return $kinvey.DataStore.save(collection, data);
        };

        backendFactory.loadTheme = function(name) {
            var query = new $kinvey.query();
            query.equalTo('name', name);

            return $kinvey.DataStore.find('themes', query);
        };

        backendFactory.login = function(user) {
            console.log($kinvey);
            user = user ? user : { username: 'levithomason', password: 'password'};

            return $kinvey.User.login(user)
                .then(function(activeUser) {
                    console.log(activeUser);
                }, function(error) {
                    console.error(error);
                });
        };

        return backendFactory;
    }

    angular.module('bootstyleApp.services')
        .factory('BackendFactory', BackendFactory);
}());
