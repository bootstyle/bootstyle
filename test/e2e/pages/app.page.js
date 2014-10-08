(function() {
    'use strict';

    var AppPage = function() {
        // toolbar
        this.borderRadius = element(by.model('ctrls.border_radius.control'));
        this.padding = element(by.model('ctrls.padding.control'));
        this.fontSizeBase = element(by.model('ctrls.font_size_base.control'));
        this.lineHeight = element(by.model('ctrls.line_height.control'));

        // preview
        this.jumbotron = element(by.css('.jumbotron'));
        this.btnLg = element(by.css('.btn-lg'));
    };

    AppPage.prototype.get = function() {
        browser.get('/app');
    };

    // Base toolbar
    AppPage.prototype.setBorderRadiusMin = function() {
        setRangeMin(this.borderRadius);
    };

    AppPage.prototype.setBorderRadiusMax = function() {
        setRangeMax(this.borderRadius);
    };

    // helpers
    function setRangeMin(elem) {
        browser.actions().mouseDown(elem).mouseMove(elem, -100, 0).mouseUp().perform();
    }

    function setRangeMax(elem) {
        browser.actions().mouseDown(elem).mouseMove(elem, 100, 0).mouseUp().perform();
    }

    module.exports = AppPage;

}());
