var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',
  port: 13783
});

server.start(function () {
  console.log('Server listening to', server.port);
});
