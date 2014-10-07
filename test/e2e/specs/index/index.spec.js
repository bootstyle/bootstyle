describe('index.html', function() {
    it('should have the correct title', function() {
        browser.get('/#');
        expect(browser.getTitle()).toBe("Bootstyle");
    });
});
