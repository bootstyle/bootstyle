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
                    elem.addClass('active');
                });

                elem.on('mouseenter', function() {
                    hoverTimer = setTimeout(function() {
                        elem.addClass('active');
                    }, hoverTimeDelay);
                });

                elem.on('mouseleave', function() {
                    clearTimeout(hoverTimer);
                    elem.removeClass('active');
                });
            }
        };
    }).
    directive('bsDropdown', function() {
        return {
            restrict: 'C',
            link: function(scope, elem, attrs) {
                var dropdown_trigger = elem.prev('.bs_dropdown_trigger');

                elem.on('click mouseleave', function() {
                    dropdown_trigger.removeClass('active');
                });
                elem.on('mouseenter', function() {
                    dropdown_trigger.addClass('active');
                });
            }
        };
    });
