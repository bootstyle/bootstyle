var AppPage = require('./pages/app.page.js');

describe('base', function() {
    var appPage;

    beforeEach(function() {
        appPage = new AppPage();
        appPage.get();
    });

    describe('border radius', function() {
//        it('should set jumbotron border radius to min', function() {
//            appPage.setBorderRadiusMin();
//            var jumbotronBorderRadius = appPage.jumbotron.getCssValue('border-radius');
//
//            expect(jumbotronBorderRadius).toBe('0px');
//        });

        it('should change jumbotron border radius to max', function() {
            appPage.setBorderRadiusMax();
            
            // works in browser
//            element(by.model('ctrls.border_radius.control')).then(function(elem) {
//                elem.getSize().then(function(dim) {
//                    return browser.actions().dragAndDrop(elem, {x: dim.width / 2, y: 0}).perform();
//                });
//            });

            var jumbotronBorderRadius = appPage.jumbotron.getCssValue('border-radius');
            expect(jumbotronBorderRadius).toBe('45px');

        });
    });
});
