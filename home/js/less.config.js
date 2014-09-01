less = {
    env: "development",
    logLevel: 2,
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {
        random_hue: function() {
            return Math.round(360 * Math.random());
        }
    },
    dumpLineNumbers: "comments",
    relativeUrls: false,
    globalVars: {
        var1: '"string value"',
        var2: 'regular value'
    },
    rootpath: ":/a.com/"
};
