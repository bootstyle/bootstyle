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
            var jumbotronBorderRadius = appPage.jumbotron.getCssValue('border-radius');

            expect(jumbotronBorderRadius).toBe('0px');
        });

        it('should change jumbotron border radius to max', function() {
            var jumbotronBorderRadius = appPage.jumbotron.getCssValue('border-radius');

            expect(jumbotronBorderRadius).toBe('45px');
        });

    });

});
