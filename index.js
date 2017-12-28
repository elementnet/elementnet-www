var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',
  port: 7878,
  templates: {
    index: 'index.html',
    notFound: '404.html'
  }
});

server.start(function () {
  console.log('Server listening to', server.port);
});
