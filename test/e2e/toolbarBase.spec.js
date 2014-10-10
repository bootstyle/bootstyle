var AppPage = require('./pages/app.page.js');

describe('base', function() {
    var appPage;

    beforeEach(function() {
        appPage = new AppPage();
        appPage.get();
    });

    describe('border radius', function() {

        it('should set jumbotron border radius to min', function() {
            appPage.setBorderRadiusMin();

            expect(appPage.jumbotron.getCssValue('border-radius')).toBe('0px');
        });

        it('should change jumbotron border radius to max', function() {
            appPage.setBorderRadiusMax();

            expect(appPage.jumbotron.getCssValue('border-radius')).toBe('45px');
        });

    });

});
