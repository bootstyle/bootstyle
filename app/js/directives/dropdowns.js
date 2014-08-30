'use strict';

require('./module').
    directive('bsDropdownTrigger', function() {
        return {
            restrict: 'C',
            link: function(scope, elem, attrs) {
                var menu = elem.next();
                var hoverTimer;
                var hoverTimeDelay = 200;

                elem.on('click', function() {
                    menu.show();
                });

                elem.on('mouseenter', function() {
                    hoverTimer = setTimeout(function() {
                        menu.show();
                    }, hoverTimeDelay);
                });

                elem.on('mouseleave', function() {
                    clearTimeout(hoverTimer);
                    menu.hide();
                });
            }
        };
    }).
    directive('bsDropdown', function() {
        return {
            restrict: 'C',
            link: function(scope, elem, attrs) {
                elem.hide();
                elem.on('click mouseleave', function() {
                    elem.hide();
                });
                elem.on('mouseenter', function() {
                    elem.show();
                });
            }
        };
    });
