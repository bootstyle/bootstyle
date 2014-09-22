(function () {
    'use strict';

    require('./module').
        directive('bsTabs', function() {
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                controller: function($scope, $element) {
                    var tabs = $scope.tabs = [];

                    $scope.select = function(tab) {
                        angular.forEach(tabs, function(tab) {
                            tab.selected = false;
                        });
                        tab.selected = true;
                    };

                    this.addTab = function(tab) {
                        console.log('adding tab');
                        if (tabs.length === 0) {
                            $scope.select(tab);
                        }
                        tabs.push(tab);
                        console.log(tabs);
                    };
                },
                template: '<ul class="bs_tabs" ng-transclude></ul>',
                replace: true
            };
        }).

        directive('bsTab', function() {
            return {
                require: '^bsTabs',
                restrict: 'E',
                transclude: true,
                scope: {},
                link: function(scope, element, attrs, bsTabsCtrl) {
                    bsTabsCtrl.addTab(scope);
                },
                controller: function($scope, $element) {
                    this.select = function() {
                        console.log($element);
                    };
                },
                template: '<li class="bs_tab" ng-class="{active: tab.selected}" ng-click="select()" ng-transclude></li>',
                replace: true
            };
        });
}());
