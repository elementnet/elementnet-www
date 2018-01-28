const staticServer = require('node-static');

var fileServer = new staticServer.Server();

require('http')
    .createServer(function(request, response) {
        request
            .addListener('end', function() {
                fileServer.serve(request, response);
            })
            .resume();
    })
    .listen(process.env.PORT || 5000);
