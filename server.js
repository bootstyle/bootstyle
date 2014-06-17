/*
 This is the test server
 */

var connect = require('connect');

connect()
    .use(connect.static('.')).listen(49001);

console.log('Bootstyle is running at http://localhost:49001');
console.log('Cmd + C to quit.');
console.log('...\n');
