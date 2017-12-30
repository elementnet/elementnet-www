/* eslint no-process-env: "off", no-magic-numbers: "off", no-console: "off" */
var StaticServer = require('static-server');
const PORT = process.env.PORT || 5000;
var server = new StaticServer({
    port: PORT,
    rootPath: '.',
    templates: {notFound: '404.html'}
});
server.start(function () {
    console.log('Server listening to', server.port);
});
server.on('response', () => {
    server.stop();
});
