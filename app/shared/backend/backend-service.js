(function bsBackendServiceClosure() {
    'use strict';

    function bsBackendService($window, $kinvey) {
        var BF = {};

        BF.init = function(debug) {
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

        BF.save = function(collection, data) {
            return $kinvey.DataStore.save(collection, data);
        };

        BF.loadTheme = function(name) {
            var query = new $kinvey.query();
            query.equalTo('name', name);

            return $kinvey.DataStore.find('themes', query);
        };

        BF.login = function(user) {
            console.log($kinvey);
            user = user ? user : { username: 'levithomason', password: 'password'};

            return $kinvey.User.login(user)
                .then(function(activeUser) {
                    console.log(activeUser);
                }, function(error) {
                    console.error(error);
                });
        };

        return BF;
    }

    angular.module('bsApp.bsBackend')
        .factory('bsBackendService', bsBackendService);
}());
