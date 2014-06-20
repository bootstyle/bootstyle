var connect = require('connect');
var port = Number(process.env.PORT || 5000);

connect()
    .use(connect.static('.'))
    .listen(port);
