module.exports = {
    "./bower_components/jquery/dist/jquery.min.js": {
        "exports": "global:$"
    },
    "./bower_components/bootstrap/dist/js/bootstrap.min.js": {
        "exports": "global:bootstrap",
        "depends": { "./bower_components/jquery/dist/jquery.min.js": "$" }
    },
    "./bower_components/angular/angular.min.js": {
        "exports": "global:angular",
        "depends": { "./bower_components/jquery/dist/jquery.min.js": "$" }
    },
    "./bower_components/angular-sanitize/angular-sanitize.min.js": {
        "exports": "global:angular_sanitize",
        "depends": { "./bower_components/angular/angular.min.js": "angular" }
    },
    "./bower_components/angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min.js": {
        "exports": "global:angular_spectrum_colorpicker",
        "depends": { "./bower_components/angular/angular.min.js": "angular" }
    },
    "./bower_components/codemirror/lib/codemirror.js": {
        "exports": "global:codemirror"
    },
    "./bower_components/codemirror/mode/css/css.js": {
        "exports": "global:codemirror_mode_css",
        "depends": { "./bower_components/codemirror/lib/codemirror.js": "codemirror" }
    },
    "./bower_components/codemirror/mode/htmlmixed/htmlmixed.js": {
        "exports": "global:codemirror_mode_htmlmixed",
        "depends": { "./bower_components/codemirror/lib/codemirror.js": "codemirror" }
    },
    "./bower_components/codemirror/mode/javascript/javascript.js": {
        "exports": "global:codemirror_mode_javascript",
        "depends": { "./bower_components/codemirror/lib/codemirror.js": "codemirror" }
    },
    "./bower_components/codemirror/mode/xml/xml.js": {
        "exports": "global:codemirror_mode_xml",
        "depends": { "./bower_components/codemirror/lib/codemirror.js": "codemirror" }
    },
    "./bower_components/FileSaver/FileSaver.js": {
        "exports": "global:FileSaver"
    },
    "./bower_components/less.js/dist/less-1.7.3.min.js": {
        "exports": "global:less"
    },
    "./bower_components/modernizr/modernizr.js": {
        "exports": "global:modernizr"
    },
    "./bower_components/spectrum/spectrum.js": {
        "exports": "global:spectrum",
        "depends": { "./bower_components/jquery/dist/jquery.min.js": "$" }
    },
    "./bower_components/tinycolor/tinycolor.js": {
        "exports": "global:tinycolor"
    },

}
