exports.config = {

    baseUrl: 'http://localhost:8000',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },
    multiCapabilities: [
        {
            browserName: 'firefox'
        },
        {
            browserName: 'chrome'
        }
    ],
    rootElement: 'body',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        toolbar: [
            './e2e/**/toolbar/*.spec.js'
        ],
        index: [
            './e2e/**/index/*.spec.js'
        ],
    },

};
