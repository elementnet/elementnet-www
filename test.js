$ = require("jquery");
fs = require("fs");
// Player test
fs.readFile("projects/player.js", function(err, data) {
  eval(data);
})
// Editor test
fs.readFile("projects/editor.js", function(err, data) {
  eval(data);
})
