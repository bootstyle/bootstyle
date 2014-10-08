describe('base', function() {

    beforeEach(function() {
        browser.get('/app');
    });

    describe('border radius', function() {

        beforeEach(function() {
        var input = element(by.model('ctrls.border_radius.control'));
        });

        it('should have a min of 0', function() {
            var value = rangeInput.getAttribute('value');
            
            expect(rangeInput);
        });
    });
});
