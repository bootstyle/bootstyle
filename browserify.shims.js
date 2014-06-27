module.exports = {
    "jquery": {
        "exports": "global:$"
    },
    "bootstrap": {
        "exports": "global:bootstrap",
        "depends": [ "jquery:$" ]
    },
    "angular": {
        "exports": "global:angular",
        "depends": [ "jquery:$" ]
    },
    "angular_sanitize": {
        "exports": "global:angular_sanitize",
        "depends": [ "angular:angular" ]
    },
    "angular_spectrum_colorpicker": {
        "exports": "global:angular_spectrum_colorpicker",
        "depends": [ "angular:angular" ]
    },
    "codemirror": {
        "exports": "global:codemirror"
    },
    "codemirror_mode_css": {
        "exports": "global:codemirror_mode_css",
        "depends": [ "codemirror:codemirror" ]
    },
    "codemirror_mode_htmlmixed": {
        "exports": "global:codemirror_mode_htmlmixed",
        "depends": [ "codemirror:codemirror" ]
    },
    "codemirror_mode_javascript": {
        "exports": "global:codemirror_mode_javascript",
        "depends": [ "codemirror:codemirror" ]
    },
    "codemirror_mode_xml": {
        "exports": "global:codemirror_mode_xml",
        "depends": [ "codemirror:codemirror" ]
    },
    "FileSaver": {
        "exports": "global:FileSaver"
    },
    "less": {
        "exports": "global:less"
    },
    "modernizr": {
        "exports": "global:modernizr"
    },
    "spectrum": {
        "exports": "global:spectrum",
        "depends": [ "jquery:$" ]
    },
    "tinycolor": {
        "exports": "global:tinycolor"
    }
}
