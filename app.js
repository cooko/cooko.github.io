var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3002, function(){
    console.log('Server running on 3002...');
});