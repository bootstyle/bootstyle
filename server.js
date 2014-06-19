var connect = require('connect');

connect().use(connect.static('.')).listen(5000);
