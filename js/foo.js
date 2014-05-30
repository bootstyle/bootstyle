(function() {
    'use strict';


    /**
     * SETUP
     * Includes private library code only available here in the IIFE's scope
     */

    // Attach us to the window
    window.CupOf = CupOf;

    // Internal reference object
    // We can hide properties and methods here.
    // We can also hold state from instance to instance
    // Example, to issue an instance ID to new instances of CupOf
    var cup_of = {
        cups: [],
        last_id: 0,
        next_id: function() {
            return cup_of.last_id += 1;
        }
    };

    var iife_property = "I am a public property";

    var iife_method = function() {
        return "I am a public method";
    };


    /**
     * LIBRARY CONSTRUCTOR
     */

    function CupOf(contents) {

        if (contents) {
            this.instance_id = cup_of.next_id();
            this.contents = contents;
            cup_of.cups.push(this);
        } else {
            throw 'CupOf needs some contents: CupOf("contents")';
        }

        // PRIVATE CONSTRUCTOR CODE
        // Only available here in the Constructor's scope

        var private_property = 'this is a private property';

        var private_method = function() {
            return "I am a private method";
        };
    }


    // Perhaps more private IIFE scoped code here

    var another_iife_property = "I am a public property";

    var another_iife_method = function() {
        return "I am a public method";
    };


    CupOf.list_cups = function() {
        return cup_of.cups;
    };


    /**
     * PUBLIC OBJECT INSTANCE CODE
     */

    CupOf.prototype.contents = "They're in an object inaccessible to you!  Try pouring them out?";

    CupOf.prototype.pour = function() {
        return 'Pouring a big fat tasty cup of ' + cup_of.contents;
    };

}());
