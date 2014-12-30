(function ToolbarControllerClosure() {
    'use strict';

    function ToolbarController($scope, $compile, $timeout, BackendService, readFile, RECOMPILE_LESS_DELAY, LESS, DefaultsService, ControlsService, CalcsService, VariablesService, FontsService) {

        $scope.initialized = false;
        $scope.isLessCompiling = false;

        $scope.init = function() {
            $scope.ctrls = ControlsService;
            $scope.defaults = DefaultsService;
            $scope.controls = ControlsService;
            $scope.calcs = CalcsService;
            $scope.variables = VariablesService;
            $scope.fonts = FontsService;

            $scope.defaults.apply();
            $scope.calcs.runAll();


            /*
             Spectrum
             */
            $scope.spectrumConfig = {
                clickoutFiresChange: true,
                containerClassName: 'spBootstyle',
                replacerClassName: 'bsBadge bsBadgeSwatch',
                preferredFormat: "hex",
                showAlpha: true,
                showButtons: false,
                showInitial: true,
                showInput: false,
                showPalette: false,
                showSelectionPalette: true
            };

            
            /*
             Init stylesheets
             */
            $scope.stylesheets = {
                base: [
                    {name: 'Bootstrap Theme', path: 'less/bootstrap/theme.less'}
                ],
                buttonStyles: [
                    {name: 'Stripe', path: 'less/buttons-stripe.less'}
                ]
            };
        };

        ////////////////////////////  END INIT  ////////////////////////////

        /*
         Toolbar
         */
        $scope.toolbar = {
            isActive: true,
            toggle: function() {
                $scope.toolbar.isActive = !$scope.toolbar.isActive;
                $scope.settings.htmlMode = false;
            }
        };

        $scope.swapBodyHeadingTypography = function() {
            var bodyControl,
                bodyStyle,
                headingsControl,
                headingsStyle;

            bodyControl = $scope.ctrls.bodyFontFamily.control;
            bodyStyle = $scope.ctrls.bodyFontFamily.style;
            headingsControl = $scope.ctrls.headingsFontFamily.control;
            headingsStyle = $scope.ctrls.headingsFontFamily.style;

            $scope.ctrls.bodyFontFamily.control = headingsControl;
            $scope.ctrls.bodyFontFamily.style = headingsStyle;
            $scope.ctrls.headingsFontFamily.control = bodyControl;
            $scope.ctrls.headingsFontFamily.style = bodyStyle;
        };


        /*
         Nav Methods
         */
        $scope.reset = function() {
            for (var c in $scope.ctrls) {
                if ($scope.ctrls.hasOwnProperty(c)) {
                    if ($scope.ctrls[c].hasOwnProperty('control') && $scope.ctrls[c].hasOwnProperty('default')) {
                        $scope.ctrls[c].control = $scope.ctrls[c].default;
                    }
                }
            }
        };

        $scope.download = function() {
            readFile('partials/app/Download-bootstyle.html', function(contents) {
                var compiledTemplate = $compile(contents)($scope)[0];

                $timeout(function() {
                    var blob = new Blob([compiledTemplate.textContent], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "bootstyle.less");
                });
            });
        };


        $scope.save = function() {
            console.log('saving');

            var controls = [];
            angular.forEach($scope.ctrls, function(ctrl) {
                var saveCtrl = ctrl;
                saveCtrl.calc = null;
                console.log(saveCtrl);
                controls.push(saveCtrl);
            });

            BackendService.save('themes', {
                name: 'test',
                vars: $scope.vars,
                controls: controls
            })
                .then(function(result) {
                    console.log(result);
                }, function(error) {
                    console.error(error);
                });
        };

        $scope.load = function() {
            console.log('loading');

            BackendService.loadTheme('test')
                .then(function(theme) {
                    console.log(theme);
                    $scope.vars = theme.vars;

                    angular.forEach(theme.controls, function(ctrl) {
                        console.log(ctrl);
                    });

                }, function(error) {
                    console.error(error);
                });
        };

        $scope.login = function() {
            console.log('logging in');
            BackendService.login()
                .then(function(result) {
                    console.log(result);
                }, function(error) {
                    console.error(error);
                });
        };

        /*
         LESS Compiling
         */

        // Watch for changes
        $scope.$watchCollection('[ctrls]', function(newCtrls, oldCtrls) {
            // call the calc for changed values
            angular.forEach(newCtrls, function(value, key) {
                if (newCtrls[key] !== oldCtrls[key]) {
                    CalcsService[key].call();
                }
            });
            $scope.lastLESSEdit = Date.now();
            $scope.timerRecompileLESS();
        }, true);


        // Call recompileLESS after a certain amount of inactivity
        $scope.timerRecompileLESS = function() {
            window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
                if (Date.now() - $scope.lastLESSEdit >= 120) {
                    window.clearInterval(window.timerRecompileLESS);
                    window.timerRecompileLESS = null;
                    $scope.recompileLESS();
                }

            }, 5);
        };

        // Gather stylesheets and recompile LESS
        $scope.recompileLESS = function() {
            $scope.isLessCompiling = true;

            LESS.registerStyleSheets()
                .then(function(data) {
                    return LESS.modifyVars($scope.vars);
                }, function(e) {
                    throw e;
                })
                .then(function(data) {
                    $scope.isLessCompiling = false;
                }, function(e) {
                    throw e;
                });
        };

    }

    angular.module('bsApp.editor.toolbar')
        .controller('ToolbarController', ToolbarController);
}());
