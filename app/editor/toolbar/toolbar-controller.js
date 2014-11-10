(function() {
    'use strict';

    function AppController($scope, $compile, $timeout, BackendFactory, read_file, RECOMPILE_LESS_DELAY, LESS, DefaultsFactory, ControlsFactory, CalcsFactory, VariablesFactory, FontsFactory) {

        $scope.initialized = false;
        $scope.is_less_compiling = false;

        $scope.init = function() {
            $scope.ctrls = ControlsFactory;
            $scope.defaults = DefaultsFactory;
            $scope.controls = ControlsFactory;
            $scope.calcs = CalcsFactory;
            $scope.variables = VariablesFactory;
            $scope.fonts = FontsFactory;
            
            $scope.defaults.apply();
            $scope.calcs.runAll();


            /*
             Spectrum
             */
            $scope.spectrum_config = {
                clickoutFiresChange: true,
                containerClassName: 'sp_bootstyle',
                replacerClassName: 'bs_badge bs_badge_swatch',
                preferredFormat: "hex",
                showAlpha: true,
                showButtons: false,
                showInitial: true,
                showInput: false,
                showPalette: false,
                showSelectionPalette: true
            };

            /*
             Init settings which don't require a LESS recompile here
             */
            $scope.settings = {
                show_toolbar: true,
                html_mode: false
            };


            /*
             Init stylesheets
             */
            $scope.stylesheets = {
                base: [
                    {name: 'Bootstrap Theme', path: 'less/bootstrap/theme.less'}
                ],
                button_styles: [
                    {name: 'Stripe', path: 'less/buttons_stripe.less'}
                ]
            };


            read_file('partials/app/_preview_bootstyle.html', function(file_contents) {
                $scope.preview.set_html(file_contents);
                $scope.initialized = true;
            });
        };

        ////////////////////////////  END INIT  ////////////////////////////

        /*
         Code Editor
         */
        $scope.init_code_editor = function() {
            $scope.code_editor = new CodeMirror(document.getElementById('code_editor'), {
                theme: "ambiance",
                mode: 'htmlmixed',
                lineNumbers: true,
                value: $scope.preview.html
            });

            $scope.code_editor.on('change', function() {
                $scope.preview.set_html($scope.code_editor.getValue());
            });
        };


        /*
         Toolbar
         */
        $scope.toolbar = {
            is_active: true,
            toggle: function() {
                $scope.toolbar.is_active = !$scope.toolbar.is_active;
                $scope.settings.html_mode = false;
            }
        };

        $scope.swap_body_heading_typography = function() {
            var body_control,
                body_style,
                headings_control,
                headings_style;

            body_control = $scope.ctrls.body_font_family.control;
            body_style = $scope.ctrls.body_font_family.style;
            headings_control = $scope.ctrls.headings_font_family.control;
            headings_style = $scope.ctrls.headings_font_family.style;

            $scope.ctrls.body_font_family.control = headings_control;
            $scope.ctrls.body_font_family.style = headings_style;
            $scope.ctrls.headings_font_family.control = body_control;
            $scope.ctrls.headings_font_family.style = body_style;
        };


        /*
         Preview
         */
        $scope.preview = {
            html: null,
            set_html: function(html) {
                $scope.preview.html = html;
            }
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
            read_file('partials/app/_download_bootstyle.html', function(contents) {
                var compiled_template = $compile(contents)($scope)[0];

                $timeout(function() {
                    var blob = new Blob([compiled_template.textContent], {type: "text/plain;charset=utf-8"});
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

            BackendFactory.save('themes', {
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

            BackendFactory.loadTheme('test')
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
            BackendFactory.login()
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
                    CalcsFactory[key].call();
                }
            });
            $scope.last_LESS_edit = Date.now();
            $scope.timerRecompileLESS();
        }, true);


        // Call recompileLESS after a certain amount of inactivity
        $scope.timerRecompileLESS = function() {
            window.timerRecompileLESS = window.timerRecompileLESS || setInterval(function() {
                if (Date.now() - $scope.last_LESS_edit >= 120) {
                    window.clearInterval(window.timerRecompileLESS);
                    window.timerRecompileLESS = null;
                    $scope.recompileLESS();
                }

            }, 5);
        };

        // Gather stylesheets and recompile LESS
        $scope.recompileLESS = function() {
            $scope.is_less_compiling = true;

            LESS.registerStyleSheets()
                .then(function(data) {
                    return LESS.modifyVars($scope.vars);
                }, function(e) {
                    throw e;
                })
                .then(function(data) {
                    $scope.is_less_compiling = false;
                }, function(e) {
                    throw e;
                });
        };

    }

    angular.module('bsApp.controllers')
        .controller('AppController', AppController);
}());
