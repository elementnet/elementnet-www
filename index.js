var StaticServer = require('static-server');
const PORT = process.env.PORT || 5000
var server = new StaticServer({
  rootPath: '.',
  port: PORT,
  templates: {notFound: '404.html', forbidden: '403.html'}
});

server.start(function () {
  console.log('Server listening to', server.port);
});
