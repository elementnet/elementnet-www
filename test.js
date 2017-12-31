/* eslint no-magic-numbers: "off" */
var request = require('request');
var test = require('tape');
test('test server', function(t) {
    t.plan(3);
    request('http://localhost:5000/projects/editor/', function(error, response, body) {
        t.false(error);
        t.equal(response.statusCode, 200);
        t.notEqual(body.indexOf('New...'), -1);
    });
});
