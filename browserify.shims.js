module.exports = {
    "jquery": {
        "exports": "$"
    },
    "bootstrap": {
        "depends": [ "$" ]
    },
    "angular": {
        "exports": "angular",
        "depends": [ "$" ]
    },
    "angular-sanitize": {
        "depends": [ "angular" ]
    },
    "angular-bootstrap-colorpicker": {
        "depends": [ "angular" ]
    },
    "angular-spectrum-colorpicker": {
        "depends": [ "angular" ]
    }
}
