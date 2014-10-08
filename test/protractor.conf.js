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
    capabilities: {
        'browserName': 'chrome'
    },
    rootElement: 'body',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
    suites: {
        toolbar: [
            './e2e/**/toolbar/*.spec.js'
        ],
        index: [
            './e2e/**/index/*.spec.js'
        ],
    },

};
