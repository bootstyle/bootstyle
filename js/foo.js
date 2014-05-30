window.CupOf = (function() {
    'use strict';

    // constructor
    function CupOf(contents) {

        this.contents = contents;

        // private constructor bits
        var private_property = 'this is a private property';
        var private_method = function() {
            return "I am a private method";
        };
    }

    // private library bits
    var public_property = "I am a public property";
    var private_method = function() {
        return "I am a public method";
    };


    // PUBLIC

    // Mutable
    // available without instantiation
    CupOf.help = "Try: new CupOf(<your favorite drink>)";

    // Immutable
    // only available on instantiation
    CupOf.prototype.pour = function() {
        if (CupOf.contents) {
            return 'Pouring a tasty coup of ' + CupOf.contents;
        } else {
            return 'Give me some contents first: CupOf.contents = "foo"';
        }
    };

    return CupOf;
}());
