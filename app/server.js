var connect = require('connect');
var port = Number(process.env.PORT || 35729);

connect()
    .use(connect.static('.'))
    .listen(port);
