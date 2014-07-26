'use strict';

require('./module').

    factory('auto_overlay_color', ['FONT_CONTRAST', function(FONT_CONTRAST) {

        return function(color, contrast) {
            contrast = contrast || FONT_CONTRAST;

            var under = tinycolor(color),
                over;

            if (under.isDark()) {
                over = tinycolor.mix(under, '#fff', contrast);
            } else {
                over = tinycolor.mix(under, '#000', contrast);
            }

            return over.toHex8String();
        };
    }]);
