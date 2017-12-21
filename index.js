var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',
  port: 8080
});

server.start(function () {
  console.log('Server listening to', server.port);
});
